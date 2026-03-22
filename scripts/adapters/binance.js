/**
 * CompareFee - Binance Fee Adapter
 *
 * Source: https://www.binance.com/en/fee/schedule
 * Verify and update the tier tables below when Binance changes fees.
 *
 * TODO: If a public or authenticated API becomes usable:
 *   const res = await fetch('https://api.binance.com/sapi/v1/asset/tradeFee', { headers: {...} });
 */

import { EXCHANGE_META } from '../exchangeMeta.js';

// coinDiscountRate = 10% → multiply base fees by 0.90
const { coinDiscountRate } = EXCHANGE_META.binance;
const coinMult = 1 - coinDiscountRate;

// Helper: build a tier with coin discount auto-calculated
const t = (tier, min, maker, taker) => ({
  tier, min, maker, taker,
  coinMaker: +(maker * coinMult).toFixed(4),
  coinTaker: +(taker * coinMult).toFixed(4),
});

export async function fetchBinance() {
  console.log('[Binance] Loading fee tiers...');
  return {
    ...EXCHANGE_META.binance,
    lastFetched: new Date().toISOString(),
    spot: {
      volumeBased: [
        t('VIP 0', 0,           0.1000, 0.1000),
        t('VIP 1', 1_000_000,   0.0900, 0.1000),
        t('VIP 2', 5_000_000,   0.0800, 0.1000),
        t('VIP 3', 20_000_000,  0.0420, 0.0600),
        t('VIP 4', 100_000_000, 0.0420, 0.0540),
        t('VIP 5', 150_000_000, 0.0360, 0.0480),
        t('VIP 6', 400_000_000, 0.0300, 0.0420),
        t('VIP 7', 800_000_000, 0.0240, 0.0360),
        t('VIP 8', 2_000_000_000, 0.0180, 0.0300),
        t('VIP 9', 4_000_000_000, 0.0120, 0.0240),
      ],
      depositBased: [
        t('VIP 0', 0,         0.1000, 0.1000),
        t('VIP 1', 3_500,     0.0900, 0.1000),
        t('VIP 2', 17_500,    0.0800, 0.1000),
        t('VIP 3', 70_000,    0.0420, 0.0600),
        t('VIP 4', 175_000,   0.0420, 0.0540),
        t('VIP 5', 700_000,   0.0360, 0.0480),
        t('VIP 6', 1_750_000, 0.0300, 0.0420),
        t('VIP 7', 3_500_000, 0.0240, 0.0360),
        t('VIP 8', 7_000_000, 0.0180, 0.0300),
        t('VIP 9', 17_500_000,0.0120, 0.0240),
      ],
    },
    futures: {
      volumeBased: [
        t('VIP 0', 0,           0.0200, 0.0500),
        t('VIP 1', 5_000_000,   0.0180, 0.0400),
        t('VIP 2', 10_000_000,  0.0160, 0.0350),
        t('VIP 3', 50_000_000,  0.0140, 0.0320),
        t('VIP 4', 100_000_000, 0.0120, 0.0300),
        t('VIP 5', 200_000_000, 0.0100, 0.0270),
        t('VIP 6', 400_000_000, 0.0080, 0.0250),
        t('VIP 7', 800_000_000, 0.0060, 0.0220),
        t('VIP 8', 2_000_000_000, 0.0040, 0.0200),
        t('VIP 9', 4_000_000_000, 0.0000, 0.0170),
      ],
      depositBased: [
        t('VIP 0', 0,         0.0200, 0.0500),
        t('VIP 1', 3_500,     0.0180, 0.0400),
        t('VIP 2', 17_500,    0.0160, 0.0350),
        t('VIP 3', 70_000,    0.0140, 0.0320),
        t('VIP 4', 175_000,   0.0120, 0.0300),
        t('VIP 5', 700_000,   0.0100, 0.0270),
        t('VIP 6', 1_750_000, 0.0080, 0.0250),
        t('VIP 7', 3_500_000, 0.0060, 0.0220),
        t('VIP 8', 7_000_000, 0.0040, 0.0200),
        t('VIP 9', 17_500_000,0.0000, 0.0170),
      ],
    },
  };
}
