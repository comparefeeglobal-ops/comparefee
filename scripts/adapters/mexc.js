/**
 * CompareFee - MEXC Fee Adapter
 *
 * Source: https://www.mexc.com/fee
 * MEXC's standout feature: 0% maker fees for both spot and futures.
 * MX token provides 20% discount on trading fees.
 * VIP Lv1-Lv7 based on 30-day volume.
 */

import { EXCHANGE_META } from '../exchangeMeta.js';

const { coinDiscountRate } = EXCHANGE_META.mexc;
const coinMult = 1 - coinDiscountRate;

const t = (tier, min, maker, taker) => ({
  tier, min, maker, taker,
  coinMaker: +(maker * coinMult).toFixed(4),
  coinTaker: +(taker * coinMult).toFixed(4),
});

export async function fetchMexc() {
  console.log('[MEXC] Loading fee tiers...');
  return {
    ...EXCHANGE_META.mexc,
    lastFetched: new Date().toISOString(),
    spot: {
      volumeBased: [
        t('Non-VIP', 0,            0.0000, 0.0500),
        t('Lv 1',    10_000_000,   0.0000, 0.0450),
        t('Lv 2',    20_000_000,   0.0000, 0.0400),
        t('Lv 3',    50_000_000,   0.0000, 0.0350),
        t('Lv 4',    100_000_000,  0.0000, 0.0300),
        t('Lv 5',    200_000_000,  0.0000, 0.0250),
        t('Lv 6',    500_000_000,  0.0000, 0.0200),
        t('Lv 7',    1_000_000_000,0.0000, 0.0150),
      ],
      depositBased: [
        t('Non-VIP', 0,          0.0000, 0.0500),
        t('Lv 1',    100_000,    0.0000, 0.0450),
        t('Lv 2',    500_000,    0.0000, 0.0400),
        t('Lv 3',    1_000_000,  0.0000, 0.0350),
        t('Lv 4',    3_000_000,  0.0000, 0.0300),
        t('Lv 5',    5_000_000,  0.0000, 0.0250),
        t('Lv 6',    10_000_000, 0.0000, 0.0200),
        t('Lv 7',    30_000_000, 0.0000, 0.0150),
      ],
    },
    futures: {
      volumeBased: [
        t('Non-VIP', 0,            0.0000, 0.0200),
        t('Lv 1',    10_000_000,   0.0000, 0.0190),
        t('Lv 2',    20_000_000,   0.0000, 0.0180),
        t('Lv 3',    50_000_000,   0.0000, 0.0170),
        t('Lv 4',    100_000_000,  0.0000, 0.0160),
        t('Lv 5',    200_000_000,  0.0000, 0.0150),
        t('Lv 6',    500_000_000,  0.0000, 0.0140),
        t('Lv 7',    1_000_000_000,0.0000, 0.0130),
      ],
      depositBased: [
        t('Non-VIP', 0,          0.0000, 0.0200),
        t('Lv 1',    100_000,    0.0000, 0.0190),
        t('Lv 2',    500_000,    0.0000, 0.0180),
        t('Lv 3',    1_000_000,  0.0000, 0.0170),
        t('Lv 4',    3_000_000,  0.0000, 0.0160),
        t('Lv 5',    5_000_000,  0.0000, 0.0150),
        t('Lv 6',    10_000_000, 0.0000, 0.0140),
        t('Lv 7',    30_000_000, 0.0000, 0.0130),
      ],
    },
  };
}
