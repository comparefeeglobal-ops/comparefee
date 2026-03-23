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
      { tier: "VIP 0", min: 0, maker: 0.0800, taker: 0.1000, coinMaker: 0.0800, coinTaker: 0.1000 },
      { tier: "VIP 1", min: 1_000_000, maker: 0.0675, taker: 0.0800, coinMaker: 0.0675, coinTaker: 0.0800 },
      { tier: "VIP 2", min: 5_000_000, maker: 0.0600, taker: 0.0700, coinMaker: 0.0600, coinTaker: 0.0700 },
      { tier: "VIP 3", min: 10_000_000, maker: 0.0550, taker: 0.0650, coinMaker: 0.0550, coinTaker: 0.0650 },
      { tier: "VIP 4", min: 20_000_000, maker: 0.0300, taker: 0.0450, coinMaker: 0.0300, coinTaker: 0.0450 },
      { tier: "VIP 5", min: 100_000_000, maker: 0.0250, taker: 0.0350, coinMaker: 0.0250, coinTaker: 0.0350 },
      { tier: "VIP 6", min: 200_000_000, maker: 0.0000, taker: 0.0300, coinMaker: 0.0000, coinTaker: 0.0300 },
      { tier: "VIP 7", min: 500_000_000, maker: -0.0020, taker: 0.0250, coinMaker: -0.0020, coinTaker: 0.0250 },
      { tier: "VIP 8", min: 1_000_000_000, maker: -0.0050, taker: 0.0200, coinMaker: -0.0050, coinTaker: 0.0200 },
      { tier: "VIP 9", min: 5_000_000_000, maker: -0.0075, taker: 0.0175, coinMaker: -0.0075, coinTaker: 0.0175 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.0800, taker: 0.1000, coinMaker: 0.0800, coinTaker: 0.1000 },
      { tier: "VIP 1", min: 100_000, maker: 0.0675, taker: 0.0800, coinMaker: 0.0675, coinTaker: 0.0800 },
      { tier: "VIP 2", min: 250_000, maker: 0.0600, taker: 0.0700, coinMaker: 0.0600, coinTaker: 0.0700 },
      { tier: "VIP 3", min: 500_000, maker: 0.0550, taker: 0.0650, coinMaker: 0.0550, coinTaker: 0.0650 },
      { tier: "VIP 4", min: 2_000_000, maker: 0.0300, taker: 0.0450, coinMaker: 0.0300, coinTaker: 0.0450 },
      { tier: "VIP 5", min: 5_000_000, maker: 0.0250, taker: 0.0350, coinMaker: 0.0250, coinTaker: 0.0350 },
      { tier: "VIP 6", min: 10_000_000, maker: 0.0000, taker: 0.0300, coinMaker: 0.0000, coinTaker: 0.0300 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 1", min: 10_000_000, maker: 0.0180, taker: 0.0400, coinMaker: 0.0180, coinTaker: 0.0400 },
      { tier: "VIP 2", min: 50_000_000, maker: 0.0130, taker: 0.0350, coinMaker: 0.0130, coinTaker: 0.0350 },
      { tier: "VIP 3", min: 100_000_000, maker: 0.0100, taker: 0.0280, coinMaker: 0.0100, coinTaker: 0.0280 },
      { tier: "VIP 4", min: 200_000_000, maker: 0.0080, taker: 0.0270, coinMaker: 0.0080, coinTaker: 0.0270 },
      { tier: "VIP 5", min: 600_000_000, maker: 0.0050, taker: 0.0260, coinMaker: 0.0050, coinTaker: 0.0260 },
      { tier: "VIP 6", min: 1_000_000_000, maker: 0.0000, taker: 0.0250, coinMaker: 0.0000, coinTaker: 0.0250 },
      { tier: "VIP 7", min: 1_500_000_000, maker: -0.0020, taker: 0.0200, coinMaker: -0.0020, coinTaker: 0.0200 },
      { tier: "VIP 8", min: 2_000_000_000, maker: -0.0050, taker: 0.0200, coinMaker: -0.0050, coinTaker: 0.0200 },
      { tier: "VIP 9", min: 20_000_000_000, maker: -0.0050, taker: 0.0150, coinMaker: -0.0050, coinTaker: 0.0150 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0500, coinMaker: 0.0200, coinTaker: 0.0500 },
      { tier: "VIP 1", min: 100_000, maker: 0.0180, taker: 0.0400, coinMaker: 0.0180, coinTaker: 0.0400 },
      { tier: "VIP 2", min: 250_000, maker: 0.0130, taker: 0.0350, coinMaker: 0.0130, coinTaker: 0.0350 },
      { tier: "VIP 3", min: 500_000, maker: 0.0100, taker: 0.0280, coinMaker: 0.0100, coinTaker: 0.0280 },
      { tier: "VIP 4", min: 2_000_000, maker: 0.0080, taker: 0.0270, coinMaker: 0.0080, coinTaker: 0.0270 },
      { tier: "VIP 5", min: 5_000_000, maker: 0.0050, taker: 0.0260, coinMaker: 0.0050, coinTaker: 0.0260 },
      { tier: "VIP 6", min: 10_000_000, maker: 0.0000, taker: 0.0250, coinMaker: 0.0000, coinTaker: 0.0250 },
    ],
  },
};