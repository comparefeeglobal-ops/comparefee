/**
 * CompareFee - Bitget Fee Adapter
 *
 * Source: https://www.bitget.com/fee
 * coinDiscountRate = 20% → paying fees in BGB gives 20% discount
 */

import { EXCHANGE_META } from '../exchangeMeta.js';

const { coinDiscountRate } = EXCHANGE_META.bitget;
const coinMult = 1 - coinDiscountRate;

const t = (tier, min, maker, taker) => ({
  tier, min, maker, taker,
  coinMaker: +(maker * coinMult).toFixed(4),
  coinTaker: +(taker * coinMult).toFixed(4),
});

export async function fetchBitget() {
  console.log('[Bitget] Loading fee tiers...');
  return {
    ...EXCHANGE_META.bitget,
    lastFetched: new Date().toISOString(),
    spot: {
      volumeBased: [
        t('VIP 0', 0,           0.1000, 0.1000),
        t('VIP 1', 5_000_000,   0.0800, 0.0800),
        t('VIP 2', 10_000_000,  0.0650, 0.0700),
        t('VIP 3', 25_000_000,  0.0500, 0.0600),
        t('VIP 4', 50_000_000,  0.0400, 0.0500),
        t('VIP 5', 100_000_000, 0.0300, 0.0400),
        t('VIP 6', 200_000_000, 0.0200, 0.0350),
        t('VIP 7', 500_000_000, 0.0100, 0.0300),
      ],
      depositBased: [
        t('VIP 0', 0,          0.1000, 0.1000),
        t('VIP 1', 100_000,    0.0800, 0.0800),
        t('VIP 2', 200_000,    0.0650, 0.0700),
        t('VIP 3', 500_000,    0.0500, 0.0600),
        t('VIP 4', 1_000_000,  0.0400, 0.0500),
        t('VIP 5', 3_000_000,  0.0300, 0.0400),
        t('VIP 6', 5_000_000,  0.0200, 0.0350),
        t('VIP 7', 10_000_000, 0.0100, 0.0300),
      ],
    },
    futures: {
      volumeBased: [
        t('VIP 0', 0,            0.0200, 0.0600),
        t('VIP 1', 10_000_000,   0.0180, 0.0400),
        t('VIP 2', 25_000_000,   0.0160, 0.0375),
        t('VIP 3', 50_000_000,   0.0140, 0.0350),
        t('VIP 4', 100_000_000,  0.0120, 0.0320),
        t('VIP 5', 250_000_000,  0.0100, 0.0300),
        t('VIP 6', 500_000_000,  0.0060, 0.0270),
        t('VIP 7', 1_000_000_000,0.0040, 0.0250),
      ],
      depositBased: [
        t('VIP 0', 0,          0.0200, 0.0600),
        t('VIP 1', 100_000,    0.0180, 0.0400),
        t('VIP 2', 200_000,    0.0160, 0.0375),
        t('VIP 3', 500_000,    0.0140, 0.0350),
        t('VIP 4', 1_000_000,  0.0120, 0.0320),
        t('VIP 5', 3_000_000,  0.0100, 0.0300),
        t('VIP 6', 5_000_000,  0.0060, 0.0270),
        t('VIP 7', 10_000_000, 0.0040, 0.0250),
      ],
    },
  };
}
