/**
 * CompareFee — Deepcoin Fee Data
 */
export default {
  id: "deepcoin",
  name: "Deepcoin",
  color: "#356ef2",
  nativeCoin: null,
  coinDiscountRate: null,
  referralUrl: "https://www.deepcoin.com/en/register?inviteCode=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0,         maker: 0.100, taker: 0.100 },
      { tier: "VIP 1", min: 1_000_000, maker: 0.080, taker: 0.090 },
    ],
    depositBased: [],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0,             maker: 0.020, taker: 0.060 },
      { tier: "VIP 1", min: 5_000_000,     maker: 0.015, taker: 0.050 },
    ],
    depositBased: [],
  },
};
