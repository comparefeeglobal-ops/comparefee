/**
 * CompareFee — Gate.io Fee Data
 * Last updated: 2026-03-22
 * Source: https://www.gate.io/fee
 */
export default {
  id: "gate",
  name: "Gate",
  color: "#2354E6",
  nativeCoin: "GT",
  coinDiscountRate: 0.25,
  referralUrl: "https://www.gate.io/signup?ref=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0,            maker: 0.100,  taker: 0.100,  coinMaker: 0.0750, coinTaker: 0.0750 },
      { tier: "VIP 1", min: 1_000_000,    maker: 0.085,  taker: 0.090,  coinMaker: 0.0638, coinTaker: 0.0675 },
      { tier: "VIP 2", min: 5_000_000,    maker: 0.076,  taker: 0.081,  coinMaker: 0.0570, coinTaker: 0.0607 },
      { tier: "VIP 3", min: 10_000_000,   maker: 0.065,  taker: 0.075,  coinMaker: 0.0488, coinTaker: 0.0562 },
      { tier: "VIP 4", min: 25_000_000,   maker: 0.055,  taker: 0.065,  coinMaker: 0.0413, coinTaker: 0.0488 },
      { tier: "VIP 5", min: 50_000_000,   maker: 0.045,  taker: 0.055,  coinMaker: 0.0338, coinTaker: 0.0413 },
      { tier: "VIP 6", min: 100_000_000,  maker: 0.035,  taker: 0.045,  coinMaker: 0.0263, coinTaker: 0.0338 },
      { tier: "VIP 7", min: 250_000_000,  maker: 0.025,  taker: 0.035,  coinMaker: 0.0188, coinTaker: 0.0263 },
      { tier: "VIP 8", min: 500_000_000,  maker: 0.015,  taker: 0.025,  coinMaker: 0.0112, coinTaker: 0.0188 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,           maker: 0.100,  taker: 0.100,  coinMaker: 0.0750, coinTaker: 0.0750 },
      { tier: "VIP 1", min: 50_000,      maker: 0.085,  taker: 0.090,  coinMaker: 0.0638, coinTaker: 0.0675 },
      { tier: "VIP 2", min: 200_000,     maker: 0.076,  taker: 0.081,  coinMaker: 0.0570, coinTaker: 0.0607 },
      { tier: "VIP 3", min: 500_000,     maker: 0.065,  taker: 0.075,  coinMaker: 0.0488, coinTaker: 0.0562 },
      { tier: "VIP 4", min: 1_000_000,   maker: 0.055,  taker: 0.065,  coinMaker: 0.0413, coinTaker: 0.0488 },
      { tier: "VIP 5", min: 3_000_000,   maker: 0.045,  taker: 0.055,  coinMaker: 0.0338, coinTaker: 0.0413 },
      { tier: "VIP 6", min: 5_000_000,   maker: 0.035,  taker: 0.045,  coinMaker: 0.0263, coinTaker: 0.0338 },
      { tier: "VIP 7", min: 10_000_000,  maker: 0.025,  taker: 0.035,  coinMaker: 0.0188, coinTaker: 0.0263 },
      { tier: "VIP 8", min: 30_000_000,  maker: 0.015,  taker: 0.025,  coinMaker: 0.0112, coinTaker: 0.0188 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0,             maker: 0.020,  taker: 0.050,  coinMaker: 0.0150, coinTaker: 0.0375 },
      { tier: "VIP 1", min: 5_000_000,     maker: 0.018,  taker: 0.045,  coinMaker: 0.0135, coinTaker: 0.0338 },
      { tier: "VIP 2", min: 10_000_000,    maker: 0.016,  taker: 0.042,  coinMaker: 0.0120, coinTaker: 0.0315 },
      { tier: "VIP 3", min: 25_000_000,    maker: 0.014,  taker: 0.040,  coinMaker: 0.0105, coinTaker: 0.0300 },
      { tier: "VIP 4", min: 50_000_000,    maker: 0.012,  taker: 0.038,  coinMaker: 0.0090, coinTaker: 0.0285 },
      { tier: "VIP 5", min: 100_000_000,   maker: 0.010,  taker: 0.035,  coinMaker: 0.0075, coinTaker: 0.0263 },
      { tier: "VIP 6", min: 200_000_000,   maker: 0.008,  taker: 0.030,  coinMaker: 0.0060, coinTaker: 0.0225 },
      { tier: "VIP 7", min: 500_000_000,   maker: 0.006,  taker: 0.025,  coinMaker: 0.0045, coinTaker: 0.0188 },
      { tier: "VIP 8", min: 1_000_000_000, maker: 0.004,  taker: 0.020,  coinMaker: 0.0030, coinTaker: 0.0150 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,           maker: 0.020,  taker: 0.050,  coinMaker: 0.0150, coinTaker: 0.0375 },
      { tier: "VIP 1", min: 50_000,      maker: 0.018,  taker: 0.045,  coinMaker: 0.0135, coinTaker: 0.0338 },
      { tier: "VIP 2", min: 200_000,     maker: 0.016,  taker: 0.042,  coinMaker: 0.0120, coinTaker: 0.0315 },
      { tier: "VIP 3", min: 500_000,     maker: 0.014,  taker: 0.040,  coinMaker: 0.0105, coinTaker: 0.0300 },
      { tier: "VIP 4", min: 1_000_000,   maker: 0.012,  taker: 0.038,  coinMaker: 0.0090, coinTaker: 0.0285 },
      { tier: "VIP 5", min: 3_000_000,   maker: 0.010,  taker: 0.035,  coinMaker: 0.0075, coinTaker: 0.0263 },
      { tier: "VIP 6", min: 5_000_000,   maker: 0.008,  taker: 0.030,  coinMaker: 0.0060, coinTaker: 0.0225 },
      { tier: "VIP 7", min: 10_000_000,  maker: 0.006,  taker: 0.025,  coinMaker: 0.0045, coinTaker: 0.0188 },
      { tier: "VIP 8", min: 30_000_000,  maker: 0.004,  taker: 0.020,  coinMaker: 0.0030, coinTaker: 0.0150 },
    ],
  },
};
