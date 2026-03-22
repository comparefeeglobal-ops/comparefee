/**
 * CompareFee — Bitget Fee Data
 * Last updated: 2026-03-22
 * Source: https://www.bitget.com/en/rate/
 */
export default {
  id: "bitget",
  name: "Bitget",
  color: "#00F0FF",
  nativeCoin: "BGB",
  coinDiscountRate: 0.2,
  referralUrl: "https://www.bitget.com/referral/register?clacCode=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0,            maker: 0.100, taker: 0.100, coinMaker: 0.080, coinTaker: 0.080 },
      { tier: "VIP 1", min: 5_000_000,    maker: 0.080, taker: 0.080, coinMaker: 0.064, coinTaker: 0.064 },
      { tier: "VIP 2", min: 10_000_000,   maker: 0.065, taker: 0.070, coinMaker: 0.052, coinTaker: 0.056 },
      { tier: "VIP 3", min: 25_000_000,   maker: 0.050, taker: 0.060, coinMaker: 0.040, coinTaker: 0.048 },
      { tier: "VIP 4", min: 50_000_000,   maker: 0.040, taker: 0.050, coinMaker: 0.032, coinTaker: 0.040 },
      { tier: "VIP 5", min: 100_000_000,  maker: 0.030, taker: 0.040, coinMaker: 0.024, coinTaker: 0.032 },
      { tier: "VIP 6", min: 200_000_000,  maker: 0.020, taker: 0.035, coinMaker: 0.016, coinTaker: 0.028 },
      { tier: "VIP 7", min: 500_000_000,  maker: 0.010, taker: 0.030, coinMaker: 0.008, coinTaker: 0.024 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,           maker: 0.100, taker: 0.100, coinMaker: 0.080, coinTaker: 0.080 },
      { tier: "VIP 1", min: 100_000,     maker: 0.080, taker: 0.080, coinMaker: 0.064, coinTaker: 0.064 },
      { tier: "VIP 2", min: 200_000,     maker: 0.065, taker: 0.070, coinMaker: 0.052, coinTaker: 0.056 },
      { tier: "VIP 3", min: 500_000,     maker: 0.050, taker: 0.060, coinMaker: 0.040, coinTaker: 0.048 },
      { tier: "VIP 4", min: 1_000_000,   maker: 0.040, taker: 0.050, coinMaker: 0.032, coinTaker: 0.040 },
      { tier: "VIP 5", min: 3_000_000,   maker: 0.030, taker: 0.040, coinMaker: 0.024, coinTaker: 0.032 },
      { tier: "VIP 6", min: 5_000_000,   maker: 0.020, taker: 0.035, coinMaker: 0.016, coinTaker: 0.028 },
      { tier: "VIP 7", min: 10_000_000,  maker: 0.010, taker: 0.030, coinMaker: 0.008, coinTaker: 0.024 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0,            maker: 0.020, taker: 0.060, coinMaker: 0.016, coinTaker: 0.048 },
      { tier: "VIP 1", min: 10_000_000,   maker: 0.018, taker: 0.040, coinMaker: 0.0144,coinTaker: 0.032 },
      { tier: "VIP 2", min: 25_000_000,   maker: 0.016, taker: 0.0375,coinMaker: 0.0128,coinTaker: 0.030 },
      { tier: "VIP 3", min: 50_000_000,   maker: 0.014, taker: 0.035, coinMaker: 0.0112,coinTaker: 0.028 },
      { tier: "VIP 4", min: 100_000_000,  maker: 0.012, taker: 0.032, coinMaker: 0.0096,coinTaker: 0.0256},
      { tier: "VIP 5", min: 250_000_000,  maker: 0.010, taker: 0.030, coinMaker: 0.008, coinTaker: 0.024 },
      { tier: "VIP 6", min: 500_000_000,  maker: 0.006, taker: 0.027, coinMaker: 0.0048,coinTaker: 0.0216},
      { tier: "VIP 7", min: 1_000_000_000,maker: 0.004, taker: 0.025, coinMaker: 0.0032,coinTaker: 0.020 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,           maker: 0.020, taker: 0.060, coinMaker: 0.016, coinTaker: 0.048 },
      { tier: "VIP 1", min: 100_000,     maker: 0.018, taker: 0.040, coinMaker: 0.0144,coinTaker: 0.032 },
      { tier: "VIP 2", min: 200_000,     maker: 0.016, taker: 0.0375,coinMaker: 0.0128,coinTaker: 0.030 },
      { tier: "VIP 3", min: 500_000,     maker: 0.014, taker: 0.035, coinMaker: 0.0112,coinTaker: 0.028 },
      { tier: "VIP 4", min: 1_000_000,   maker: 0.012, taker: 0.032, coinMaker: 0.0096,coinTaker: 0.0256},
      { tier: "VIP 5", min: 3_000_000,   maker: 0.010, taker: 0.030, coinMaker: 0.008, coinTaker: 0.024 },
      { tier: "VIP 6", min: 5_000_000,   maker: 0.006, taker: 0.027, coinMaker: 0.0048,coinTaker: 0.0216},
      { tier: "VIP 7", min: 10_000_000,  maker: 0.004, taker: 0.025, coinMaker: 0.0032,coinTaker: 0.020 },
    ],
  },
};
