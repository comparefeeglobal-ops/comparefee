/**
 * CompareFee — KuCoin Fee Data
 * Last updated: 2026-03-22
 * Source: https://www.kucoin.com/vip/level
 */
export default {
  id: "kucoin",
  name: "KuCoin",
  color: "#23AF91",
  nativeCoin: "KCS",
  coinDiscountRate: 0.2,
  referralUrl: "https://www.kucoin.com/r/FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0,            maker: 0.100, taker: 0.100,  coinMaker: 0.080, coinTaker: 0.080  },
      { tier: "VIP 1", min: 1_000_000,    maker: 0.090, taker: 0.093,  coinMaker: 0.072, coinTaker: 0.0744 },
      { tier: "VIP 2", min: 5_000_000,    maker: 0.080, taker: 0.085,  coinMaker: 0.064, coinTaker: 0.068  },
      { tier: "VIP 3", min: 10_000_000,   maker: 0.060, taker: 0.070,  coinMaker: 0.048, coinTaker: 0.056  },
      { tier: "VIP 4", min: 25_000_000,   maker: 0.050, taker: 0.065,  coinMaker: 0.040, coinTaker: 0.052  },
      { tier: "VIP 5", min: 50_000_000,   maker: 0.035, taker: 0.055,  coinMaker: 0.028, coinTaker: 0.044  },
      { tier: "VIP 6", min: 100_000_000,  maker: 0.025, taker: 0.045,  coinMaker: 0.020, coinTaker: 0.036  },
      { tier: "VIP 7", min: 200_000_000,  maker: 0.015, taker: 0.040,  coinMaker: 0.012, coinTaker: 0.032  },
      { tier: "VIP 8", min: 500_000_000,  maker: 0.000, taker: 0.035,  coinMaker: 0.000, coinTaker: 0.028  },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,           maker: 0.100, taker: 0.100,  coinMaker: 0.080, coinTaker: 0.080  },
      { tier: "VIP 1", min: 50_000,      maker: 0.090, taker: 0.093,  coinMaker: 0.072, coinTaker: 0.0744 },
      { tier: "VIP 2", min: 200_000,     maker: 0.080, taker: 0.085,  coinMaker: 0.064, coinTaker: 0.068  },
      { tier: "VIP 3", min: 500_000,     maker: 0.060, taker: 0.070,  coinMaker: 0.048, coinTaker: 0.056  },
      { tier: "VIP 4", min: 1_000_000,   maker: 0.050, taker: 0.065,  coinMaker: 0.040, coinTaker: 0.052  },
      { tier: "VIP 5", min: 3_000_000,   maker: 0.035, taker: 0.055,  coinMaker: 0.028, coinTaker: 0.044  },
      { tier: "VIP 6", min: 5_000_000,   maker: 0.025, taker: 0.045,  coinMaker: 0.020, coinTaker: 0.036  },
      { tier: "VIP 7", min: 10_000_000,  maker: 0.015, taker: 0.040,  coinMaker: 0.012, coinTaker: 0.032  },
      { tier: "VIP 8", min: 30_000_000,  maker: 0.000, taker: 0.035,  coinMaker: 0.000, coinTaker: 0.028  },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0,             maker: 0.020, taker: 0.060 },
      { tier: "VIP 1", min: 5_000_000,     maker: 0.016, taker: 0.055 },
      { tier: "VIP 2", min: 10_000_000,    maker: 0.014, taker: 0.050 },
      { tier: "VIP 3", min: 25_000_000,    maker: 0.012, taker: 0.048 },
      { tier: "VIP 4", min: 50_000_000,    maker: 0.010, taker: 0.046 },
      { tier: "VIP 5", min: 100_000_000,   maker: 0.006, taker: 0.048 },
      { tier: "VIP 6", min: 200_000_000,   maker: 0.004, taker: 0.042 },
      { tier: "VIP 7", min: 500_000_000,   maker: 0.002, taker: 0.038 },
      { tier: "VIP 8", min: 1_000_000_000, maker: 0.000, taker: 0.035 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,           maker: 0.020, taker: 0.060 },
      { tier: "VIP 1", min: 50_000,      maker: 0.016, taker: 0.055 },
      { tier: "VIP 2", min: 200_000,     maker: 0.014, taker: 0.050 },
      { tier: "VIP 3", min: 500_000,     maker: 0.012, taker: 0.048 },
      { tier: "VIP 4", min: 1_000_000,   maker: 0.010, taker: 0.046 },
      { tier: "VIP 5", min: 3_000_000,   maker: 0.006, taker: 0.048 },
      { tier: "VIP 6", min: 5_000_000,   maker: 0.004, taker: 0.042 },
      { tier: "VIP 7", min: 10_000_000,  maker: 0.002, taker: 0.038 },
      { tier: "VIP 8", min: 30_000_000,  maker: 0.000, taker: 0.035 },
    ],
  },
};
