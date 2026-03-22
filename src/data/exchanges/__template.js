/**
 * CompareFee — New Exchange Template
 *
 * 사용 방법:
 * 1. 이 파일을 복사해서 `[거래소id].js` 로 저장
 * 2. 모든 항목을 채움
 * 3. exchangeData.js에 import 한 줄 + 배열에 추가
 *
 * 수수료 단위: 퍼센트(%) — 예: 0.1 = 0.1%
 * coinMaker / coinTaker: 네이티브 코인 할인 적용 시 수수료 (없으면 필드 생략)
 */
export default {
  id: "exchange_id",          // 소문자 영문, 고유값 (예: "htx")
  name: "Exchange Name",      // 표시 이름 (예: "HTX")
  color: "#FFFFFF",           // 브랜드 색상 (hex)
  nativeCoin: null,           // 코인 할인 심볼 (예: "HT"), 없으면 null
  coinDiscountRate: null,     // 코인 할인율 (예: 0.2 = 20%), 없으면 null
  referralUrl: "https://...", // 레퍼럴 링크
  rebate: {
    spot: 0.2,                // CompareFee 환급률 (Spot)
    futures: 0.2,             // CompareFee 환급률 (Futures)
  },
  active: true,               // false로 설정하면 UI에서 숨김
  spot: {
    volumeBased: [
      // { tier: "VIP 0", min: 0,          maker: 0.10, taker: 0.10 },
      // { tier: "VIP 1", min: 1_000_000,  maker: 0.08, taker: 0.10 },
      // 코인 할인이 있는 경우 coinMaker, coinTaker 추가:
      // { tier: "VIP 0", min: 0, maker: 0.10, taker: 0.10, coinMaker: 0.08, coinTaker: 0.08 },
    ],
    depositBased: [
      // 자산 예치금 기준 티어가 없으면 [] 빈 배열
    ],
  },
  futures: {
    volumeBased: [
      // { tier: "VIP 0", min: 0,         maker: 0.02, taker: 0.05 },
    ],
    depositBased: [
      // 자산 예치금 기준 티어가 없으면 [] 빈 배열
    ],
  },
};
