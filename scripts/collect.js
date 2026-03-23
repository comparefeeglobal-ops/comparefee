#!/usr/bin/env node
/**
 * CompareFee - Fee Data Compiler
 *
 * Run: node scripts/collect.js
 *
 * Reads all manually maintained exchange files from src/data/exchanges/,
 * validates them, and writes a fresh src/data/exchangeData.js.
 *
 * To add a new exchange:
 * 1. Create src/data/exchanges/[id].js following __template.js
 * 2. Import it below and add to the EXCHANGES array
 */

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import binance from '../src/data/exchanges/binance.js';
import bybit   from '../src/data/exchanges/bybit.js';
import okx     from '../src/data/exchanges/okx.js';
import bitget  from '../src/data/exchanges/bitget.js';
import gate    from '../src/data/exchanges/gate.js';
import kucoin  from '../src/data/exchanges/kucoin.js';
import lbank   from '../src/data/exchanges/lbank.js';
import bingx   from '../src/data/exchanges/bingx.js';
import bitunix from '../src/data/exchanges/bitunix.js';
import htx     from '../src/data/exchanges/htx.js';
import bitmart from '../src/data/exchanges/bitmart.js';
import coinw   from '../src/data/exchanges/coinw.js';
import toobit  from '../src/data/exchanges/toobit.js';
import xt      from '../src/data/exchanges/xt.js';

const EXCHANGES = [
  binance, bybit, okx, bitget, gate, kucoin,
  lbank, bingx, bitunix, htx, bitmart, coinw, toobit, xt,
];

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '../src/data/exchangeData.js');

// ============================================================
// Validation
// ============================================================

function validateExchange(data) {
  const errors = [];

  if (!data.id || !data.name) errors.push('Missing id or name');
  if (!data.spot || !data.futures) errors.push('Missing spot or futures data');
  if (data.rebate?.spot == null || data.rebate?.futures == null) errors.push('Missing rebate rates');

  const validateTiers = (tiers, label) => {
    if (!Array.isArray(tiers) || tiers.length === 0) {
      errors.push(`${label}: empty tier array`);
      return;
    }
    tiers.forEach((t, i) => {
      if (t.min === Infinity) errors.push(`${label}[${i}] (${t.tier}): min is Infinity — remove this tier or set a real threshold`);
      if (t.maker < -0.1 || t.maker > 0.5) errors.push(`${label}[${i}] maker out of range: ${t.maker}`);
      if (t.taker < -0.1 || t.taker > 0.5) errors.push(`${label}[${i}] taker out of range: ${t.taker}`);
    });
  };

  if (data.spot) {
    validateTiers(data.spot.volumeBased,  `${data.name} spot.volumeBased`);
    validateTiers(data.spot.depositBased, `${data.name} spot.depositBased`);
  }
  if (data.futures) {
    validateTiers(data.futures.volumeBased,  `${data.name} futures.volumeBased`);
    validateTiers(data.futures.depositBased, `${data.name} futures.depositBased`);
  }

  return errors;
}

// ============================================================
// Deposit Currency Price Fetcher
// ============================================================

async function fetchDepositCurrencyPrices(exchanges) {
  const currencies = [...new Set(exchanges.map(ex => ex.depositCurrency).filter(Boolean))];
  if (currencies.length === 0) return {};

  const prices = {};

  await Promise.all(currencies.map(async (currency) => {
    try {
      if (currency === 'BNB') {
        const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
        const data = await res.json();
        prices['BNB'] = parseFloat(data.price);
        console.log(`💱 BNB/USDT: $${prices['BNB']}`);
      } else if (currency === 'KCS') {
        const res = await fetch('https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=KCS-USDT');
        const data = await res.json();
        prices['KCS'] = parseFloat(data.data.price);
        console.log(`💱 KCS/USDT: $${prices['KCS']}`);
      }
    } catch (e) {
      console.warn(`⚠️  Failed to fetch ${currency}/USDT price: ${e.message}`);
      prices[currency] = null;
    }
  }));

  return prices;
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
  console.log('🚀 CompareFee fee data compiler started');
  console.log(`📅 ${new Date().toISOString()}\n`);

  const valid = [];
  let hasErrors = false;

  for (const exchange of EXCHANGES) {
    if (!exchange.active) {
      console.log(`⏭️  ${exchange.name}: skipped (active: false)`);
      continue;
    }

    const errors = validateExchange(exchange);
    if (errors.length > 0) {
      console.error(`❌ ${exchange.name}: validation failed`);
      errors.forEach(e => console.error(`   - ${e}`));
      hasErrors = true;
    } else {
      console.log(`✅ ${exchange.name}: OK (spot ${exchange.spot.volumeBased.length} vol tiers, futures ${exchange.futures.volumeBased.length} vol tiers)`);
      valid.push(exchange);
    }
  }

  console.log('');

  if (valid.length === 0) {
    console.error('💥 No valid exchanges — aborting. exchangeData.js NOT updated.');
    process.exit(1);
  }

  if (hasErrors) {
    console.warn('⚠️  Some exchanges failed validation and were excluded.');
  }

  // Fetch deposit currency prices (BNB, KCS) for exchanges with native coin deposit tiers
  const prices = await fetchDepositCurrencyPrices(valid);

  // Attach depositUSDTRate to each exchange that needs it
  const enriched = valid.map(ex => {
    if (!ex.depositCurrency) return ex;
    const rate = prices[ex.depositCurrency] ?? null;
    if (rate === null) {
      console.warn(`⚠️  ${ex.name}: depositUSDTRate set to null (fetch failed) — deposit tier matching will be disabled`);
    }
    return { ...ex, depositUSDTRate: rate };
  });

  const fileContent = generateDataFile(enriched);
  writeFileSync(OUTPUT_PATH, fileContent, 'utf8');

  console.log(`\n✅ exchangeData.js updated with ${enriched.length} exchanges`);
  console.log(`📁 ${OUTPUT_PATH}`);
}

main();
