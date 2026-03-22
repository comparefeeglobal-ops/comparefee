/**
 * CompareFee — CoinW Fee Data
 */
export default {
  id: "coinw",
  name: "CoinW",
  color: "#ffb400",
  nativeCoin: "CWT",
  coinDiscountRate: 0.2,
  referralUrl: "https://www.coinw.com/front/invitePublicity?r=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0,         maker: 0.200, taker: 0.200 },
      { tier: "VIP 1", min: 1_000_000, maker: 0.180, taker: 0.180 },
    ],
    depositBased: [],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0,             maker: 0.040, taker: 0.060 },
      { tier: "VIP 1", min: 5_000_000,     maker: 0.035, taker: 0.055 },
    ],
    depositBased: [],
  },
};
