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
      { tier: "VIP 0", min: 0, maker: 0.1000, taker: 0.1000, coinMaker: 0.0750, coinTaker: 0.0750 },
      { tier: "VIP 1", min: 1_000_000, maker: 0.0675, taker: 0.0800, coinMaker: 0.0506, coinTaker: 0.0600 },
      { tier: "VIP 2", min: 5_000_000, maker: 0.0650, taker: 0.0775, coinMaker: 0.0488, coinTaker: 0.0581 },
      { tier: "VIP 3", min: 10_000_000, maker: 0.0625, taker: 0.0750, coinMaker: 0.0469, coinTaker: 0.0563 },
      { tier: "VIP 4", min: 25_000_000, maker: 0.0500, taker: 0.0600, coinMaker: 0.0375, coinTaker: 0.0450 },
      { tier: "VIP 5", min: 50_000_000, maker: 0.0400, taker: 0.0500, coinMaker: 0.0300, coinTaker: 0.0375 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.1000, taker: 0.1000, coinMaker: 0.0750, coinTaker: 0.0750 },
      { tier: "VIP 1", min: 100_000, maker: 0.0675, taker: 0.0800, coinMaker: 0.0506, coinTaker: 0.0600 },
      { tier: "VIP 2", min: 250_000, maker: 0.0650, taker: 0.0775, coinMaker: 0.0488, coinTaker: 0.0581 },
      { tier: "VIP 3", min: 500_000, maker: 0.0625, taker: 0.0750, coinMaker: 0.0469, coinTaker: 0.0563 },
      { tier: "VIP 4", min: 1_000_000, maker: 0.0500, taker: 0.0600, coinMaker: 0.0375, coinTaker: 0.0450 },
      { tier: "VIP 5", min: 2_000_000, maker: 0.0400, taker: 0.0500, coinMaker: 0.0300, coinTaker: 0.0375 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0550, coinMaker: 0.0180, coinTaker: 0.0495 },
      { tier: "VIP 1", min: 10_000_000, maker: 0.0180, taker: 0.0400, coinMaker: 0.0162, coinTaker: 0.0360 },
      { tier: "VIP 2", min: 25_000_000, maker: 0.0160, taker: 0.0375, coinMaker: 0.0144, coinTaker: 0.0338 },
      { tier: "VIP 3", min: 50_000_000, maker: 0.0140, taker: 0.0350, coinMaker: 0.0126, coinTaker: 0.0315 },
      { tier: "VIP 4", min: 100_000_000, maker: 0.0120, taker: 0.0320, coinMaker: 0.0108, coinTaker: 0.0288 },
      { tier: "VIP 5", min: 250_000_000, maker: 0.0100, taker: 0.0320, coinMaker: 0.0090, coinTaker: 0.0288 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0, maker: 0.0200, taker: 0.0550, coinMaker: 0.0180, coinTaker: 0.0495 },
      { tier: "VIP 1", min: 100_000, maker: 0.0180, taker: 0.0400, coinMaker: 0.0162, coinTaker: 0.0360 },
      { tier: "VIP 2", min: 250_000, maker: 0.0160, taker: 0.0375, coinMaker: 0.0144, coinTaker: 0.0338 },
      { tier: "VIP 3", min: 500_000, maker: 0.0140, taker: 0.0350, coinMaker: 0.0126, coinTaker: 0.0315 },
      { tier: "VIP 4", min: 1_000_000, maker: 0.0120, taker: 0.0320, coinMaker: 0.0108, coinTaker: 0.0288 },
      { tier: "VIP 5", min: 2_000_000, maker: 0.0100, taker: 0.0320, coinMaker: 0.0090, coinTaker: 0.0288 },
    ],
  },
};