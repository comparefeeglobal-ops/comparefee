/**
 * CompareFee — BingX Fee Data
 */
export default {
  id: "bingx",
  name: "BingX",
  color: "#356ef2",
  nativeCoin: null,
  coinDiscountRate: null,
  referralUrl: "https://bingx.com/invite/FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.1000, taker: 0.1000, coinMaker: 0.1000, coinTaker: 0.1000 },
      { tier: "VIP 1", min: 1_000_000, maker: 0.0350, taker: 0.0600, coinMaker: 0.0350, coinTaker: 0.0600 },
      { tier: "VIP 2", min: 2_000_000, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 3", min: 4_000_000, maker: 0.0150, taker: 0.0450, coinMaker: 0.0150, coinTaker: 0.0450 },
      { tier: "VIP 4", min: 6_000_000, maker: 0.0125, taker: 0.0375, coinMaker: 0.0125, coinTaker: 0.0375 },
      { tier: "VIP 5", min: 8_000_000, maker: 0.0100, taker: 0.0325, coinMaker: 0.0100, coinTaker: 0.0325 },
      { tier: "Supreme VIP", min: 15_000_000, maker: 0.0050, taker: 0.0200, coinMaker: 0.0050, coinTaker: 0.0200 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.1000, taker: 0.1000, coinMaker: 0.1000, coinTaker: 0.1000 },
      { tier: "VIP 1", min: 50_000, maker: 0.0350, taker: 0.0600, coinMaker: 0.0350, coinTaker: 0.0600 },
      { tier: "VIP 2", min: 200_000, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 3", min: 1_000_000, maker: 0.0150, taker: 0.0450, coinMaker: 0.0150, coinTaker: 0.0450 },
      { tier: "VIP 4", min: 2_000_000, maker: 0.0125, taker: 0.0375, coinMaker: 0.0125, coinTaker: 0.0375 },
      { tier: "VIP 5", min: 3_000_000, maker: 0.0100, taker: 0.0325, coinMaker: 0.0100, coinTaker: 0.0325 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 1", min: 10_000_000, maker: 0.0140, taker: 0.0400, coinMaker: 0.0140, coinTaker: 0.0400 },
      { tier: "VIP 2", min: 20_000_000, maker: 0.0120, taker: 0.0375, coinMaker: 0.0120, coinTaker: 0.0375 },
      { tier: "VIP 3", min: 50_000_000, maker: 0.0100, taker: 0.0350, coinMaker: 0.0100, coinTaker: 0.0350 },
      { tier: "VIP 4", min: 100_000_000, maker: 0.0080, taker: 0.0315, coinMaker: 0.0080, coinTaker: 0.0315 },
      { tier: "VIP 5", min: 200_000_000, maker: 0.0060, taker: 0.0300, coinMaker: 0.0060, coinTaker: 0.0300 },
      { tier: "Supreme VIP", min: 500_000_000, maker: 0.0000, taker: 0.0250, coinMaker: 0.0000, coinTaker: 0.0250 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 1", min: 50_000, maker: 0.0140, taker: 0.0400, coinMaker: 0.0140, coinTaker: 0.0400 },
      { tier: "VIP 2", min: 200_000, maker: 0.0120, taker: 0.0375, coinMaker: 0.0120, coinTaker: 0.0375 },
      { tier: "VIP 3", min: 1_000_000, maker: 0.0100, taker: 0.0350, coinMaker: 0.0100, coinTaker: 0.0350 },
      { tier: "VIP 4", min: 2_000_000, maker: 0.0080, taker: 0.0315, coinMaker: 0.0080, coinTaker: 0.0315 },
      { tier: "VIP 5", min: 3_000_000, maker: 0.0060, taker: 0.0300, coinMaker: 0.0060, coinTaker: 0.0300 },
    ],
  },
};