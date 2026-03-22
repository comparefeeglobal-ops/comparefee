/**
 * CompareFee — OKX Fee Data
 * Last updated: 2026-03-22
 * Source: https://www.okx.com/fees
 */
export default {
  id: "okx",
  name: "OKX",
  color: "#FFFFFF",
  nativeCoin: null,
  coinDiscountRate: null,
  referralUrl: "https://www.okx.com/join?channelId=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "Lv 1", min: 0,            maker: 0.080,  taker: 0.100  },
      { tier: "Lv 2", min: 5_000_000,    maker: 0.060,  taker: 0.080  },
      { tier: "Lv 3", min: 10_000_000,   maker: 0.050,  taker: 0.070  },
      { tier: "Lv 4", min: 20_000_000,   maker: 0.030,  taker: 0.050  },
      { tier: "Lv 5", min: 50_000_000,   maker: 0.020,  taker: 0.040  },
      { tier: "Lv 6", min: 100_000_000,  maker: 0.010,  taker: 0.030  },
      { tier: "Lv 7", min: 200_000_000,  maker: -0.005, taker: 0.020  },
      { tier: "Lv 8", min: 500_000_000,  maker: -0.010, taker: 0.015  },
      { tier: "Lv 9", min: 1_000_000_000,maker: -0.015, taker: 0.010  },
    ],
    depositBased: [
      { tier: "Lv 1", min: 0,           maker: 0.080,  taker: 0.100  },
      { tier: "Lv 2", min: 100_000,     maker: 0.060,  taker: 0.080  },
      { tier: "Lv 3", min: 500_000,     maker: 0.050,  taker: 0.070  },
      { tier: "Lv 4", min: 1_000_000,   maker: 0.030,  taker: 0.050  },
      { tier: "Lv 5", min: 5_000_000,   maker: 0.020,  taker: 0.040  },
      { tier: "Lv 6", min: 10_000_000,  maker: 0.010,  taker: 0.030  },
      { tier: "Lv 7", min: 20_000_000,  maker: -0.005, taker: 0.020  },
      { tier: "Lv 8", min: 50_000_000,  maker: -0.010, taker: 0.015  },
      { tier: "Lv 9", min: 100_000_000, maker: -0.015, taker: 0.010  },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "Lv 1", min: 0,             maker: 0.020,  taker: 0.050  },
      { tier: "Lv 2", min: 5_000_000,     maker: 0.015,  taker: 0.040  },
      { tier: "Lv 3", min: 10_000_000,    maker: 0.010,  taker: 0.035  },
      { tier: "Lv 4", min: 20_000_000,    maker: 0.005,  taker: 0.030  },
      { tier: "Lv 5", min: 50_000_000,    maker: 0.000,  taker: 0.025  },
      { tier: "Lv 6", min: 100_000_000,   maker: -0.005, taker: 0.020  },
      { tier: "Lv 7", min: 200_000_000,   maker: -0.010, taker: 0.015  },
      { tier: "Lv 8", min: 500_000_000,   maker: -0.015, taker: 0.010  },
      { tier: "Lv 9", min: 1_000_000_000, maker: -0.020, taker: 0.010  },
    ],
    depositBased: [
      { tier: "Lv 1", min: 0,           maker: 0.020,  taker: 0.050  },
      { tier: "Lv 2", min: 100_000,     maker: 0.015,  taker: 0.040  },
      { tier: "Lv 3", min: 500_000,     maker: 0.010,  taker: 0.035  },
      { tier: "Lv 4", min: 1_000_000,   maker: 0.005,  taker: 0.030  },
      { tier: "Lv 5", min: 5_000_000,   maker: 0.000,  taker: 0.025  },
      { tier: "Lv 6", min: 10_000_000,  maker: -0.005, taker: 0.020  },
      { tier: "Lv 7", min: 20_000_000,  maker: -0.010, taker: 0.015  },
      { tier: "Lv 8", min: 50_000_000,  maker: -0.015, taker: 0.010  },
      { tier: "Lv 9", min: 100_000_000, maker: -0.020, taker: 0.010  },
    ],
  },
};
