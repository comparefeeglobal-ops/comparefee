/**
 * CompareFee — MEXC Fee Data
 * Last updated: 2026-03-22
 * Source: https://www.mexc.com/fee
 */
export default {
  id: "mexc",
  name: "MEXC",
  color: "#1972E2",
  nativeCoin: "MX",
  coinDiscountRate: 0.2,
  referralUrl: "https://www.mexc.com/register?inviteCode=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "Non-VIP", min: 0,             maker: 0.000, taker: 0.050, coinMaker: 0.000, coinTaker: 0.040 },
      { tier: "Lv 1",    min: 10_000_000,    maker: 0.000, taker: 0.045, coinMaker: 0.000, coinTaker: 0.036 },
      { tier: "Lv 2",    min: 20_000_000,    maker: 0.000, taker: 0.040, coinMaker: 0.000, coinTaker: 0.032 },
      { tier: "Lv 3",    min: 50_000_000,    maker: 0.000, taker: 0.035, coinMaker: 0.000, coinTaker: 0.028 },
      { tier: "Lv 4",    min: 100_000_000,   maker: 0.000, taker: 0.030, coinMaker: 0.000, coinTaker: 0.024 },
      { tier: "Lv 5",    min: 200_000_000,   maker: 0.000, taker: 0.025, coinMaker: 0.000, coinTaker: 0.020 },
      { tier: "Lv 6",    min: 500_000_000,   maker: 0.000, taker: 0.020, coinMaker: 0.000, coinTaker: 0.016 },
      { tier: "Lv 7",    min: 1_000_000_000, maker: 0.000, taker: 0.015, coinMaker: 0.000, coinTaker: 0.012 },
    ],
    depositBased: [
      { tier: "Non-VIP", min: 0,           maker: 0.000, taker: 0.050, coinMaker: 0.000, coinTaker: 0.040 },
      { tier: "Lv 1",    min: 100_000,     maker: 0.000, taker: 0.045, coinMaker: 0.000, coinTaker: 0.036 },
      { tier: "Lv 2",    min: 500_000,     maker: 0.000, taker: 0.040, coinMaker: 0.000, coinTaker: 0.032 },
      { tier: "Lv 3",    min: 1_000_000,   maker: 0.000, taker: 0.035, coinMaker: 0.000, coinTaker: 0.028 },
      { tier: "Lv 4",    min: 3_000_000,   maker: 0.000, taker: 0.030, coinMaker: 0.000, coinTaker: 0.024 },
      { tier: "Lv 5",    min: 5_000_000,   maker: 0.000, taker: 0.025, coinMaker: 0.000, coinTaker: 0.020 },
      { tier: "Lv 6",    min: 10_000_000,  maker: 0.000, taker: 0.020, coinMaker: 0.000, coinTaker: 0.016 },
      { tier: "Lv 7",    min: 30_000_000,  maker: 0.000, taker: 0.015, coinMaker: 0.000, coinTaker: 0.012 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "Non-VIP", min: 0,             maker: 0.000, taker: 0.020, coinMaker: 0.000, coinTaker: 0.016  },
      { tier: "Lv 1",    min: 10_000_000,    maker: 0.000, taker: 0.019, coinMaker: 0.000, coinTaker: 0.0152 },
      { tier: "Lv 2",    min: 20_000_000,    maker: 0.000, taker: 0.018, coinMaker: 0.000, coinTaker: 0.0144 },
      { tier: "Lv 3",    min: 50_000_000,    maker: 0.000, taker: 0.017, coinMaker: 0.000, coinTaker: 0.0136 },
      { tier: "Lv 4",    min: 100_000_000,   maker: 0.000, taker: 0.016, coinMaker: 0.000, coinTaker: 0.0128 },
      { tier: "Lv 5",    min: 200_000_000,   maker: 0.000, taker: 0.015, coinMaker: 0.000, coinTaker: 0.0120 },
      { tier: "Lv 6",    min: 500_000_000,   maker: 0.000, taker: 0.014, coinMaker: 0.000, coinTaker: 0.0112 },
      { tier: "Lv 7",    min: 1_000_000_000, maker: 0.000, taker: 0.013, coinMaker: 0.000, coinTaker: 0.0104 },
    ],
    depositBased: [
      { tier: "Non-VIP", min: 0,           maker: 0.000, taker: 0.020, coinMaker: 0.000, coinTaker: 0.016  },
      { tier: "Lv 1",    min: 100_000,     maker: 0.000, taker: 0.019, coinMaker: 0.000, coinTaker: 0.0152 },
      { tier: "Lv 2",    min: 500_000,     maker: 0.000, taker: 0.018, coinMaker: 0.000, coinTaker: 0.0144 },
      { tier: "Lv 3",    min: 1_000_000,   maker: 0.000, taker: 0.017, coinMaker: 0.000, coinTaker: 0.0136 },
      { tier: "Lv 4",    min: 3_000_000,   maker: 0.000, taker: 0.016, coinMaker: 0.000, coinTaker: 0.0128 },
      { tier: "Lv 5",    min: 5_000_000,   maker: 0.000, taker: 0.015, coinMaker: 0.000, coinTaker: 0.0120 },
      { tier: "Lv 6",    min: 10_000_000,  maker: 0.000, taker: 0.014, coinMaker: 0.000, coinTaker: 0.0112 },
      { tier: "Lv 7",    min: 30_000_000,  maker: 0.000, taker: 0.013, coinMaker: 0.000, coinTaker: 0.0104 },
    ],
  },
};
