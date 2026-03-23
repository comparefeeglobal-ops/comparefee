/**
 * CompareFee — Toobit Fee Data
 */
export default {
  id: "toobit",
  name: "Toobit",
  color: "#1e7fff",
  nativeCoin: null,
  coinDiscountRate: null,
  referralUrl: "https://www.toobit.com/register?invite_code=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.0750, taker: 0.1000, coinMaker: 0.0750, coinTaker: 0.1000 },
      { tier: "VIP 1", min: 100_000, maker: 0.0700, taker: 0.0900, coinMaker: 0.0700, coinTaker: 0.0900 },
      { tier: "VIP 2", min: 500_000, maker: 0.0600, taker: 0.0800, coinMaker: 0.0600, coinTaker: 0.0800 },
      { tier: "VIP 3", min: 1_000_000, maker: 0.0350, taker: 0.0600, coinMaker: 0.0350, coinTaker: 0.0600 },
      { tier: "VIP 4", min: 5_000_000, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 5", min: 20_000_000, maker: 0.0150, taker: 0.0450, coinMaker: 0.0150, coinTaker: 0.0450 },
      { tier: "VIP 6", min: 30_000_000, maker: 0.0125, taker: 0.0375, coinMaker: 0.0125, coinTaker: 0.0375 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.0750, taker: 0.1000, coinMaker: 0.0750, coinTaker: 0.1000 },
      { tier: "VIP 1", min: 500, maker: 0.0700, taker: 0.0900, coinMaker: 0.0700, coinTaker: 0.0900 },
      { tier: "VIP 2", min: 50_000, maker: 0.0600, taker: 0.0800, coinMaker: 0.0600, coinTaker: 0.0800 },
      { tier: "VIP 3", min: 200_000, maker: 0.0350, taker: 0.0600, coinMaker: 0.0350, coinTaker: 0.0600 },
      { tier: "VIP 4", min: 1_000_000, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 5", min: 2_000_000, maker: 0.0150, taker: 0.0450, coinMaker: 0.0150, coinTaker: 0.0450 },
      { tier: "VIP 6", min: 3_000_000, maker: 0.0125, taker: 0.0375, coinMaker: 0.0125, coinTaker: 0.0375 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0600, coinMaker: 0.0200, coinTaker: 0.0600 },
      { tier: "VIP 1", min: 3_000_000, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 2", min: 8_000_000, maker: 0.0140, taker: 0.0400, coinMaker: 0.0140, coinTaker: 0.0400 },
      { tier: "VIP 3", min: 25_000_000, maker: 0.0120, taker: 0.0375, coinMaker: 0.0120, coinTaker: 0.0375 },
      { tier: "VIP 4", min: 100_000_000, maker: 0.0100, taker: 0.0350, coinMaker: 0.0100, coinTaker: 0.0350 },
      { tier: "VIP 5", min: 300_000_000, maker: 0.0080, taker: 0.0315, coinMaker: 0.0080, coinTaker: 0.0315 },
      { tier: "VIP 6", min: 500_000_000, maker: 0.0060, taker: 0.0300, coinMaker: 0.0060, coinTaker: 0.0300 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0600, coinMaker: 0.0200, coinTaker: 0.0600 },
      { tier: "VIP 1", min: 500, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 2", min: 50_000, maker: 0.0140, taker: 0.0400, coinMaker: 0.0140, coinTaker: 0.0400 },
      { tier: "VIP 3", min: 200_000, maker: 0.0120, taker: 0.0375, coinMaker: 0.0120, coinTaker: 0.0375 },
      { tier: "VIP 4", min: 1_000_000, maker: 0.0100, taker: 0.0350, coinMaker: 0.0100, coinTaker: 0.0350 },
      { tier: "VIP 5", min: 2_000_000, maker: 0.0080, taker: 0.0315, coinMaker: 0.0080, coinTaker: 0.0315 },
      { tier: "VIP 6", min: 3_000_000, maker: 0.0060, taker: 0.0300, coinMaker: 0.0060, coinTaker: 0.0300 },
    ],
  },
};