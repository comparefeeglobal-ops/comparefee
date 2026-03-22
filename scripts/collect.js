#!/usr/bin/env node
/**
 * CompareFee - Fee Data Collection Script
 *
 * Run: node scripts/collect.js
 * 
 * This script:
 * 1. Calls each exchange adapter to get the latest fee data
 * 2. Validates the data (sanity checks)
 * 3. Generates a fresh src/data/exchangeData.js
 * 4. GitHub Actions commits and pushes the changes daily
 */

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { fetchBinance } from './adapters/binance.js';
import { fetchBybit }   from './adapters/bybit.js';
import { fetchOKX }     from './adapters/okx.js';
import { fetchBitget }  from './adapters/bitget.js';
import { fetchGate }    from './adapters/gate.js';
import { fetchKucoin }  from './adapters/kucoin.js';
import { fetchMexc }    from './adapters/mexc.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '../src/data/exchangeData.js');

// ============================================================
// Validation
// ============================================================

function validateExchange(data) {
  const errors = [];

  if (!data.id || !data.name) errors.push('Missing id or name');
  if (!data.spot || !data.futures) errors.push('Missing spot or futures data');
  if (!data.rebate?.spot || !data.rebate?.futures) errors.push('Missing rebate rates');

  const validateTiers = (tiers, label) => {
    if (!Array.isArray(tiers) || tiers.length === 0) {
      errors.push(`${label}: empty tier array`);
      return;
    }
    tiers.forEach((t, i) => {
      // Sanity check: fees should be between -0.1% and 0.5%
      if (t.maker < -0.1 || t.maker > 0.5) errors.push(`${label}[${i}] maker out of range: ${t.maker}`);
      if (t.taker < -0.1 || t.taker > 0.5) errors.push(`${label}[${i}] taker out of range: ${t.taker}`);
      // Taker should generally be >= maker (negative makers are intentional rebates)
      if (t.taker < t.maker) errors.push(`${label}[${i}] taker (${t.taker}) < maker (${t.maker}) — verify this is correct`);
    });
  };

  if (data.spot) {
    validateTiers(data.spot.volumeBased, `${data.name} spot.volumeBased`);
    validateTiers(data.spot.depositBased, `${data.name} spot.depositBased`);
  }
  if (data.futures) {
    validateTiers(data.futures.volumeBased, `${data.name} futures.volumeBased`);
    validateTiers(data.futures.depositBased, `${data.name} futures.depositBased`);
  }

  return errors;
}

// ============================================================
// Code Generator
// ============================================================

function generateDataFile(exchanges) {
  const timestamp = new Date().toISOString();
  const json = JSON.stringify(exchanges, null, 2);

  return `/**
 * CompareFee - Exchange Fee Data
 * 
 * ⚠️  AUTO-GENERATED FILE — Do not edit manually!
 *     Last updated: ${timestamp}
 *     Run 'node scripts/collect.js' to refresh.
 */

export const exchanges = ${json};
`;
}

// ============================================================
// Main
// ============================================================

async function main() {
  console.log('🚀 CompareFee fee data collection started');
  console.log(`📅 ${new Date().toISOString()}\n`);

  // Fetch all exchanges (fail-fast on complete failure, continue on partial)
  const fetchers = [
    { name: 'Binance', fn: fetchBinance },
    { name: 'Bybit',   fn: fetchBybit },
    { name: 'OKX',     fn: fetchOKX },
    { name: 'Bitget',  fn: fetchBitget },
    { name: 'Gate.io', fn: fetchGate },
    { name: 'KuCoin',  fn: fetchKucoin },
    { name: 'MEXC',    fn: fetchMexc },
  ];

  const results = await Promise.allSettled(fetchers.map(f => f.fn()));
  
  const exchanges = [];
  let hasErrors = false;

  results.forEach((result, i) => {
    const { name } = fetchers[i];
    if (result.status === 'rejected') {
      console.error(`❌ ${name}: fetch failed — ${result.reason}`);
      hasErrors = true;
      return;
    }

    const data = result.value;
    const errors = validateExchange(data);

    if (errors.length > 0) {
      console.error(`❌ ${name}: validation failed`);
      errors.forEach(e => console.error(`   - ${e}`));
      hasErrors = true;
      return;
    }

    console.log(`✅ ${name}: OK (${data.spot.volumeBased.length} spot tiers)`);
    exchanges.push(data);
  });

  if (exchanges.length === 0) {
    console.error('\n💥 All fetchers failed — aborting. exchangeData.js NOT updated.');
    process.exit(1);
  }

  if (hasErrors) {
    console.warn('\n⚠️  Some fetchers failed. Writing data for successful exchanges only.');
  }

  // Write output
  const fileContent = generateDataFile(exchanges);
  writeFileSync(OUTPUT_PATH, fileContent, 'utf8');

  console.log(`\n✅ exchangeData.js updated with ${exchanges.length} exchanges`);
  console.log(`📁 ${OUTPUT_PATH}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
