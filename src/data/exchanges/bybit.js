/**
 * CompareFee — Bybit Fee Data
 * Last updated: 2026-03-22
 * Source: https://www.bybit.com/en/help-center/article/Fee-Structure
 */
export default {
  id: "bybit",
  name: "Bybit",
  color: "#F7A600",
  nativeCoin: null,
  coinDiscountRate: null,
  referralUrl: "https://www.bybit.com/register?affiliate_id=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "Non-VIP",    min: 0,           maker: 0.100,  taker: 0.100  },
      { tier: "VIP 1",      min: 1_000_000,   maker: 0.0675, taker: 0.0800 },
      { tier: "VIP 2",      min: 5_000_000,   maker: 0.0650, taker: 0.0775 },
      { tier: "VIP 3",      min: 10_000_000,  maker: 0.0625, taker: 0.0750 },
      { tier: "VIP 4",      min: 25_000_000,  maker: 0.0500, taker: 0.0600 },
      { tier: "VIP 5",      min: 50_000_000,  maker: 0.0400, taker: 0.0500 },
      { tier: "Supreme VIP",min: 100_000_000, maker: 0.0300, taker: 0.0450 },
    ],
    depositBased: [
      { tier: "Non-VIP",    min: 0,          maker: 0.100,  taker: 0.100  },
      { tier: "VIP 1",      min: 100_000,    maker: 0.0675, taker: 0.0800 },
      { tier: "VIP 2",      min: 250_000,    maker: 0.0650, taker: 0.0775 },
      { tier: "VIP 3",      min: 500_000,    maker: 0.0625, taker: 0.0750 },
      { tier: "VIP 4",      min: 1_000_000,  maker: 0.0500, taker: 0.0600 },
      { tier: "VIP 5",      min: 3_000_000,  maker: 0.0400, taker: 0.0500 },
      { tier: "Supreme VIP",min: 5_000_000,  maker: 0.0300, taker: 0.0450 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "Non-VIP",    min: 0,           maker: 0.020,  taker: 0.055  },
      { tier: "VIP 1",      min: 10_000_000,  maker: 0.018,  taker: 0.040  },
      { tier: "VIP 2",      min: 25_000_000,  maker: 0.016,  taker: 0.0375 },
      { tier: "VIP 3",      min: 50_000_000,  maker: 0.014,  taker: 0.035  },
      { tier: "VIP 4",      min: 100_000_000, maker: 0.012,  taker: 0.032  },
      { tier: "VIP 5",      min: 250_000_000, maker: 0.010,  taker: 0.030  },
      { tier: "Supreme VIP",min: 500_000_000, maker: 0.005,  taker: 0.025  },
    ],
    depositBased: [
      { tier: "Non-VIP",    min: 0,          maker: 0.020,  taker: 0.055  },
      { tier: "VIP 1",      min: 100_000,    maker: 0.018,  taker: 0.040  },
      { tier: "VIP 2",      min: 250_000,    maker: 0.016,  taker: 0.0375 },
      { tier: "VIP 3",      min: 500_000,    maker: 0.014,  taker: 0.035  },
      { tier: "VIP 4",      min: 1_000_000,  maker: 0.012,  taker: 0.032  },
      { tier: "VIP 5",      min: 3_000_000,  maker: 0.010,  taker: 0.030  },
      { tier: "Supreme VIP",min: 5_000_000,  maker: 0.005,  taker: 0.025  },
    ],
  },
};
