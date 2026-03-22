/**
 * CompareFee - KuCoin Fee Adapter
 *
 * Source: https://www.kucoin.com/vip/level
 * KCS token provides 20% discount on spot fees (not futures).
 * VIP 0-12 tiers. We include VIP 0-8 for MVP.
 *
 * Note: As of 2026-03-23, VIP9-12 maker rebates removed for futures
 *       and standardized to 0%. Reflected here.
 */

import { EXCHANGE_META } from '../exchangeMeta.js';

const { coinDiscountRate } = EXCHANGE_META.kucoin;
const coinMult = 1 - coinDiscountRate;

// KCS discount applies to spot only, not futures
const tSpot = (tier, min, maker, taker) => ({
  tier, min, maker, taker,
  coinMaker: +(maker * coinMult).toFixed(4),
  coinTaker: +(taker * coinMult).toFixed(4),
});
const tFut = (tier, min, maker, taker) => ({ tier, min, maker, taker });

export async function fetchKucoin() {
  console.log('[KuCoin] Loading fee tiers...');
  return {
    ...EXCHANGE_META.kucoin,
    lastFetched: new Date().toISOString(),
    spot: {
      volumeBased: [
        tSpot('VIP 0',  0,            0.1000, 0.1000),
        tSpot('VIP 1',  1_000_000,    0.0900, 0.0930),
        tSpot('VIP 2',  5_000_000,    0.0800, 0.0850),
        tSpot('VIP 3',  10_000_000,   0.0600, 0.0700),
        tSpot('VIP 4',  25_000_000,   0.0500, 0.0650),
        tSpot('VIP 5',  50_000_000,   0.0350, 0.0550),
        tSpot('VIP 6',  100_000_000,  0.0250, 0.0450),
        tSpot('VIP 7',  200_000_000,  0.0150, 0.0400),
        tSpot('VIP 8',  500_000_000,  0.0000, 0.0350),
      ],
      depositBased: [
        tSpot('VIP 0',  0,          0.1000, 0.1000),
        tSpot('VIP 1',  50_000,     0.0900, 0.0930),
        tSpot('VIP 2',  200_000,    0.0800, 0.0850),
        tSpot('VIP 3',  500_000,    0.0600, 0.0700),
        tSpot('VIP 4',  1_000_000,  0.0500, 0.0650),
        tSpot('VIP 5',  3_000_000,  0.0350, 0.0550),
        tSpot('VIP 6',  5_000_000,  0.0250, 0.0450),
        tSpot('VIP 7',  10_000_000, 0.0150, 0.0400),
        tSpot('VIP 8',  30_000_000, 0.0000, 0.0350),
      ],
    },
    futures: {
      volumeBased: [
        tFut('VIP 0',  0,            0.0200, 0.0600),
        tFut('VIP 1',  5_000_000,    0.0160, 0.0550),
        tFut('VIP 2',  10_000_000,   0.0140, 0.0500),
        tFut('VIP 3',  25_000_000,   0.0120, 0.0480),
        tFut('VIP 4',  50_000_000,   0.0100, 0.0460),
        tFut('VIP 5',  100_000_000,  0.0060, 0.0480),
        tFut('VIP 6',  200_000_000,  0.0040, 0.0420),
        tFut('VIP 7',  500_000_000,  0.0020, 0.0380),
        tFut('VIP 8',  1_000_000_000,0.0000, 0.0350),
      ],
      depositBased: [
        tFut('VIP 0',  0,          0.0200, 0.0600),
        tFut('VIP 1',  50_000,     0.0160, 0.0550),
        tFut('VIP 2',  200_000,    0.0140, 0.0500),
        tFut('VIP 3',  500_000,    0.0120, 0.0480),
        tFut('VIP 4',  1_000_000,  0.0100, 0.0460),
        tFut('VIP 5',  3_000_000,  0.0060, 0.0480),
        tFut('VIP 6',  5_000_000,  0.0040, 0.0420),
        tFut('VIP 7',  10_000_000, 0.0020, 0.0380),
        tFut('VIP 8',  30_000_000, 0.0000, 0.0350),
      ],
    },
  };
}
