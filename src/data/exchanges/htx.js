/**
 * CompareFee — HTX Fee Data
 */
export default {
  id: "htx",
  name: "HTX",
  color: "#0155ff", // 브랜드 컬러 (임시)
  nativeCoin: "HT",
  coinDiscountRate: 0.25,
  referralUrl: "https://www.htx.com/en-us/v/register/?invite_code=FEERADAR",
  rebate: { spot: 0.2, futures: 0.2 },
  active: true,
  spot: {
    volumeBased: [
      { tier: "VIP 0", min: 0,         maker: 0.100, taker: 0.100 },
      { tier: "VIP 1", min: 1_000_000, maker: 0.080, taker: 0.090 },
      { tier: "VIP 2", min: 5_000_000, maker: 0.070, taker: 0.080 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,      maker: 0.100, taker: 0.100 },
      { tier: "VIP 1", min: 50_000, maker: 0.080, taker: 0.090 },
    ],
  },
  futures: {
    volumeBased: [
      { tier: "VIP 0", min: 0,             maker: 0.020, taker: 0.050 },
      { tier: "VIP 1", min: 5_000_000,     maker: 0.015, taker: 0.040 },
    ],
    depositBased: [
      { tier: "VIP 0", min: 0,      maker: 0.020, taker: 0.050 },
      { tier: "VIP 1", min: 50_000, maker: 0.015, taker: 0.040 },
    ],
  },
};
