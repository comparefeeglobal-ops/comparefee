/**
 * CompareFee - Gate.io Fee Adapter
 *
 * Source: https://www.gate.io/fee
 * GT token provides up to 25% discount on fees.
 * VIP 0-16 tiers based on 30-day volume.
 * We include a representative subset (VIP 0-8) for the MVP.
 */

import { EXCHANGE_META } from '../exchangeMeta.js';

const { coinDiscountRate } = EXCHANGE_META.gate;
const coinMult = 1 - coinDiscountRate;

const t = (tier, min, maker, taker) => ({
  tier, min, maker, taker,
  coinMaker: +(maker * coinMult).toFixed(4),
  coinTaker: +(taker * coinMult).toFixed(4),
});

export async function fetchGate() {
  console.log('[Gate.io] Loading fee tiers...');
  return {
    ...EXCHANGE_META.gate,
    lastFetched: new Date().toISOString(),
    spot: {
      volumeBased: [
        t('VIP 0',  0,           0.1000, 0.1000),
        t('VIP 1',  1_000_000,   0.0850, 0.0900),
        t('VIP 2',  5_000_000,   0.0760, 0.0810),
        t('VIP 3',  10_000_000,  0.0650, 0.0750),
        t('VIP 4',  25_000_000,  0.0550, 0.0650),
        t('VIP 5',  50_000_000,  0.0450, 0.0550),
        t('VIP 6',  100_000_000, 0.0350, 0.0450),
        t('VIP 7',  250_000_000, 0.0250, 0.0350),
        t('VIP 8',  500_000_000, 0.0150, 0.0250),
      ],
      depositBased: [
        t('VIP 0',  0,          0.1000, 0.1000),
        t('VIP 1',  50_000,     0.0850, 0.0900),
        t('VIP 2',  200_000,    0.0760, 0.0810),
        t('VIP 3',  500_000,    0.0650, 0.0750),
        t('VIP 4',  1_000_000,  0.0550, 0.0650),
        t('VIP 5',  3_000_000,  0.0450, 0.0550),
        t('VIP 6',  5_000_000,  0.0350, 0.0450),
        t('VIP 7',  10_000_000, 0.0250, 0.0350),
        t('VIP 8',  30_000_000, 0.0150, 0.0250),
      ],
    },
    futures: {
      volumeBased: [
        t('VIP 0',  0,           0.0200, 0.0500),
        t('VIP 1',  5_000_000,   0.0180, 0.0450),
        t('VIP 2',  10_000_000,  0.0160, 0.0420),
        t('VIP 3',  25_000_000,  0.0140, 0.0400),
        t('VIP 4',  50_000_000,  0.0120, 0.0380),
        t('VIP 5',  100_000_000, 0.0100, 0.0350),
        t('VIP 6',  200_000_000, 0.0080, 0.0300),
        t('VIP 7',  500_000_000, 0.0060, 0.0250),
        t('VIP 8',  1_000_000_000,0.0040, 0.0200),
      ],
      depositBased: [
        t('VIP 0',  0,          0.0200, 0.0500),
        t('VIP 1',  50_000,     0.0180, 0.0450),
        t('VIP 2',  200_000,    0.0160, 0.0420),
        t('VIP 3',  500_000,    0.0140, 0.0400),
        t('VIP 4',  1_000_000,  0.0120, 0.0380),
        t('VIP 5',  3_000_000,  0.0100, 0.0350),
        t('VIP 6',  5_000_000,  0.0080, 0.0300),
        t('VIP 7',  10_000_000, 0.0060, 0.0250),
        t('VIP 8',  30_000_000, 0.0040, 0.0200),
      ],
    },
  };
}
