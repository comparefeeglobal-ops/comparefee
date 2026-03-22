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
      { tier: "VIP 0", min: 0,            maker: 0.100, taker: 0.100, coinMaker: 0.0900, coinTaker: 0.0900 },
      { tier: "VIP 1", min: 1_000_000,    maker: 0.090, taker: 0.100, coinMaker: 0.0810, coinTaker: 0.0900 },
      { tier: "VIP 2", min: 5_000_000,    maker: 0.080, taker: 0.100, coinMaker: 0.0720, coinTaker: 0.0900 },
      { tier: "VIP 3", min: 20_000_000,   maker: 0.042, taker: 0.060, coinMaker: 0.0378, coinTaker: 0.0540 },
      { tier: "VIP 4", min: 100_000_000,  maker: 0.042, taker: 0.054, coinMaker: 0.0378, coinTaker: 0.0486 },
      { tier: "VIP 5", min: 150_000_000,  maker: 0.036, taker: 0.048, coinMaker: 0.0324, coinTaker: 0.0432 },
      { tier: "VIP 6", min: 400_000_000,  maker: 0.030, taker: 0.042, coinMaker: 0.0270, coinTaker: 0.0378 },
      { tier: "VIP 7", min: 800_000_000,  maker: 0.024, taker: 0.036, coinMaker: 0.0216, coinTaker: 0.0324 },
      { tier: "VIP 8", min: 2_000_000_000,maker: 0.018, taker: 0.030, coinMaker: 0.0162, coinTaker: 0.0270 },
      { tier: "VIP 9", min: 4_000_000_000,maker: 0.012, taker: 0.024, coinMaker: 0.0108, coinTaker: 0.0216 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,          maker: 0.100, taker: 0.100, coinMaker: 0.0900, coinTaker: 0.0900 },
      { tier: "VIP 1", min: 3_500,      maker: 0.090, taker: 0.100, coinMaker: 0.0810, coinTaker: 0.0900 },
      { tier: "VIP 2", min: 17_500,     maker: 0.080, taker: 0.100, coinMaker: 0.0720, coinTaker: 0.0900 },
      { tier: "VIP 3", min: 70_000,     maker: 0.042, taker: 0.060, coinMaker: 0.0378, coinTaker: 0.0540 },
      { tier: "VIP 4", min: 175_000,    maker: 0.042, taker: 0.054, coinMaker: 0.0378, coinTaker: 0.0486 },
      { tier: "VIP 5", min: 700_000,    maker: 0.036, taker: 0.048, coinMaker: 0.0324, coinTaker: 0.0432 },
      { tier: "VIP 6", min: 1_750_000,  maker: 0.030, taker: 0.042, coinMaker: 0.0270, coinTaker: 0.0378 },
      { tier: "VIP 7", min: 3_500_000,  maker: 0.024, taker: 0.036, coinMaker: 0.0216, coinTaker: 0.0324 },
      { tier: "VIP 8", min: 7_000_000,  maker: 0.018, taker: 0.030, coinMaker: 0.0162, coinTaker: 0.0270 },
      { tier: "VIP 9", min: 17_500_000, maker: 0.012, taker: 0.024, coinMaker: 0.0108, coinTaker: 0.0216 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0,             maker: 0.020, taker: 0.050, coinMaker: 0.0180, coinTaker: 0.0450 },
      { tier: "VIP 1", min: 5_000_000,     maker: 0.018, taker: 0.040, coinMaker: 0.0162, coinTaker: 0.0360 },
      { tier: "VIP 2", min: 10_000_000,    maker: 0.016, taker: 0.035, coinMaker: 0.0144, coinTaker: 0.0315 },
      { tier: "VIP 3", min: 50_000_000,    maker: 0.014, taker: 0.032, coinMaker: 0.0126, coinTaker: 0.0288 },
      { tier: "VIP 4", min: 100_000_000,   maker: 0.012, taker: 0.030, coinMaker: 0.0108, coinTaker: 0.0270 },
      { tier: "VIP 5", min: 200_000_000,   maker: 0.010, taker: 0.027, coinMaker: 0.0090, coinTaker: 0.0243 },
      { tier: "VIP 6", min: 400_000_000,   maker: 0.008, taker: 0.025, coinMaker: 0.0072, coinTaker: 0.0225 },
      { tier: "VIP 7", min: 800_000_000,   maker: 0.006, taker: 0.022, coinMaker: 0.0054, coinTaker: 0.0198 },
      { tier: "VIP 8", min: 2_000_000_000, maker: 0.004, taker: 0.020, coinMaker: 0.0036, coinTaker: 0.0180 },
      { tier: "VIP 9", min: 4_000_000_000, maker: 0.000, taker: 0.017, coinMaker: 0.0000, coinTaker: 0.0153 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,          maker: 0.020, taker: 0.050, coinMaker: 0.0180, coinTaker: 0.0450 },
      { tier: "VIP 1", min: 3_500,      maker: 0.018, taker: 0.040, coinMaker: 0.0162, coinTaker: 0.0360 },
      { tier: "VIP 2", min: 17_500,     maker: 0.016, taker: 0.035, coinMaker: 0.0144, coinTaker: 0.0315 },
      { tier: "VIP 3", min: 70_000,     maker: 0.014, taker: 0.032, coinMaker: 0.0126, coinTaker: 0.0288 },
      { tier: "VIP 4", min: 175_000,    maker: 0.012, taker: 0.030, coinMaker: 0.0108, coinTaker: 0.0270 },
      { tier: "VIP 5", min: 700_000,    maker: 0.010, taker: 0.027, coinMaker: 0.0090, coinTaker: 0.0243 },
      { tier: "VIP 6", min: 1_750_000,  maker: 0.008, taker: 0.025, coinMaker: 0.0072, coinTaker: 0.0225 },
      { tier: "VIP 7", min: 3_500_000,  maker: 0.006, taker: 0.022, coinMaker: 0.0054, coinTaker: 0.0198 },
      { tier: "VIP 8", min: 7_000_000,  maker: 0.004, taker: 0.020, coinMaker: 0.0036, coinTaker: 0.0180 },
      { tier: "VIP 9", min: 17_500_000, maker: 0.000, taker: 0.017, coinMaker: 0.0000, coinTaker: 0.0153 },
    ],
  },
};
