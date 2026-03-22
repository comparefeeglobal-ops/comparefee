/**
 * CompareFee - Exchange Fee Data
 * 
 * ⚠️  AUTO-GENERATED FILE — Do not edit manually!
 *     Last updated: 2026-03-22T13:46:07.748Z
 *     Run 'node scripts/collect.js' to refresh.
 */

export const exchanges = [
  {
    "id": "binance",
    "name": "Binance",
    "color": "#F0B90B",
    "nativeCoin": "BNB",
    "coinDiscountRate": 0.1,
    "referralUrl": "https://accounts.binance.com/register?ref=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "lastFetched": "2026-03-22T13:46:07.748Z",
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.09,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 1",
          "min": 1000000,
          "maker": 0.09,
          "taker": 0.1,
          "coinMaker": 0.081,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 2",
          "min": 5000000,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.072,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 3",
          "min": 20000000,
          "maker": 0.042,
          "taker": 0.06,
          "coinMaker": 0.0378,
          "coinTaker": 0.054
        },
        {
          "tier": "VIP 4",
          "min": 100000000,
          "maker": 0.042,
          "taker": 0.054,
          "coinMaker": 0.0378,
          "coinTaker": 0.0486
        },
        {
          "tier": "VIP 5",
          "min": 150000000,
          "maker": 0.036,
          "taker": 0.048,
          "coinMaker": 0.0324,
          "coinTaker": 0.0432
        },
        {
          "tier": "VIP 6",
          "min": 400000000,
          "maker": 0.03,
          "taker": 0.042,
          "coinMaker": 0.027,
          "coinTaker": 0.0378
        },
        {
          "tier": "VIP 7",
          "min": 800000000,
          "maker": 0.024,
          "taker": 0.036,
          "coinMaker": 0.0216,
          "coinTaker": 0.0324
        },
        {
          "tier": "VIP 8",
          "min": 2000000000,
          "maker": 0.018,
          "taker": 0.03,
          "coinMaker": 0.0162,
          "coinTaker": 0.027
        },
        {
          "tier": "VIP 9",
          "min": 4000000000,
          "maker": 0.012,
          "taker": 0.024,
          "coinMaker": 0.0108,
          "coinTaker": 0.0216
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.09,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 1",
          "min": 3500,
          "maker": 0.09,
          "taker": 0.1,
          "coinMaker": 0.081,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 2",
          "min": 17500,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.072,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 3",
          "min": 70000,
          "maker": 0.042,
          "taker": 0.06,
          "coinMaker": 0.0378,
          "coinTaker": 0.054
        },
        {
          "tier": "VIP 4",
          "min": 175000,
          "maker": 0.042,
          "taker": 0.054,
          "coinMaker": 0.0378,
          "coinTaker": 0.0486
        },
        {
          "tier": "VIP 5",
          "min": 700000,
          "maker": 0.036,
          "taker": 0.048,
          "coinMaker": 0.0324,
          "coinTaker": 0.0432
        },
        {
          "tier": "VIP 6",
          "min": 1750000,
          "maker": 0.03,
          "taker": 0.042,
          "coinMaker": 0.027,
          "coinTaker": 0.0378
        },
        {
          "tier": "VIP 7",
          "min": 3500000,
          "maker": 0.024,
          "taker": 0.036,
          "coinMaker": 0.0216,
          "coinTaker": 0.0324
        },
        {
          "tier": "VIP 8",
          "min": 7000000,
          "maker": 0.018,
          "taker": 0.03,
          "coinMaker": 0.0162,
          "coinTaker": 0.027
        },
        {
          "tier": "VIP 9",
          "min": 17500000,
          "maker": 0.012,
          "taker": 0.024,
          "coinMaker": 0.0108,
          "coinTaker": 0.0216
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.018,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 1",
          "min": 5000000,
          "maker": 0.018,
          "taker": 0.04,
          "coinMaker": 0.0162,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 2",
          "min": 10000000,
          "maker": 0.016,
          "taker": 0.035,
          "coinMaker": 0.0144,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 3",
          "min": 50000000,
          "maker": 0.014,
          "taker": 0.032,
          "coinMaker": 0.0126,
          "coinTaker": 0.0288
        },
        {
          "tier": "VIP 4",
          "min": 100000000,
          "maker": 0.012,
          "taker": 0.03,
          "coinMaker": 0.0108,
          "coinTaker": 0.027
        },
        {
          "tier": "VIP 5",
          "min": 200000000,
          "maker": 0.01,
          "taker": 0.027,
          "coinMaker": 0.009,
          "coinTaker": 0.0243
        },
        {
          "tier": "VIP 6",
          "min": 400000000,
          "maker": 0.008,
          "taker": 0.025,
          "coinMaker": 0.0072,
          "coinTaker": 0.0225
        },
        {
          "tier": "VIP 7",
          "min": 800000000,
          "maker": 0.006,
          "taker": 0.022,
          "coinMaker": 0.0054,
          "coinTaker": 0.0198
        },
        {
          "tier": "VIP 8",
          "min": 2000000000,
          "maker": 0.004,
          "taker": 0.02,
          "coinMaker": 0.0036,
          "coinTaker": 0.018
        },
        {
          "tier": "VIP 9",
          "min": 4000000000,
          "maker": 0,
          "taker": 0.017,
          "coinMaker": 0,
          "coinTaker": 0.0153
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.018,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 1",
          "min": 3500,
          "maker": 0.018,
          "taker": 0.04,
          "coinMaker": 0.0162,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 2",
          "min": 17500,
          "maker": 0.016,
          "taker": 0.035,
          "coinMaker": 0.0144,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 3",
          "min": 70000,
          "maker": 0.014,
          "taker": 0.032,
          "coinMaker": 0.0126,
          "coinTaker": 0.0288
        },
        {
          "tier": "VIP 4",
          "min": 175000,
          "maker": 0.012,
          "taker": 0.03,
          "coinMaker": 0.0108,
          "coinTaker": 0.027
        },
        {
          "tier": "VIP 5",
          "min": 700000,
          "maker": 0.01,
          "taker": 0.027,
          "coinMaker": 0.009,
          "coinTaker": 0.0243
        },
        {
          "tier": "VIP 6",
          "min": 1750000,
          "maker": 0.008,
          "taker": 0.025,
          "coinMaker": 0.0072,
          "coinTaker": 0.0225
        },
        {
          "tier": "VIP 7",
          "min": 3500000,
          "maker": 0.006,
          "taker": 0.022,
          "coinMaker": 0.0054,
          "coinTaker": 0.0198
        },
        {
          "tier": "VIP 8",
          "min": 7000000,
          "maker": 0.004,
          "taker": 0.02,
          "coinMaker": 0.0036,
          "coinTaker": 0.018
        },
        {
          "tier": "VIP 9",
          "min": 17500000,
          "maker": 0,
          "taker": 0.017,
          "coinMaker": 0,
          "coinTaker": 0.0153
        }
      ]
    }
  },
  {
    "id": "bybit",
    "name": "Bybit",
    "color": "#F7A600",
    "nativeCoin": null,
    "coinDiscountRate": null,
    "referralUrl": "https://www.bybit.com/register?affiliate_id=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "lastFetched": "2026-03-22T13:46:07.748Z",
    "spot": {
      "volumeBased": [
        {
          "tier": "Non-VIP",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 1000000,
          "maker": 0.0675,
          "taker": 0.08
        },
        {
          "tier": "VIP 2",
          "min": 5000000,
          "maker": 0.065,
          "taker": 0.0775
        },
        {
          "tier": "VIP 3",
          "min": 10000000,
          "maker": 0.0625,
          "taker": 0.075
        },
        {
          "tier": "VIP 4",
          "min": 25000000,
          "maker": 0.05,
          "taker": 0.06
        },
        {
          "tier": "VIP 5",
          "min": 50000000,
          "maker": 0.04,
          "taker": 0.05
        },
        {
          "tier": "Supreme VIP",
          "min": 100000000,
          "maker": 0.03,
          "taker": 0.045
        }
      ],
      "depositBased": [
        {
          "tier": "Non-VIP",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.0675,
          "taker": 0.08
        },
        {
          "tier": "VIP 2",
          "min": 250000,
          "maker": 0.065,
          "taker": 0.0775
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.0625,
          "taker": 0.075
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.05,
          "taker": 0.06
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.04,
          "taker": 0.05
        },
        {
          "tier": "Supreme VIP",
          "min": 5000000,
          "maker": 0.03,
          "taker": 0.045
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "Non-VIP",
          "min": 0,
          "maker": 0.02,
          "taker": 0.055
        },
        {
          "tier": "VIP 1",
          "min": 10000000,
          "maker": 0.018,
          "taker": 0.04
        },
        {
          "tier": "VIP 2",
          "min": 25000000,
          "maker": 0.016,
          "taker": 0.0375
        },
        {
          "tier": "VIP 3",
          "min": 50000000,
          "maker": 0.014,
          "taker": 0.035
        },
        {
          "tier": "VIP 4",
          "min": 100000000,
          "maker": 0.012,
          "taker": 0.032
        },
        {
          "tier": "VIP 5",
          "min": 250000000,
          "maker": 0.01,
          "taker": 0.03
        },
        {
          "tier": "Supreme VIP",
          "min": 500000000,
          "maker": 0.005,
          "taker": 0.025
        }
      ],
      "depositBased": [
        {
          "tier": "Non-VIP",
          "min": 0,
          "maker": 0.02,
          "taker": 0.055
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.018,
          "taker": 0.04
        },
        {
          "tier": "VIP 2",
          "min": 250000,
          "maker": 0.016,
          "taker": 0.0375
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.014,
          "taker": 0.035
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.012,
          "taker": 0.032
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.01,
          "taker": 0.03
        },
        {
          "tier": "Supreme VIP",
          "min": 5000000,
          "maker": 0.005,
          "taker": 0.025
        }
      ]
    }
  },
  {
    "id": "okx",
    "name": "OKX",
    "color": "#FFFFFF",
    "nativeCoin": null,
    "coinDiscountRate": null,
    "referralUrl": "https://www.okx.com/join?channelId=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "lastFetched": "2026-03-22T13:46:07.748Z",
    "spot": {
      "volumeBased": [
        {
          "tier": "Lv 1",
          "min": 0,
          "maker": 0.08,
          "taker": 0.1
        },
        {
          "tier": "Lv 2",
          "min": 5000000,
          "maker": 0.06,
          "taker": 0.08
        },
        {
          "tier": "Lv 3",
          "min": 10000000,
          "maker": 0.05,
          "taker": 0.07
        },
        {
          "tier": "Lv 4",
          "min": 20000000,
          "maker": 0.03,
          "taker": 0.05
        },
        {
          "tier": "Lv 5",
          "min": 50000000,
          "maker": 0.02,
          "taker": 0.04
        },
        {
          "tier": "Lv 6",
          "min": 100000000,
          "maker": 0.01,
          "taker": 0.03
        },
        {
          "tier": "Lv 7",
          "min": 200000000,
          "maker": -0.005,
          "taker": 0.02
        },
        {
          "tier": "Lv 8",
          "min": 500000000,
          "maker": -0.01,
          "taker": 0.015
        },
        {
          "tier": "Lv 9",
          "min": 1000000000,
          "maker": -0.015,
          "taker": 0.01
        }
      ],
      "depositBased": [
        {
          "tier": "Lv 1",
          "min": 0,
          "maker": 0.08,
          "taker": 0.1
        },
        {
          "tier": "Lv 2",
          "min": 100000,
          "maker": 0.06,
          "taker": 0.08
        },
        {
          "tier": "Lv 3",
          "min": 500000,
          "maker": 0.05,
          "taker": 0.07
        },
        {
          "tier": "Lv 4",
          "min": 1000000,
          "maker": 0.03,
          "taker": 0.05
        },
        {
          "tier": "Lv 5",
          "min": 5000000,
          "maker": 0.02,
          "taker": 0.04
        },
        {
          "tier": "Lv 6",
          "min": 10000000,
          "maker": 0.01,
          "taker": 0.03
        },
        {
          "tier": "Lv 7",
          "min": 20000000,
          "maker": -0.005,
          "taker": 0.02
        },
        {
          "tier": "Lv 8",
          "min": 50000000,
          "maker": -0.01,
          "taker": 0.015
        },
        {
          "tier": "Lv 9",
          "min": 100000000,
          "maker": -0.015,
          "taker": 0.01
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "Lv 1",
          "min": 0,
          "maker": 0.02,
          "taker": 0.05
        },
        {
          "tier": "Lv 2",
          "min": 5000000,
          "maker": 0.015,
          "taker": 0.04
        },
        {
          "tier": "Lv 3",
          "min": 10000000,
          "maker": 0.01,
          "taker": 0.035
        },
        {
          "tier": "Lv 4",
          "min": 20000000,
          "maker": 0.005,
          "taker": 0.03
        },
        {
          "tier": "Lv 5",
          "min": 50000000,
          "maker": 0,
          "taker": 0.025
        },
        {
          "tier": "Lv 6",
          "min": 100000000,
          "maker": -0.005,
          "taker": 0.02
        },
        {
          "tier": "Lv 7",
          "min": 200000000,
          "maker": -0.01,
          "taker": 0.015
        },
        {
          "tier": "Lv 8",
          "min": 500000000,
          "maker": -0.015,
          "taker": 0.01
        },
        {
          "tier": "Lv 9",
          "min": 1000000000,
          "maker": -0.02,
          "taker": 0.01
        }
      ],
      "depositBased": [
        {
          "tier": "Lv 1",
          "min": 0,
          "maker": 0.02,
          "taker": 0.05
        },
        {
          "tier": "Lv 2",
          "min": 100000,
          "maker": 0.015,
          "taker": 0.04
        },
        {
          "tier": "Lv 3",
          "min": 500000,
          "maker": 0.01,
          "taker": 0.035
        },
        {
          "tier": "Lv 4",
          "min": 1000000,
          "maker": 0.005,
          "taker": 0.03
        },
        {
          "tier": "Lv 5",
          "min": 5000000,
          "maker": 0,
          "taker": 0.025
        },
        {
          "tier": "Lv 6",
          "min": 10000000,
          "maker": -0.005,
          "taker": 0.02
        },
        {
          "tier": "Lv 7",
          "min": 20000000,
          "maker": -0.01,
          "taker": 0.015
        },
        {
          "tier": "Lv 8",
          "min": 50000000,
          "maker": -0.015,
          "taker": 0.01
        },
        {
          "tier": "Lv 9",
          "min": 100000000,
          "maker": -0.02,
          "taker": 0.01
        }
      ]
    }
  },
  {
    "id": "bitget",
    "name": "Bitget",
    "color": "#00F0FF",
    "nativeCoin": "BGB",
    "coinDiscountRate": 0.2,
    "referralUrl": "https://www.bitget.com/referral/register?clacCode=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "lastFetched": "2026-03-22T13:46:07.748Z",
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.08,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 1",
          "min": 5000000,
          "maker": 0.08,
          "taker": 0.08,
          "coinMaker": 0.064,
          "coinTaker": 0.064
        },
        {
          "tier": "VIP 2",
          "min": 10000000,
          "maker": 0.065,
          "taker": 0.07,
          "coinMaker": 0.052,
          "coinTaker": 0.056
        },
        {
          "tier": "VIP 3",
          "min": 25000000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.04,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 4",
          "min": 50000000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.032,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 5",
          "min": 100000000,
          "maker": 0.03,
          "taker": 0.04,
          "coinMaker": 0.024,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 6",
          "min": 200000000,
          "maker": 0.02,
          "taker": 0.035,
          "coinMaker": 0.016,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 7",
          "min": 500000000,
          "maker": 0.01,
          "taker": 0.03,
          "coinMaker": 0.008,
          "coinTaker": 0.024
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.08,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.08,
          "taker": 0.08,
          "coinMaker": 0.064,
          "coinTaker": 0.064
        },
        {
          "tier": "VIP 2",
          "min": 200000,
          "maker": 0.065,
          "taker": 0.07,
          "coinMaker": 0.052,
          "coinTaker": 0.056
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.04,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.032,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.03,
          "taker": 0.04,
          "coinMaker": 0.024,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.02,
          "taker": 0.035,
          "coinMaker": 0.016,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 7",
          "min": 10000000,
          "maker": 0.01,
          "taker": 0.03,
          "coinMaker": 0.008,
          "coinTaker": 0.024
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.016,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 1",
          "min": 10000000,
          "maker": 0.018,
          "taker": 0.04,
          "coinMaker": 0.0144,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 2",
          "min": 25000000,
          "maker": 0.016,
          "taker": 0.0375,
          "coinMaker": 0.0128,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 3",
          "min": 50000000,
          "maker": 0.014,
          "taker": 0.035,
          "coinMaker": 0.0112,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 4",
          "min": 100000000,
          "maker": 0.012,
          "taker": 0.032,
          "coinMaker": 0.0096,
          "coinTaker": 0.0256
        },
        {
          "tier": "VIP 5",
          "min": 250000000,
          "maker": 0.01,
          "taker": 0.03,
          "coinMaker": 0.008,
          "coinTaker": 0.024
        },
        {
          "tier": "VIP 6",
          "min": 500000000,
          "maker": 0.006,
          "taker": 0.027,
          "coinMaker": 0.0048,
          "coinTaker": 0.0216
        },
        {
          "tier": "VIP 7",
          "min": 1000000000,
          "maker": 0.004,
          "taker": 0.025,
          "coinMaker": 0.0032,
          "coinTaker": 0.02
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.016,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.018,
          "taker": 0.04,
          "coinMaker": 0.0144,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 2",
          "min": 200000,
          "maker": 0.016,
          "taker": 0.0375,
          "coinMaker": 0.0128,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.014,
          "taker": 0.035,
          "coinMaker": 0.0112,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.012,
          "taker": 0.032,
          "coinMaker": 0.0096,
          "coinTaker": 0.0256
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.01,
          "taker": 0.03,
          "coinMaker": 0.008,
          "coinTaker": 0.024
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.006,
          "taker": 0.027,
          "coinMaker": 0.0048,
          "coinTaker": 0.0216
        },
        {
          "tier": "VIP 7",
          "min": 10000000,
          "maker": 0.004,
          "taker": 0.025,
          "coinMaker": 0.0032,
          "coinTaker": 0.02
        }
      ]
    }
  },
  {
    "id": "gate",
    "name": "Gate.io",
    "color": "#2354E6",
    "nativeCoin": "GT",
    "coinDiscountRate": 0.25,
    "referralUrl": "https://www.gate.io/signup?ref=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "lastFetched": "2026-03-22T13:46:07.748Z",
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.075,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 1",
          "min": 1000000,
          "maker": 0.085,
          "taker": 0.09,
          "coinMaker": 0.0638,
          "coinTaker": 0.0675
        },
        {
          "tier": "VIP 2",
          "min": 5000000,
          "maker": 0.076,
          "taker": 0.081,
          "coinMaker": 0.057,
          "coinTaker": 0.0607
        },
        {
          "tier": "VIP 3",
          "min": 10000000,
          "maker": 0.065,
          "taker": 0.075,
          "coinMaker": 0.0488,
          "coinTaker": 0.0562
        },
        {
          "tier": "VIP 4",
          "min": 25000000,
          "maker": 0.055,
          "taker": 0.065,
          "coinMaker": 0.0413,
          "coinTaker": 0.0488
        },
        {
          "tier": "VIP 5",
          "min": 50000000,
          "maker": 0.045,
          "taker": 0.055,
          "coinMaker": 0.0338,
          "coinTaker": 0.0413
        },
        {
          "tier": "VIP 6",
          "min": 100000000,
          "maker": 0.035,
          "taker": 0.045,
          "coinMaker": 0.0263,
          "coinTaker": 0.0338
        },
        {
          "tier": "VIP 7",
          "min": 250000000,
          "maker": 0.025,
          "taker": 0.035,
          "coinMaker": 0.0188,
          "coinTaker": 0.0263
        },
        {
          "tier": "VIP 8",
          "min": 500000000,
          "maker": 0.015,
          "taker": 0.025,
          "coinMaker": 0.0112,
          "coinTaker": 0.0188
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.075,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 1",
          "min": 50000,
          "maker": 0.085,
          "taker": 0.09,
          "coinMaker": 0.0638,
          "coinTaker": 0.0675
        },
        {
          "tier": "VIP 2",
          "min": 200000,
          "maker": 0.076,
          "taker": 0.081,
          "coinMaker": 0.057,
          "coinTaker": 0.0607
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.065,
          "taker": 0.075,
          "coinMaker": 0.0488,
          "coinTaker": 0.0562
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.055,
          "taker": 0.065,
          "coinMaker": 0.0413,
          "coinTaker": 0.0488
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.045,
          "taker": 0.055,
          "coinMaker": 0.0338,
          "coinTaker": 0.0413
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.035,
          "taker": 0.045,
          "coinMaker": 0.0263,
          "coinTaker": 0.0338
        },
        {
          "tier": "VIP 7",
          "min": 10000000,
          "maker": 0.025,
          "taker": 0.035,
          "coinMaker": 0.0188,
          "coinTaker": 0.0263
        },
        {
          "tier": "VIP 8",
          "min": 30000000,
          "maker": 0.015,
          "taker": 0.025,
          "coinMaker": 0.0112,
          "coinTaker": 0.0188
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.015,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 1",
          "min": 5000000,
          "maker": 0.018,
          "taker": 0.045,
          "coinMaker": 0.0135,
          "coinTaker": 0.0338
        },
        {
          "tier": "VIP 2",
          "min": 10000000,
          "maker": 0.016,
          "taker": 0.042,
          "coinMaker": 0.012,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 3",
          "min": 25000000,
          "maker": 0.014,
          "taker": 0.04,
          "coinMaker": 0.0105,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 4",
          "min": 50000000,
          "maker": 0.012,
          "taker": 0.038,
          "coinMaker": 0.009,
          "coinTaker": 0.0285
        },
        {
          "tier": "VIP 5",
          "min": 100000000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.0075,
          "coinTaker": 0.0263
        },
        {
          "tier": "VIP 6",
          "min": 200000000,
          "maker": 0.008,
          "taker": 0.03,
          "coinMaker": 0.006,
          "coinTaker": 0.0225
        },
        {
          "tier": "VIP 7",
          "min": 500000000,
          "maker": 0.006,
          "taker": 0.025,
          "coinMaker": 0.0045,
          "coinTaker": 0.0188
        },
        {
          "tier": "VIP 8",
          "min": 1000000000,
          "maker": 0.004,
          "taker": 0.02,
          "coinMaker": 0.003,
          "coinTaker": 0.015
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.015,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 1",
          "min": 50000,
          "maker": 0.018,
          "taker": 0.045,
          "coinMaker": 0.0135,
          "coinTaker": 0.0338
        },
        {
          "tier": "VIP 2",
          "min": 200000,
          "maker": 0.016,
          "taker": 0.042,
          "coinMaker": 0.012,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.014,
          "taker": 0.04,
          "coinMaker": 0.0105,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.012,
          "taker": 0.038,
          "coinMaker": 0.009,
          "coinTaker": 0.0285
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.0075,
          "coinTaker": 0.0263
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.008,
          "taker": 0.03,
          "coinMaker": 0.006,
          "coinTaker": 0.0225
        },
        {
          "tier": "VIP 7",
          "min": 10000000,
          "maker": 0.006,
          "taker": 0.025,
          "coinMaker": 0.0045,
          "coinTaker": 0.0188
        },
        {
          "tier": "VIP 8",
          "min": 30000000,
          "maker": 0.004,
          "taker": 0.02,
          "coinMaker": 0.003,
          "coinTaker": 0.015
        }
      ]
    }
  },
  {
    "id": "kucoin",
    "name": "KuCoin",
    "color": "#23AF91",
    "nativeCoin": "KCS",
    "coinDiscountRate": 0.2,
    "referralUrl": "https://www.kucoin.com/r/FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "lastFetched": "2026-03-22T13:46:07.748Z",
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.08,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 1",
          "min": 1000000,
          "maker": 0.09,
          "taker": 0.093,
          "coinMaker": 0.072,
          "coinTaker": 0.0744
        },
        {
          "tier": "VIP 2",
          "min": 5000000,
          "maker": 0.08,
          "taker": 0.085,
          "coinMaker": 0.064,
          "coinTaker": 0.068
        },
        {
          "tier": "VIP 3",
          "min": 10000000,
          "maker": 0.06,
          "taker": 0.07,
          "coinMaker": 0.048,
          "coinTaker": 0.056
        },
        {
          "tier": "VIP 4",
          "min": 25000000,
          "maker": 0.05,
          "taker": 0.065,
          "coinMaker": 0.04,
          "coinTaker": 0.052
        },
        {
          "tier": "VIP 5",
          "min": 50000000,
          "maker": 0.035,
          "taker": 0.055,
          "coinMaker": 0.028,
          "coinTaker": 0.044
        },
        {
          "tier": "VIP 6",
          "min": 100000000,
          "maker": 0.025,
          "taker": 0.045,
          "coinMaker": 0.02,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 7",
          "min": 200000000,
          "maker": 0.015,
          "taker": 0.04,
          "coinMaker": 0.012,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 8",
          "min": 500000000,
          "maker": 0,
          "taker": 0.035,
          "coinMaker": 0,
          "coinTaker": 0.028
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.08,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 1",
          "min": 50000,
          "maker": 0.09,
          "taker": 0.093,
          "coinMaker": 0.072,
          "coinTaker": 0.0744
        },
        {
          "tier": "VIP 2",
          "min": 200000,
          "maker": 0.08,
          "taker": 0.085,
          "coinMaker": 0.064,
          "coinTaker": 0.068
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.06,
          "taker": 0.07,
          "coinMaker": 0.048,
          "coinTaker": 0.056
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.05,
          "taker": 0.065,
          "coinMaker": 0.04,
          "coinTaker": 0.052
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.035,
          "taker": 0.055,
          "coinMaker": 0.028,
          "coinTaker": 0.044
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.025,
          "taker": 0.045,
          "coinMaker": 0.02,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 7",
          "min": 10000000,
          "maker": 0.015,
          "taker": 0.04,
          "coinMaker": 0.012,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 8",
          "min": 30000000,
          "maker": 0,
          "taker": 0.035,
          "coinMaker": 0,
          "coinTaker": 0.028
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 5000000,
          "maker": 0.016,
          "taker": 0.055
        },
        {
          "tier": "VIP 2",
          "min": 10000000,
          "maker": 0.014,
          "taker": 0.05
        },
        {
          "tier": "VIP 3",
          "min": 25000000,
          "maker": 0.012,
          "taker": 0.048
        },
        {
          "tier": "VIP 4",
          "min": 50000000,
          "maker": 0.01,
          "taker": 0.046
        },
        {
          "tier": "VIP 5",
          "min": 100000000,
          "maker": 0.006,
          "taker": 0.048
        },
        {
          "tier": "VIP 6",
          "min": 200000000,
          "maker": 0.004,
          "taker": 0.042
        },
        {
          "tier": "VIP 7",
          "min": 500000000,
          "maker": 0.002,
          "taker": 0.038
        },
        {
          "tier": "VIP 8",
          "min": 1000000000,
          "maker": 0,
          "taker": 0.035
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 50000,
          "maker": 0.016,
          "taker": 0.055
        },
        {
          "tier": "VIP 2",
          "min": 200000,
          "maker": 0.014,
          "taker": 0.05
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.012,
          "taker": 0.048
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.01,
          "taker": 0.046
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.006,
          "taker": 0.048
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.004,
          "taker": 0.042
        },
        {
          "tier": "VIP 7",
          "min": 10000000,
          "maker": 0.002,
          "taker": 0.038
        },
        {
          "tier": "VIP 8",
          "min": 30000000,
          "maker": 0,
          "taker": 0.035
        }
      ]
    }
  },
  {
    "id": "mexc",
    "name": "MEXC",
    "color": "#1972E2",
    "nativeCoin": "MX",
    "coinDiscountRate": 0.2,
    "referralUrl": "https://www.mexc.com/register?inviteCode=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "lastFetched": "2026-03-22T13:46:07.748Z",
    "spot": {
      "volumeBased": [
        {
          "tier": "Non-VIP",
          "min": 0,
          "maker": 0,
          "taker": 0.05,
          "coinMaker": 0,
          "coinTaker": 0.04
        },
        {
          "tier": "Lv 1",
          "min": 10000000,
          "maker": 0,
          "taker": 0.045,
          "coinMaker": 0,
          "coinTaker": 0.036
        },
        {
          "tier": "Lv 2",
          "min": 20000000,
          "maker": 0,
          "taker": 0.04,
          "coinMaker": 0,
          "coinTaker": 0.032
        },
        {
          "tier": "Lv 3",
          "min": 50000000,
          "maker": 0,
          "taker": 0.035,
          "coinMaker": 0,
          "coinTaker": 0.028
        },
        {
          "tier": "Lv 4",
          "min": 100000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.024
        },
        {
          "tier": "Lv 5",
          "min": 200000000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.02
        },
        {
          "tier": "Lv 6",
          "min": 500000000,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.016
        },
        {
          "tier": "Lv 7",
          "min": 1000000000,
          "maker": 0,
          "taker": 0.015,
          "coinMaker": 0,
          "coinTaker": 0.012
        }
      ],
      "depositBased": [
        {
          "tier": "Non-VIP",
          "min": 0,
          "maker": 0,
          "taker": 0.05,
          "coinMaker": 0,
          "coinTaker": 0.04
        },
        {
          "tier": "Lv 1",
          "min": 100000,
          "maker": 0,
          "taker": 0.045,
          "coinMaker": 0,
          "coinTaker": 0.036
        },
        {
          "tier": "Lv 2",
          "min": 500000,
          "maker": 0,
          "taker": 0.04,
          "coinMaker": 0,
          "coinTaker": 0.032
        },
        {
          "tier": "Lv 3",
          "min": 1000000,
          "maker": 0,
          "taker": 0.035,
          "coinMaker": 0,
          "coinTaker": 0.028
        },
        {
          "tier": "Lv 4",
          "min": 3000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.024
        },
        {
          "tier": "Lv 5",
          "min": 5000000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.02
        },
        {
          "tier": "Lv 6",
          "min": 10000000,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.016
        },
        {
          "tier": "Lv 7",
          "min": 30000000,
          "maker": 0,
          "taker": 0.015,
          "coinMaker": 0,
          "coinTaker": 0.012
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "Non-VIP",
          "min": 0,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.016
        },
        {
          "tier": "Lv 1",
          "min": 10000000,
          "maker": 0,
          "taker": 0.019,
          "coinMaker": 0,
          "coinTaker": 0.0152
        },
        {
          "tier": "Lv 2",
          "min": 20000000,
          "maker": 0,
          "taker": 0.018,
          "coinMaker": 0,
          "coinTaker": 0.0144
        },
        {
          "tier": "Lv 3",
          "min": 50000000,
          "maker": 0,
          "taker": 0.017,
          "coinMaker": 0,
          "coinTaker": 0.0136
        },
        {
          "tier": "Lv 4",
          "min": 100000000,
          "maker": 0,
          "taker": 0.016,
          "coinMaker": 0,
          "coinTaker": 0.0128
        },
        {
          "tier": "Lv 5",
          "min": 200000000,
          "maker": 0,
          "taker": 0.015,
          "coinMaker": 0,
          "coinTaker": 0.012
        },
        {
          "tier": "Lv 6",
          "min": 500000000,
          "maker": 0,
          "taker": 0.014,
          "coinMaker": 0,
          "coinTaker": 0.0112
        },
        {
          "tier": "Lv 7",
          "min": 1000000000,
          "maker": 0,
          "taker": 0.013,
          "coinMaker": 0,
          "coinTaker": 0.0104
        }
      ],
      "depositBased": [
        {
          "tier": "Non-VIP",
          "min": 0,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.016
        },
        {
          "tier": "Lv 1",
          "min": 100000,
          "maker": 0,
          "taker": 0.019,
          "coinMaker": 0,
          "coinTaker": 0.0152
        },
        {
          "tier": "Lv 2",
          "min": 500000,
          "maker": 0,
          "taker": 0.018,
          "coinMaker": 0,
          "coinTaker": 0.0144
        },
        {
          "tier": "Lv 3",
          "min": 1000000,
          "maker": 0,
          "taker": 0.017,
          "coinMaker": 0,
          "coinTaker": 0.0136
        },
        {
          "tier": "Lv 4",
          "min": 3000000,
          "maker": 0,
          "taker": 0.016,
          "coinMaker": 0,
          "coinTaker": 0.0128
        },
        {
          "tier": "Lv 5",
          "min": 5000000,
          "maker": 0,
          "taker": 0.015,
          "coinMaker": 0,
          "coinTaker": 0.012
        },
        {
          "tier": "Lv 6",
          "min": 10000000,
          "maker": 0,
          "taker": 0.014,
          "coinMaker": 0,
          "coinTaker": 0.0112
        },
        {
          "tier": "Lv 7",
          "min": 30000000,
          "maker": 0,
          "taker": 0.013,
          "coinMaker": 0,
          "coinTaker": 0.0104
        }
      ]
    }
  }
];
