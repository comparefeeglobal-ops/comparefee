/**
 * CompareFee - Bybit Fee Adapter
 *
 * Source: https://www.bybit.com/en/help-center/article/Trading-Fee-Structure
 * No native coin discount — coinMaker/coinTaker omitted entirely.
 */

import { EXCHANGE_META } from '../exchangeMeta.js';

// No coin discount: helper just passes through
const t = (tier, min, maker, taker) => ({ tier, min, maker, taker });

export async function fetchBybit() {
  console.log('[Bybit] Loading fee tiers...');
  return {
    ...EXCHANGE_META.bybit,
    lastFetched: new Date().toISOString(),
    spot: {
      volumeBased: [
        t('Non-VIP',    0,           0.1000, 0.1000),
        t('VIP 1',      1_000_000,   0.0675, 0.0800),
        t('VIP 2',      5_000_000,   0.0650, 0.0775),
        t('VIP 3',      10_000_000,  0.0625, 0.0750),
        t('VIP 4',      25_000_000,  0.0500, 0.0600),
        t('VIP 5',      50_000_000,  0.0400, 0.0500),
        t('Supreme VIP',100_000_000, 0.0300, 0.0450),
      ],
      depositBased: [
        t('Non-VIP',    0,         0.1000, 0.1000),
        t('VIP 1',      100_000,   0.0675, 0.0800),
        t('VIP 2',      250_000,   0.0650, 0.0775),
        t('VIP 3',      500_000,   0.0625, 0.0750),
        t('VIP 4',      1_000_000, 0.0500, 0.0600),
        t('VIP 5',      3_000_000, 0.0400, 0.0500),
        t('Supreme VIP',5_000_000, 0.0300, 0.0450),
      ],
    },
    futures: {
      volumeBased: [
        t('Non-VIP',    0,           0.0200, 0.0550),
        t('VIP 1',      10_000_000,  0.0180, 0.0400),
        t('VIP 2',      25_000_000,  0.0160, 0.0375),
        t('VIP 3',      50_000_000,  0.0140, 0.0350),
        t('VIP 4',      100_000_000, 0.0120, 0.0320),
        t('VIP 5',      250_000_000, 0.0100, 0.0300),
        t('Supreme VIP',500_000_000, 0.0050, 0.0250),
      ],
      depositBased: [
        t('Non-VIP',    0,         0.0200, 0.0550),
        t('VIP 1',      100_000,   0.0180, 0.0400),
        t('VIP 2',      250_000,   0.0160, 0.0375),
        t('VIP 3',      500_000,   0.0140, 0.0350),
        t('VIP 4',      1_000_000, 0.0120, 0.0320),
        t('VIP 5',      3_000_000, 0.0100, 0.0300),
        t('Supreme VIP',5_000_000, 0.0050, 0.0250),
      ],
    },
  };
}
