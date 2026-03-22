/**
 * CompareFee - Exchange Master Configuration
 *
 * Single source of truth for exchange metadata.
 * Imported by both adapters (scripts/) and the frontend (src/).
 *
 * To add a new exchange:
 * 1. Add an entry here
 * 2. Create scripts/adapters/[id].js
 * 3. Import it in scripts/collect.js
 */

export const EXCHANGE_META = {
  binance: {
    id: 'binance',
    name: 'Binance',
    color: '#F0B90B',
    nativeCoin: 'BNB',
    coinDiscountRate: 0.10,     // 10% discount when paying fees in BNB
    referralUrl: 'https://accounts.binance.com/register?ref=FEERADAR',
    rebate: { spot: 0.20, futures: 0.20 },
    active: true,
  },
  bybit: {
    id: 'bybit',
    name: 'Bybit',
    color: '#F7A600',
    nativeCoin: null,
    coinDiscountRate: null,
    referralUrl: 'https://www.bybit.com/register?affiliate_id=FEERADAR',
    rebate: { spot: 0.20, futures: 0.20 },
    active: true,
  },
  okx: {
    id: 'okx',
    name: 'OKX',
    color: '#FFFFFF',
    nativeCoin: null,
    coinDiscountRate: null,
    referralUrl: 'https://www.okx.com/join?channelId=FEERADAR',
    rebate: { spot: 0.20, futures: 0.20 },
    active: true,
  },
  bitget: {
    id: 'bitget',
    name: 'Bitget',
    color: '#00F0FF',
    nativeCoin: 'BGB',
    coinDiscountRate: 0.20,
    referralUrl: 'https://www.bitget.com/referral/register?clacCode=FEERADAR',
    rebate: { spot: 0.20, futures: 0.20 },
    active: true,
  },
  gate: {
    id: 'gate',
    name: 'Gate.io',
    color: '#2354E6',
    nativeCoin: 'GT',
    coinDiscountRate: 0.25,     // Up to 25% discount with GT holdings
    referralUrl: 'https://www.gate.io/signup?ref=FEERADAR',
    rebate: { spot: 0.20, futures: 0.20 },
    active: true,
  },
  kucoin: {
    id: 'kucoin',
    name: 'KuCoin',
    color: '#23AF91',
    nativeCoin: 'KCS',
    coinDiscountRate: 0.20,     // 20% discount when paying fees in KCS
    referralUrl: 'https://www.kucoin.com/r/FEERADAR',
    rebate: { spot: 0.20, futures: 0.20 },
    active: true,
  },
  mexc: {
    id: 'mexc',
    name: 'MEXC',
    color: '#1972E2',
    nativeCoin: 'MX',
    coinDiscountRate: 0.20,     // 20% discount with MX deduction
    referralUrl: 'https://www.mexc.com/register?inviteCode=FEERADAR',
    rebate: { spot: 0.20, futures: 0.20 },
    active: true,
  },
};
