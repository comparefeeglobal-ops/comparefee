/**
 * CompareFee — LBank Fee Data
 */
export default {
  id: "lbank",
  name: "LBank",
  color: "#ffba00",
  nativeCoin: null,
  coinDiscountRate: null,
  referralUrl: "https://www.lbank.com/login/?icode=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.1000, taker: 0.1000, coinMaker: 0.1000, coinTaker: 0.1000 },
      { tier: "VIP 1", min: 500_000, maker: 0.0800, taker: 0.0800, coinMaker: 0.0800, coinTaker: 0.0800 },
      { tier: "VIP 2", min: 2_000_000, maker: 0.0650, taker: 0.0700, coinMaker: 0.0650, coinTaker: 0.0700 },
      { tier: "VIP 3", min: 8_000_000, maker: 0.0500, taker: 0.0600, coinMaker: 0.0500, coinTaker: 0.0600 },
      { tier: "VIP 4", min: 30_000_000, maker: 0.0400, taker: 0.0500, coinMaker: 0.0400, coinTaker: 0.0500 },
      { tier: "VIP 5", min: 50_000_000, maker: 0.0300, taker: 0.0400, coinMaker: 0.0300, coinTaker: 0.0400 },
      { tier: "VIP 6", min: 75_000_000, maker: 0.0200, taker: 0.0350, coinMaker: 0.0200, coinTaker: 0.0350 },
      { tier: "SVIP", min: 100_000_000, maker: 0.0000, taker: 0.0300, coinMaker: 0.0000, coinTaker: 0.0300 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.1000, taker: 0.1000, coinMaker: 0.1000, coinTaker: 0.1000 },
      { tier: "VIP 1", min: 10_000, maker: 0.0800, taker: 0.0800, coinMaker: 0.0800, coinTaker: 0.0800 },
      { tier: "VIP 2", min: 50_000, maker: 0.0650, taker: 0.0700, coinMaker: 0.0650, coinTaker: 0.0700 },
      { tier: "VIP 3", min: 250_000, maker: 0.0500, taker: 0.0600, coinMaker: 0.0500, coinTaker: 0.0600 },
      { tier: "VIP 4", min: 750_000, maker: 0.0400, taker: 0.0500, coinMaker: 0.0400, coinTaker: 0.0500 },
      { tier: "VIP 5", min: 2_000_000, maker: 0.0300, taker: 0.0400, coinMaker: 0.0300, coinTaker: 0.0400 },
      { tier: "VIP 6", min: 5_000_000, maker: 0.0200, taker: 0.0350, coinMaker: 0.0200, coinTaker: 0.0350 },
      { tier: "SVIP", min: 10_000_000, maker: 0.0000, taker: 0.0300, coinMaker: 0.0000, coinTaker: 0.0300 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0600, coinMaker: 0.0200, coinTaker: 0.0600 },
      { tier: "VIP 1", min: 5_000_000, maker: 0.0190, taker: 0.0600, coinMaker: 0.0190, coinTaker: 0.0600 },
      { tier: "VIP 2", min: 10_000_000, maker: 0.0160, taker: 0.0400, coinMaker: 0.0160, coinTaker: 0.0400 },
      { tier: "VIP 3", min: 20_000_000, maker: 0.0140, taker: 0.0375, coinMaker: 0.0140, coinTaker: 0.0375 },
      { tier: "VIP 4", min: 50_000_000, maker: 0.0120, taker: 0.0350, coinMaker: 0.0120, coinTaker: 0.0350 },
      { tier: "VIP 5", min: 100_000_000, maker: 0.0100, taker: 0.0320, coinMaker: 0.0100, coinTaker: 0.0320 },
      { tier: "VIP 6", min: 300_000_000, maker: 0.0080, taker: 0.0300, coinMaker: 0.0080, coinTaker: 0.0300 },
      { tier: "SVIP", min: 1_000_000_000, maker: 0.0000, taker: 0.0200, coinMaker: 0.0000, coinTaker: 0.0200 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0600, coinMaker: 0.0200, coinTaker: 0.0600 },
      { tier: "VIP 1", min: 10_000, maker: 0.0190, taker: 0.0600, coinMaker: 0.0190, coinTaker: 0.0600 },
      { tier: "VIP 2", min: 50_000, maker: 0.0160, taker: 0.0400, coinMaker: 0.0160, coinTaker: 0.0400 },
      { tier: "VIP 3", min: 250_000, maker: 0.0140, taker: 0.0375, coinMaker: 0.0140, coinTaker: 0.0375 },
      { tier: "VIP 4", min: 750_000, maker: 0.0120, taker: 0.0350, coinMaker: 0.0120, coinTaker: 0.0350 },
      { tier: "VIP 5", min: 2_000_000, maker: 0.0100, taker: 0.0320, coinMaker: 0.0100, coinTaker: 0.0320 },
      { tier: "VIP 6", min: 5_000_000, maker: 0.0080, taker: 0.0300, coinMaker: 0.0080, coinTaker: 0.0300 },
      { tier: "SVIP", min: 10_000_000, maker: 0.0000, taker: 0.0200, coinMaker: 0.0000, coinTaker: 0.0200 },
    ],
  },
};