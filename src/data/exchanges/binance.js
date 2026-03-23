/**
 * CompareFee — Binance Fee Data
 * Last updated: 2026-03-22
 * Source: https://www.binance.com/en/fee/schedule
 */
export default {
  id: "binance",
  name: "Binance",
  color: "#F0B90B",
  nativeCoin: "BNB",
  coinDiscountRate: 0.1,
  referralUrl: "https://accounts.binance.com/register?ref=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.100, taker: 0.100, coinMaker: 0.07500, coinTaker: 0.07500 },
      { tier: "VIP 1", min: 1_000_000, maker: 0.090, taker: 0.100, coinMaker: 0.06750, coinTaker: 0.07500 },
      { tier: "VIP 2", min: 5_000_000, maker: 0.080, taker: 0.100, coinMaker: 0.06000, coinTaker: 0.07500 },
      { tier: "VIP 3", min: 20_000_000, maker: 0.040, taker: 0.060, coinMaker: 0.03000, coinTaker: 0.04500 },
      { tier: "VIP 4", min: 75_000_000, maker: 0.040, taker: 0.052, coinMaker: 0.03000, coinTaker: 0.03900 },
      { tier: "VIP 5", min: 150_000_000, maker: 0.025, taker: 0.031, coinMaker: 0.01875, coinTaker: 0.02325 },
      { tier: "VIP 6", min: 400_000_000, maker: 0.020, taker: 0.029, coinMaker: 0.01500, coinTaker: 0.02175 },
      { tier: "VIP 7", min: 800_000_000, maker: 0.019, taker: 0.028, coinMaker: 0.01425, coinTaker: 0.02100 },
      { tier: "VIP 8", min: 2_000_000_000, maker: 0.016, taker: 0.025, coinMaker: 0.01200, coinTaker: 0.01875 },
      { tier: "VIP 9", min: 4_000_000_000, maker: 0.011, taker: 0.023, coinMaker: 0.00825, coinTaker: 0.01725 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.100, taker: 0.100, coinMaker: 0.07500, coinTaker: 0.07500 },
      { tier: "VIP 1", min: 5, maker: 0.090, taker: 0.100, coinMaker: 0.06750, coinTaker: 0.07500 },
      { tier: "VIP 2", min: 25, maker: 0.080, taker: 0.100, coinMaker: 0.06000, coinTaker: 0.07500 },
      { tier: "VIP 3", min: 100, maker: 0.040, taker: 0.060, coinMaker: 0.03000, coinTaker: 0.04500 },
      { tier: "VIP 4", min: 500, maker: 0.040, taker: 0.052, coinMaker: 0.03000, coinTaker: 0.03900 },
      { tier: "VIP 5", min: 1_000, maker: 0.025, taker: 0.031, coinMaker: 0.01875, coinTaker: 0.02325 },
      { tier: "VIP 6", min: 1_750, maker: 0.020, taker: 0.029, coinMaker: 0.01500, coinTaker: 0.02175 },
      { tier: "VIP 7", min: 3_000, maker: 0.019, taker: 0.028, coinMaker: 0.01425, coinTaker: 0.02100 },
      { tier: "VIP 8", min: 4_500, maker: 0.016, taker: 0.025, coinMaker: 0.01200, coinTaker: 0.01875 },
      { tier: "VIP 9", min: 5_500, maker: 0.011, taker: 0.023, coinMaker: 0.00825, coinTaker: 0.01725 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0500, coinMaker: 0.0180, coinTaker: 0.0450 },
      { tier: "VIP 1", min: 5_000_000, maker: 0.0180, taker: 0.0500, coinMaker: 0.0162, coinTaker: 0.0450 },
      { tier: "VIP 2", min: 10_000_000, maker: 0.0160, taker: 0.0400, coinMaker: 0.0144, coinTaker: 0.0360 },
      { tier: "VIP 3", min: 50_000_000, maker: 0.0120, taker: 0.0320, coinMaker: 0.0108, coinTaker: 0.0288 },
      { tier: "VIP 4", min: 600_000_000, maker: 0.0100, taker: 0.0300, coinMaker: 0.0090, coinTaker: 0.0270 },
      { tier: "VIP 5", min: 1_000_000_000, maker: 0.0080, taker: 0.0270, coinMaker: 0.0072, coinTaker: 0.0243 },
      { tier: "VIP 6", min: 2_500_000_000, maker: 0.0060, taker: 0.0250, coinMaker: 0.0054, coinTaker: 0.0225 },
      { tier: "VIP 7", min: 5_000_000_000, maker: 0.0040, taker: 0.0220, coinMaker: 0.0036, coinTaker: 0.0198 },
      { tier: "VIP 8", min: 12_500_000_000, maker: 0.0020, taker: 0.0200, coinMaker: 0.0018, coinTaker: 0.0180 },
      { tier: "VIP 9", min: 25_000_000_000, maker: 0.0000, taker: 0.0170, coinMaker: 0.0000, coinTaker: 0.0153 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0500, coinMaker: 0.0180, coinTaker: 0.0450 },
      { tier: "VIP 1", min: 5, maker: 0.0180, taker: 0.0500, coinMaker: 0.0162, coinTaker: 0.0450 },
      { tier: "VIP 2", min: 25, maker: 0.0160, taker: 0.0400, coinMaker: 0.0144, coinTaker: 0.0360 },
      { tier: "VIP 3", min: 100, maker: 0.0120, taker: 0.0320, coinMaker: 0.0108, coinTaker: 0.0288 },
      { tier: "VIP 4", min: 500, maker: 0.0100, taker: 0.0300, coinMaker: 0.0090, coinTaker: 0.0270 },
      { tier: "VIP 5", min: 1_000, maker: 0.0080, taker: 0.0270, coinMaker: 0.0072, coinTaker: 0.0243 },
      { tier: "VIP 6", min: 1_750, maker: 0.0060, taker: 0.0250, coinMaker: 0.0054, coinTaker: 0.0225 },
      { tier: "VIP 7", min: 3_000, maker: 0.0040, taker: 0.0220, coinMaker: 0.0036, coinTaker: 0.0198 },
      { tier: "VIP 8", min: 4_500, maker: 0.0020, taker: 0.0200, coinMaker: 0.0018, coinTaker: 0.0180 },
      { tier: "VIP 9", min: 5_500, maker: 0.0000, taker: 0.0170, coinMaker: 0.0000, coinTaker: 0.0153 },
    ],
  },
};
