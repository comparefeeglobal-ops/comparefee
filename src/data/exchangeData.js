/**
 * CompareFee - Exchange Fee Data
 *
 * ⚠️  AUTO-GENERATED FILE — Do not edit manually!
 *     Last updated: 2026-03-26T20:00:31.501Z
 *     Run 'node scripts/collect.js' to refresh.
 */

export const exchanges = [
  {
    "id": "binance",
    "name": "Binance",
    "color": "#F0B90B",
    "nativeCoin": "BNB",
    "coinDiscountRate": 0.1,
    "depositCurrency": "BNB",
    "tierRule": "and",
    "referralUrl": "https://accounts.binance.com/register?ref=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
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
          "maker": 0.09,
          "taker": 0.1,
          "coinMaker": 0.0675,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 2",
          "min": 5000000,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.06,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 3",
          "min": 20000000,
          "maker": 0.04,
          "taker": 0.06,
          "coinMaker": 0.03,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 4",
          "min": 75000000,
          "maker": 0.04,
          "taker": 0.052,
          "coinMaker": 0.03,
          "coinTaker": 0.039
        },
        {
          "tier": "VIP 5",
          "min": 150000000,
          "maker": 0.025,
          "taker": 0.031,
          "coinMaker": 0.01875,
          "coinTaker": 0.02325
        },
        {
          "tier": "VIP 6",
          "min": 400000000,
          "maker": 0.02,
          "taker": 0.029,
          "coinMaker": 0.015,
          "coinTaker": 0.02175
        },
        {
          "tier": "VIP 7",
          "min": 800000000,
          "maker": 0.019,
          "taker": 0.028,
          "coinMaker": 0.01425,
          "coinTaker": 0.021
        },
        {
          "tier": "VIP 8",
          "min": 2000000000,
          "maker": 0.016,
          "taker": 0.025,
          "coinMaker": 0.012,
          "coinTaker": 0.01875
        },
        {
          "tier": "VIP 9",
          "min": 4000000000,
          "maker": 0.011,
          "taker": 0.023,
          "coinMaker": 0.00825,
          "coinTaker": 0.01725
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
          "min": 5,
          "maker": 0.09,
          "taker": 0.1,
          "coinMaker": 0.0675,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 2",
          "min": 25,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.06,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 3",
          "min": 100,
          "maker": 0.04,
          "taker": 0.06,
          "coinMaker": 0.03,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 4",
          "min": 500,
          "maker": 0.04,
          "taker": 0.052,
          "coinMaker": 0.03,
          "coinTaker": 0.039
        },
        {
          "tier": "VIP 5",
          "min": 1000,
          "maker": 0.025,
          "taker": 0.031,
          "coinMaker": 0.01875,
          "coinTaker": 0.02325
        },
        {
          "tier": "VIP 6",
          "min": 1750,
          "maker": 0.02,
          "taker": 0.029,
          "coinMaker": 0.015,
          "coinTaker": 0.02175
        },
        {
          "tier": "VIP 7",
          "min": 3000,
          "maker": 0.019,
          "taker": 0.028,
          "coinMaker": 0.01425,
          "coinTaker": 0.021
        },
        {
          "tier": "VIP 8",
          "min": 4500,
          "maker": 0.016,
          "taker": 0.025,
          "coinMaker": 0.012,
          "coinTaker": 0.01875
        },
        {
          "tier": "VIP 9",
          "min": 5500,
          "maker": 0.011,
          "taker": 0.023,
          "coinMaker": 0.00825,
          "coinTaker": 0.01725
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
          "taker": 0.05,
          "coinMaker": 0.0162,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 2",
          "min": 10000000,
          "maker": 0.016,
          "taker": 0.04,
          "coinMaker": 0.0144,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 3",
          "min": 50000000,
          "maker": 0.012,
          "taker": 0.032,
          "coinMaker": 0.0108,
          "coinTaker": 0.0288
        },
        {
          "tier": "VIP 4",
          "min": 600000000,
          "maker": 0.01,
          "taker": 0.03,
          "coinMaker": 0.009,
          "coinTaker": 0.027
        },
        {
          "tier": "VIP 5",
          "min": 1000000000,
          "maker": 0.008,
          "taker": 0.027,
          "coinMaker": 0.0072,
          "coinTaker": 0.0243
        },
        {
          "tier": "VIP 6",
          "min": 2500000000,
          "maker": 0.006,
          "taker": 0.025,
          "coinMaker": 0.0054,
          "coinTaker": 0.0225
        },
        {
          "tier": "VIP 7",
          "min": 5000000000,
          "maker": 0.004,
          "taker": 0.022,
          "coinMaker": 0.0036,
          "coinTaker": 0.0198
        },
        {
          "tier": "VIP 8",
          "min": 12500000000,
          "maker": 0.002,
          "taker": 0.02,
          "coinMaker": 0.0018,
          "coinTaker": 0.018
        },
        {
          "tier": "VIP 9",
          "min": 25000000000,
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
          "min": 5,
          "maker": 0.018,
          "taker": 0.05,
          "coinMaker": 0.0162,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 2",
          "min": 25,
          "maker": 0.016,
          "taker": 0.04,
          "coinMaker": 0.0144,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 3",
          "min": 100,
          "maker": 0.012,
          "taker": 0.032,
          "coinMaker": 0.0108,
          "coinTaker": 0.0288
        },
        {
          "tier": "VIP 4",
          "min": 500,
          "maker": 0.01,
          "taker": 0.03,
          "coinMaker": 0.009,
          "coinTaker": 0.027
        },
        {
          "tier": "VIP 5",
          "min": 1000,
          "maker": 0.008,
          "taker": 0.027,
          "coinMaker": 0.0072,
          "coinTaker": 0.0243
        },
        {
          "tier": "VIP 6",
          "min": 1750,
          "maker": 0.006,
          "taker": 0.025,
          "coinMaker": 0.0054,
          "coinTaker": 0.0225
        },
        {
          "tier": "VIP 7",
          "min": 3000,
          "maker": 0.004,
          "taker": 0.022,
          "coinMaker": 0.0036,
          "coinTaker": 0.0198
        },
        {
          "tier": "VIP 8",
          "min": 4500,
          "maker": 0.002,
          "taker": 0.02,
          "coinMaker": 0.0018,
          "coinTaker": 0.018
        },
        {
          "tier": "VIP 9",
          "min": 5500,
          "maker": 0,
          "taker": 0.017,
          "coinMaker": 0,
          "coinTaker": 0.0153
        }
      ]
    },
    "depositUSDTRate": null
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
          "maker": 0.0675,
          "taker": 0.08,
          "coinMaker": 0.0506,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 5000000,
          "maker": 0.065,
          "taker": 0.0775,
          "coinMaker": 0.0488,
          "coinTaker": 0.0581
        },
        {
          "tier": "VIP 3",
          "min": 10000000,
          "maker": 0.0625,
          "taker": 0.075,
          "coinMaker": 0.0469,
          "coinTaker": 0.0563
        },
        {
          "tier": "VIP 4",
          "min": 25000000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.0375,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 5",
          "min": 50000000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.03,
          "coinTaker": 0.0375
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
          "min": 100000,
          "maker": 0.0675,
          "taker": 0.08,
          "coinMaker": 0.0506,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 250000,
          "maker": 0.065,
          "taker": 0.0775,
          "coinMaker": 0.0488,
          "coinTaker": 0.0581
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.0625,
          "taker": 0.075,
          "coinMaker": 0.0469,
          "coinTaker": 0.0563
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.0375,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 5",
          "min": 2000000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.03,
          "coinTaker": 0.0375
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.055,
          "coinMaker": 0.018,
          "coinTaker": 0.0495
        },
        {
          "tier": "VIP 1",
          "min": 10000000,
          "maker": 0.018,
          "taker": 0.04,
          "coinMaker": 0.0162,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 2",
          "min": 25000000,
          "maker": 0.016,
          "taker": 0.0375,
          "coinMaker": 0.0144,
          "coinTaker": 0.0338
        },
        {
          "tier": "VIP 3",
          "min": 50000000,
          "maker": 0.014,
          "taker": 0.035,
          "coinMaker": 0.0126,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 4",
          "min": 100000000,
          "maker": 0.012,
          "taker": 0.032,
          "coinMaker": 0.0108,
          "coinTaker": 0.0288
        },
        {
          "tier": "VIP 5",
          "min": 250000000,
          "maker": 0.01,
          "taker": 0.032,
          "coinMaker": 0.009,
          "coinTaker": 0.0288
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.055,
          "coinMaker": 0.018,
          "coinTaker": 0.0495
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.018,
          "taker": 0.04,
          "coinMaker": 0.0162,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 2",
          "min": 250000,
          "maker": 0.016,
          "taker": 0.0375,
          "coinMaker": 0.0144,
          "coinTaker": 0.0338
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.014,
          "taker": 0.035,
          "coinMaker": 0.0126,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.012,
          "taker": 0.032,
          "coinMaker": 0.0108,
          "coinTaker": 0.0288
        },
        {
          "tier": "VIP 5",
          "min": 2000000,
          "maker": 0.01,
          "taker": 0.032,
          "coinMaker": 0.009,
          "coinTaker": 0.0288
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
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.08,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 1000000,
          "maker": 0.0675,
          "taker": 0.08,
          "coinMaker": 0.0675,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 2",
          "min": 5000000,
          "maker": 0.06,
          "taker": 0.07,
          "coinMaker": 0.06,
          "coinTaker": 0.07
        },
        {
          "tier": "VIP 3",
          "min": 10000000,
          "maker": 0.055,
          "taker": 0.065,
          "coinMaker": 0.055,
          "coinTaker": 0.065
        },
        {
          "tier": "VIP 4",
          "min": 20000000,
          "maker": 0.03,
          "taker": 0.045,
          "coinMaker": 0.03,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 5",
          "min": 100000000,
          "maker": 0.025,
          "taker": 0.035,
          "coinMaker": 0.025,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 6",
          "min": 200000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 7",
          "min": 500000000,
          "maker": -0.002,
          "taker": 0.025,
          "coinMaker": -0.002,
          "coinTaker": 0.025
        },
        {
          "tier": "VIP 8",
          "min": 1000000000,
          "maker": -0.005,
          "taker": 0.02,
          "coinMaker": -0.005,
          "coinTaker": 0.02
        },
        {
          "tier": "VIP 9",
          "min": 5000000000,
          "maker": -0.0075,
          "taker": 0.0175,
          "coinMaker": -0.0075,
          "coinTaker": 0.0175
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.08,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.0675,
          "taker": 0.08,
          "coinMaker": 0.0675,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 2",
          "min": 250000,
          "maker": 0.06,
          "taker": 0.07,
          "coinMaker": 0.06,
          "coinTaker": 0.07
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.055,
          "taker": 0.065,
          "coinMaker": 0.055,
          "coinTaker": 0.065
        },
        {
          "tier": "VIP 4",
          "min": 2000000,
          "maker": 0.03,
          "taker": 0.045,
          "coinMaker": 0.03,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 5",
          "min": 5000000,
          "maker": 0.025,
          "taker": 0.035,
          "coinMaker": 0.025,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 6",
          "min": 10000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.03
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
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 1",
          "min": 10000000,
          "maker": 0.018,
          "taker": 0.04,
          "coinMaker": 0.018,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 2",
          "min": 50000000,
          "maker": 0.013,
          "taker": 0.035,
          "coinMaker": 0.013,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 3",
          "min": 100000000,
          "maker": 0.01,
          "taker": 0.028,
          "coinMaker": 0.01,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 4",
          "min": 200000000,
          "maker": 0.008,
          "taker": 0.027,
          "coinMaker": 0.008,
          "coinTaker": 0.027
        },
        {
          "tier": "VIP 5",
          "min": 600000000,
          "maker": 0.005,
          "taker": 0.026,
          "coinMaker": 0.005,
          "coinTaker": 0.026
        },
        {
          "tier": "VIP 6",
          "min": 1000000000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.025
        },
        {
          "tier": "VIP 7",
          "min": 1500000000,
          "maker": -0.002,
          "taker": 0.02,
          "coinMaker": -0.002,
          "coinTaker": 0.02
        },
        {
          "tier": "VIP 8",
          "min": 2000000000,
          "maker": -0.005,
          "taker": 0.02,
          "coinMaker": -0.005,
          "coinTaker": 0.02
        },
        {
          "tier": "VIP 9",
          "min": 20000000000,
          "maker": -0.005,
          "taker": 0.015,
          "coinMaker": -0.005,
          "coinTaker": 0.015
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.018,
          "taker": 0.04,
          "coinMaker": 0.018,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 2",
          "min": 250000,
          "maker": 0.013,
          "taker": 0.035,
          "coinMaker": 0.013,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 3",
          "min": 500000,
          "maker": 0.01,
          "taker": 0.028,
          "coinMaker": 0.01,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 4",
          "min": 2000000,
          "maker": 0.008,
          "taker": 0.027,
          "coinMaker": 0.008,
          "coinTaker": 0.027
        },
        {
          "tier": "VIP 5",
          "min": 5000000,
          "maker": 0.005,
          "taker": 0.026,
          "coinMaker": 0.005,
          "coinTaker": 0.026
        },
        {
          "tier": "VIP 6",
          "min": 10000000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.025
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
          "min": 500000,
          "maker": 0.08,
          "taker": 0.08,
          "coinMaker": 0.064,
          "coinTaker": 0.064
        },
        {
          "tier": "VIP 2",
          "min": 2000000,
          "maker": 0.065,
          "taker": 0.07,
          "coinMaker": 0.052,
          "coinTaker": 0.056
        },
        {
          "tier": "VIP 3",
          "min": 8000000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.04,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 4",
          "min": 30000000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.032,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 5",
          "min": 50000000,
          "maker": 0.03,
          "taker": 0.04,
          "coinMaker": 0.024,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 6",
          "min": 75000000,
          "maker": 0.02,
          "taker": 0.035,
          "coinMaker": 0.016,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 7",
          "min": 100000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
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
          "min": 30000,
          "maker": 0.08,
          "taker": 0.08,
          "coinMaker": 0.064,
          "coinTaker": 0.064
        },
        {
          "tier": "VIP 2",
          "min": 50000,
          "maker": 0.065,
          "taker": 0.07,
          "coinMaker": 0.052,
          "coinTaker": 0.056
        },
        {
          "tier": "VIP 3",
          "min": 250000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.04,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 4",
          "min": 750000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.032,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 5",
          "min": 2000000,
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
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
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
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 5000000,
          "maker": 0.019,
          "taker": 0.06,
          "coinMaker": 0.019,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 10000000,
          "maker": 0.016,
          "taker": 0.04,
          "coinMaker": 0.016,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 3",
          "min": 20000000,
          "maker": 0.014,
          "taker": 0.0375,
          "coinMaker": 0.014,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 4",
          "min": 50000000,
          "maker": 0.012,
          "taker": 0.035,
          "coinMaker": 0.012,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 5",
          "min": 100000000,
          "maker": 0.01,
          "taker": 0.032,
          "coinMaker": 0.01,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 6",
          "min": 300000000,
          "maker": 0.008,
          "taker": 0.03,
          "coinMaker": 0.008,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 7",
          "min": 1000000000,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.02
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 30000,
          "maker": 0.019,
          "taker": 0.06,
          "coinMaker": 0.019,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 50000,
          "maker": 0.016,
          "taker": 0.04,
          "coinMaker": 0.016,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 3",
          "min": 250000,
          "maker": 0.014,
          "taker": 0.0375,
          "coinMaker": 0.014,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 4",
          "min": 750000,
          "maker": 0.012,
          "taker": 0.035,
          "coinMaker": 0.012,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 5",
          "min": 2000000,
          "maker": 0.01,
          "taker": 0.032,
          "coinMaker": 0.01,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.008,
          "taker": 0.03,
          "coinMaker": 0.008,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 7",
          "min": 10000000,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.02
        }
      ]
    }
  },
  {
    "id": "gate",
    "name": "Gate",
    "color": "#2354E6",
    "nativeCoin": "GT",
    "coinDiscountRate": 0.25,
    "referralUrl": "https://www.gate.io/signup?ref=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
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
          "min": 60000,
          "maker": 0.099,
          "taker": 0.099,
          "coinMaker": 0.089,
          "coinTaker": 0.089
        },
        {
          "tier": "VIP 2",
          "min": 120000,
          "maker": 0.098,
          "taker": 0.098,
          "coinMaker": 0.088,
          "coinTaker": 0.088
        },
        {
          "tier": "VIP 3",
          "min": 240000,
          "maker": 0.097,
          "taker": 0.097,
          "coinMaker": 0.087,
          "coinTaker": 0.087
        },
        {
          "tier": "VIP 4",
          "min": 500000,
          "maker": 0.095,
          "taker": 0.096,
          "coinMaker": 0.086,
          "coinTaker": 0.086
        },
        {
          "tier": "VIP 5",
          "min": 1000000,
          "maker": 0.09,
          "taker": 0.095,
          "coinMaker": 0.081,
          "coinTaker": 0.085
        },
        {
          "tier": "VIP 6",
          "min": 3000000,
          "maker": 0.085,
          "taker": 0.09,
          "coinMaker": 0.076,
          "coinTaker": 0.081
        },
        {
          "tier": "VIP 7",
          "min": 8000000,
          "maker": 0.08,
          "taker": 0.085,
          "coinMaker": 0.07,
          "coinTaker": 0.076
        },
        {
          "tier": "VIP 8",
          "min": 20000000,
          "maker": 0.075,
          "taker": 0.08,
          "coinMaker": 0.06,
          "coinTaker": 0.072
        },
        {
          "tier": "VIP 9",
          "min": 50000000,
          "maker": 0.07,
          "taker": 0.075,
          "coinMaker": 0.05,
          "coinTaker": 0.068
        },
        {
          "tier": "VIP 10",
          "min": 100000000,
          "maker": 0,
          "taker": 0.058,
          "coinMaker": 0,
          "coinTaker": 0.058
        },
        {
          "tier": "VIP 11",
          "min": 120000000,
          "maker": 0,
          "taker": 0.045,
          "coinMaker": 0,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 12",
          "min": 240000000,
          "maker": 0,
          "taker": 0.037,
          "coinMaker": 0,
          "coinTaker": 0.037
        },
        {
          "tier": "VIP 13",
          "min": 440000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 14",
          "min": 800000000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.025
        },
        {
          "tier": "VIP 15",
          "min": 1600000000,
          "maker": 0,
          "taker": 0.022,
          "coinMaker": 0,
          "coinTaker": 0.022
        },
        {
          "tier": "VIP 16",
          "min": 3000000000,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.02
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
          "min": 2000,
          "maker": 0.099,
          "taker": 0.099,
          "coinMaker": 0.089,
          "coinTaker": 0.089
        },
        {
          "tier": "VIP 2",
          "min": 4000,
          "maker": 0.098,
          "taker": 0.098,
          "coinMaker": 0.088,
          "coinTaker": 0.088
        },
        {
          "tier": "VIP 3",
          "min": 10000,
          "maker": 0.097,
          "taker": 0.097,
          "coinMaker": 0.087,
          "coinTaker": 0.087
        },
        {
          "tier": "VIP 4",
          "min": 20000,
          "maker": 0.095,
          "taker": 0.096,
          "coinMaker": 0.086,
          "coinTaker": 0.086
        },
        {
          "tier": "VIP 5",
          "min": 40000,
          "maker": 0.09,
          "taker": 0.095,
          "coinMaker": 0.081,
          "coinTaker": 0.085
        },
        {
          "tier": "VIP 6",
          "min": 100000,
          "maker": 0.085,
          "taker": 0.09,
          "coinMaker": 0.076,
          "coinTaker": 0.081
        },
        {
          "tier": "VIP 7",
          "min": 200000,
          "maker": 0.08,
          "taker": 0.085,
          "coinMaker": 0.07,
          "coinTaker": 0.076
        },
        {
          "tier": "VIP 8",
          "min": 400000,
          "maker": 0.075,
          "taker": 0.08,
          "coinMaker": 0.06,
          "coinTaker": 0.072
        },
        {
          "tier": "VIP 9",
          "min": 1000000,
          "maker": 0.07,
          "taker": 0.075,
          "coinMaker": 0.05,
          "coinTaker": 0.068
        },
        {
          "tier": "VIP 10",
          "min": 2000000,
          "maker": 0,
          "taker": 0.058,
          "coinMaker": 0,
          "coinTaker": 0.058
        },
        {
          "tier": "VIP 11",
          "min": 4000000,
          "maker": 0,
          "taker": 0.045,
          "coinMaker": 0,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 12",
          "min": 8000000,
          "maker": 0,
          "taker": 0.037,
          "coinMaker": 0,
          "coinTaker": 0.037
        },
        {
          "tier": "VIP 13",
          "min": 16000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 14",
          "min": 30000000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.025
        },
        {
          "tier": "VIP 15",
          "min": 60000000,
          "maker": 0,
          "taker": 0.022,
          "coinMaker": 0,
          "coinTaker": 0.022
        },
        {
          "tier": "VIP 16",
          "min": 100000000,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.02
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
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 1",
          "min": 60000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 2",
          "min": 120000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 3",
          "min": 240000,
          "maker": 0.02,
          "taker": 0.048,
          "coinMaker": 0.02,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 4",
          "min": 500000,
          "maker": 0.02,
          "taker": 0.048,
          "coinMaker": 0.02,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 5",
          "min": 1000000,
          "maker": 0.02,
          "taker": 0.045,
          "coinMaker": 0.02,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 6",
          "min": 3000000,
          "maker": 0.018,
          "taker": 0.042,
          "coinMaker": 0.018,
          "coinTaker": 0.042
        },
        {
          "tier": "VIP 7",
          "min": 8000000,
          "maker": 0.016,
          "taker": 0.0375,
          "coinMaker": 0.016,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 8",
          "min": 20000000,
          "maker": 0.014,
          "taker": 0.035,
          "coinMaker": 0.014,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 9",
          "min": 50000000,
          "maker": 0.012,
          "taker": 0.032,
          "coinMaker": 0.012,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 10",
          "min": 100000000,
          "maker": 0.01,
          "taker": 0.03,
          "coinMaker": 0.01,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 11",
          "min": 120000000,
          "maker": 0.008,
          "taker": 0.028,
          "coinMaker": 0.008,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 12",
          "min": 240000000,
          "maker": 0.006,
          "taker": 0.026,
          "coinMaker": 0.006,
          "coinTaker": 0.026
        },
        {
          "tier": "VIP 13",
          "min": 440000000,
          "maker": 0.005,
          "taker": 0.024,
          "coinMaker": 0.005,
          "coinTaker": 0.024
        },
        {
          "tier": "VIP 14",
          "min": 800000000,
          "maker": 0.002,
          "taker": 0.022,
          "coinMaker": 0.002,
          "coinTaker": 0.022
        },
        {
          "tier": "VIP 15",
          "min": 1600000000,
          "maker": 0,
          "taker": 0.018,
          "coinMaker": 0,
          "coinTaker": 0.018
        },
        {
          "tier": "VIP 16",
          "min": 3000000000,
          "maker": 0,
          "taker": 0.016,
          "coinMaker": 0,
          "coinTaker": 0.016
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 1",
          "min": 2000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 2",
          "min": 4000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 3",
          "min": 10000,
          "maker": 0.02,
          "taker": 0.048,
          "coinMaker": 0.02,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 4",
          "min": 20000,
          "maker": 0.02,
          "taker": 0.048,
          "coinMaker": 0.02,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 5",
          "min": 40000,
          "maker": 0.02,
          "taker": 0.045,
          "coinMaker": 0.02,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 6",
          "min": 100000,
          "maker": 0.018,
          "taker": 0.042,
          "coinMaker": 0.018,
          "coinTaker": 0.042
        },
        {
          "tier": "VIP 7",
          "min": 200000,
          "maker": 0.016,
          "taker": 0.0375,
          "coinMaker": 0.016,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 8",
          "min": 400000,
          "maker": 0.014,
          "taker": 0.035,
          "coinMaker": 0.014,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 9",
          "min": 1000000,
          "maker": 0.012,
          "taker": 0.032,
          "coinMaker": 0.012,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 10",
          "min": 2000000,
          "maker": 0.01,
          "taker": 0.03,
          "coinMaker": 0.01,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 11",
          "min": 4000000,
          "maker": 0.008,
          "taker": 0.028,
          "coinMaker": 0.008,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 12",
          "min": 8000000,
          "maker": 0.006,
          "taker": 0.026,
          "coinMaker": 0.006,
          "coinTaker": 0.026
        },
        {
          "tier": "VIP 13",
          "min": 16000000,
          "maker": 0.005,
          "taker": 0.024,
          "coinMaker": 0.005,
          "coinTaker": 0.024
        },
        {
          "tier": "VIP 14",
          "min": 30000000,
          "maker": 0.002,
          "taker": 0.022,
          "coinMaker": 0.002,
          "coinTaker": 0.022
        },
        {
          "tier": "VIP 15",
          "min": 60000000,
          "maker": 0,
          "taker": 0.018,
          "coinMaker": 0,
          "coinTaker": 0.018
        },
        {
          "tier": "VIP 16",
          "min": 100000000,
          "maker": 0,
          "taker": 0.016,
          "coinMaker": 0,
          "coinTaker": 0.016
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
    "depositCurrency": "KCS",
    "referralUrl": "https://www.kucoin.com/r/FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
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
          "maker": 0.095,
          "taker": 0.1,
          "coinMaker": 0.076,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 2",
          "min": 3000000,
          "maker": 0.09,
          "taker": 0.1,
          "coinMaker": 0.072,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 3",
          "min": 6000000,
          "maker": 0.075,
          "taker": 0.09,
          "coinMaker": 0.06,
          "coinTaker": 0.072
        },
        {
          "tier": "VIP 4",
          "min": 18000000,
          "maker": 0.055,
          "taker": 0.075,
          "coinMaker": 0.044,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 5",
          "min": 55000000,
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
          "min": 180000000,
          "maker": 0.015,
          "taker": 0.042,
          "coinMaker": 0.012,
          "coinTaker": 0.0336
        },
        {
          "tier": "VIP 8",
          "min": 250000000,
          "maker": 0.01,
          "taker": 0.04,
          "coinMaker": 0.01,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 9",
          "min": 350000000,
          "maker": 0,
          "taker": 0.04,
          "coinMaker": 0,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 10",
          "min": 550000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.024
        },
        {
          "tier": "VIP 11",
          "min": 750000000,
          "maker": -0.003,
          "taker": 0.025,
          "coinMaker": -0.003,
          "coinTaker": 0.02
        },
        {
          "tier": "VIP 12",
          "min": 950000000,
          "maker": -0.005,
          "taker": 0.025,
          "coinMaker": -0.005,
          "coinTaker": 0.02
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
          "min": 1000,
          "maker": 0.095,
          "taker": 0.1,
          "coinMaker": 0.076,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 2",
          "min": 10000,
          "maker": 0.09,
          "taker": 0.1,
          "coinMaker": 0.072,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 3",
          "min": 20000,
          "maker": 0.075,
          "taker": 0.09,
          "coinMaker": 0.06,
          "coinTaker": 0.072
        },
        {
          "tier": "VIP 4",
          "min": 30000,
          "maker": 0.055,
          "taker": 0.075,
          "coinMaker": 0.044,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 5",
          "min": 40000,
          "maker": 0.035,
          "taker": 0.055,
          "coinMaker": 0.028,
          "coinTaker": 0.044
        },
        {
          "tier": "VIP 6",
          "min": 50000,
          "maker": 0.025,
          "taker": 0.045,
          "coinMaker": 0.02,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 7",
          "min": 60000,
          "maker": 0.015,
          "taker": 0.042,
          "coinMaker": 0.012,
          "coinTaker": 0.0336
        },
        {
          "tier": "VIP 8",
          "min": 70000,
          "maker": 0.01,
          "taker": 0.04,
          "coinMaker": 0.01,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 9",
          "min": 80000,
          "maker": 0,
          "taker": 0.04,
          "coinMaker": 0,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 10",
          "min": 90000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.024
        },
        {
          "tier": "VIP 11",
          "min": 100000,
          "maker": -0.003,
          "taker": 0.025,
          "coinMaker": -0.003,
          "coinTaker": 0.02
        },
        {
          "tier": "VIP 12",
          "min": 150000,
          "maker": -0.005,
          "taker": 0.025,
          "coinMaker": -0.005,
          "coinTaker": 0.02
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
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 5000000,
          "maker": 0.018,
          "taker": 0.06,
          "coinMaker": 0.018,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 8000000,
          "maker": 0.015,
          "taker": 0.06,
          "coinMaker": 0.015,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 3",
          "min": 16000000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 40000000,
          "maker": 0.008,
          "taker": 0.053,
          "coinMaker": 0.008,
          "coinTaker": 0.053
        },
        {
          "tier": "VIP 5",
          "min": 60000000,
          "maker": 0.006,
          "taker": 0.048,
          "coinMaker": 0.006,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 6",
          "min": 120000000,
          "maker": 0.004,
          "taker": 0.043,
          "coinMaker": 0.004,
          "coinTaker": 0.043
        },
        {
          "tier": "VIP 7",
          "min": 200000000,
          "maker": 0.002,
          "taker": 0.039,
          "coinMaker": 0.002,
          "coinTaker": 0.039
        },
        {
          "tier": "VIP 8",
          "min": 300000000,
          "maker": 0,
          "taker": 0.036,
          "coinMaker": 0,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 9",
          "min": 400000000,
          "maker": 0,
          "taker": 0.033,
          "coinMaker": 0,
          "coinTaker": 0.033
        },
        {
          "tier": "VIP 10",
          "min": 600000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 11",
          "min": 800000000,
          "maker": 0,
          "taker": 0.028,
          "coinMaker": 0,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 12",
          "min": 1000000000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.025
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 1000,
          "maker": 0.018,
          "taker": 0.06,
          "coinMaker": 0.018,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 10000,
          "maker": 0.015,
          "taker": 0.06,
          "coinMaker": 0.015,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 3",
          "min": 20000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 30000,
          "maker": 0.008,
          "taker": 0.053,
          "coinMaker": 0.008,
          "coinTaker": 0.053
        },
        {
          "tier": "VIP 5",
          "min": 40000,
          "maker": 0.006,
          "taker": 0.048,
          "coinMaker": 0.006,
          "coinTaker": 0.048
        },
        {
          "tier": "VIP 6",
          "min": 50000,
          "maker": 0.004,
          "taker": 0.043,
          "coinMaker": 0.004,
          "coinTaker": 0.043
        },
        {
          "tier": "VIP 7",
          "min": 60000,
          "maker": 0.002,
          "taker": 0.039,
          "coinMaker": 0.002,
          "coinTaker": 0.039
        },
        {
          "tier": "VIP 8",
          "min": 70000,
          "maker": 0,
          "taker": 0.036,
          "coinMaker": 0,
          "coinTaker": 0.036
        },
        {
          "tier": "VIP 9",
          "min": 80000,
          "maker": 0,
          "taker": 0.033,
          "coinMaker": 0,
          "coinTaker": 0.033
        },
        {
          "tier": "VIP 10",
          "min": 90000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 11",
          "min": 100000,
          "maker": 0,
          "taker": 0.028,
          "coinMaker": 0,
          "coinTaker": 0.028
        },
        {
          "tier": "VIP 12",
          "min": 150000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.025
        }
      ]
    },
    "depositUSDTRate": 7.884
  },
  {
    "id": "lbank",
    "name": "LBank",
    "color": "#ffba00",
    "nativeCoin": null,
    "coinDiscountRate": null,
    "referralUrl": "https://www.lbank.com/login/?icode=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 500000,
          "maker": 0.08,
          "taker": 0.08,
          "coinMaker": 0.08,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 2",
          "min": 2000000,
          "maker": 0.065,
          "taker": 0.07,
          "coinMaker": 0.065,
          "coinTaker": 0.07
        },
        {
          "tier": "VIP 3",
          "min": 8000000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.05,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 30000000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.04,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 5",
          "min": 50000000,
          "maker": 0.03,
          "taker": 0.04,
          "coinMaker": 0.03,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 6",
          "min": 75000000,
          "maker": 0.02,
          "taker": 0.035,
          "coinMaker": 0.02,
          "coinTaker": 0.035
        },
        {
          "tier": "SVIP",
          "min": 100000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.03
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 10000,
          "maker": 0.08,
          "taker": 0.08,
          "coinMaker": 0.08,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 2",
          "min": 50000,
          "maker": 0.065,
          "taker": 0.07,
          "coinMaker": 0.065,
          "coinTaker": 0.07
        },
        {
          "tier": "VIP 3",
          "min": 250000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.05,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 750000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.04,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 5",
          "min": 2000000,
          "maker": 0.03,
          "taker": 0.04,
          "coinMaker": 0.03,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.02,
          "taker": 0.035,
          "coinMaker": 0.02,
          "coinTaker": 0.035
        },
        {
          "tier": "SVIP",
          "min": 10000000,
          "maker": 0,
          "taker": 0.03,
          "coinMaker": 0,
          "coinTaker": 0.03
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
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 5000000,
          "maker": 0.019,
          "taker": 0.06,
          "coinMaker": 0.019,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 10000000,
          "maker": 0.016,
          "taker": 0.04,
          "coinMaker": 0.016,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 3",
          "min": 20000000,
          "maker": 0.014,
          "taker": 0.0375,
          "coinMaker": 0.014,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 4",
          "min": 50000000,
          "maker": 0.012,
          "taker": 0.035,
          "coinMaker": 0.012,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 5",
          "min": 100000000,
          "maker": 0.01,
          "taker": 0.032,
          "coinMaker": 0.01,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 6",
          "min": 300000000,
          "maker": 0.008,
          "taker": 0.03,
          "coinMaker": 0.008,
          "coinTaker": 0.03
        },
        {
          "tier": "SVIP",
          "min": 1000000000,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.02
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 10000,
          "maker": 0.019,
          "taker": 0.06,
          "coinMaker": 0.019,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 50000,
          "maker": 0.016,
          "taker": 0.04,
          "coinMaker": 0.016,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 3",
          "min": 250000,
          "maker": 0.014,
          "taker": 0.0375,
          "coinMaker": 0.014,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 4",
          "min": 750000,
          "maker": 0.012,
          "taker": 0.035,
          "coinMaker": 0.012,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 5",
          "min": 2000000,
          "maker": 0.01,
          "taker": 0.032,
          "coinMaker": 0.01,
          "coinTaker": 0.032
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.008,
          "taker": 0.03,
          "coinMaker": 0.008,
          "coinTaker": 0.03
        },
        {
          "tier": "SVIP",
          "min": 10000000,
          "maker": 0,
          "taker": 0.02,
          "coinMaker": 0,
          "coinTaker": 0.02
        }
      ]
    }
  },
  {
    "id": "bingx",
    "name": "BingX",
    "color": "#356ef2",
    "nativeCoin": null,
    "coinDiscountRate": null,
    "referralUrl": "https://bingx.com/invite/FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 1000000,
          "maker": 0.035,
          "taker": 0.06,
          "coinMaker": 0.035,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 2000000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 3",
          "min": 4000000,
          "maker": 0.015,
          "taker": 0.045,
          "coinMaker": 0.015,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 4",
          "min": 6000000,
          "maker": 0.0125,
          "taker": 0.0375,
          "coinMaker": 0.0125,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 5",
          "min": 8000000,
          "maker": 0.01,
          "taker": 0.0325,
          "coinMaker": 0.01,
          "coinTaker": 0.0325
        },
        {
          "tier": "Supreme VIP",
          "min": 15000000,
          "maker": 0.005,
          "taker": 0.02,
          "coinMaker": 0.005,
          "coinTaker": 0.02
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 50000,
          "maker": 0.035,
          "taker": 0.06,
          "coinMaker": 0.035,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 200000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 3",
          "min": 1000000,
          "maker": 0.015,
          "taker": 0.045,
          "coinMaker": 0.015,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 4",
          "min": 2000000,
          "maker": 0.0125,
          "taker": 0.0375,
          "coinMaker": 0.0125,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.01,
          "taker": 0.0325,
          "coinMaker": 0.01,
          "coinTaker": 0.0325
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
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 1",
          "min": 10000000,
          "maker": 0.014,
          "taker": 0.04,
          "coinMaker": 0.014,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 2",
          "min": 20000000,
          "maker": 0.012,
          "taker": 0.0375,
          "coinMaker": 0.012,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 3",
          "min": 50000000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.01,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 4",
          "min": 100000000,
          "maker": 0.008,
          "taker": 0.0315,
          "coinMaker": 0.008,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 5",
          "min": 200000000,
          "maker": 0.006,
          "taker": 0.03,
          "coinMaker": 0.006,
          "coinTaker": 0.03
        },
        {
          "tier": "Supreme VIP",
          "min": 500000000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.025
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 1",
          "min": 50000,
          "maker": 0.014,
          "taker": 0.04,
          "coinMaker": 0.014,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 2",
          "min": 200000,
          "maker": 0.012,
          "taker": 0.0375,
          "coinMaker": 0.012,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 3",
          "min": 1000000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.01,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 4",
          "min": 2000000,
          "maker": 0.008,
          "taker": 0.0315,
          "coinMaker": 0.008,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 5",
          "min": 3000000,
          "maker": 0.006,
          "taker": 0.03,
          "coinMaker": 0.006,
          "coinTaker": 0.03
        }
      ]
    }
  },
  {
    "id": "bitunix",
    "name": "Bitunix",
    "color": "#AAEE44",
    "nativeCoin": null,
    "coinDiscountRate": null,
    "referralUrl": "https://www.bitunix.com/register?inviteCode=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.08,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.07,
          "taker": 0.09,
          "coinMaker": 0.07,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 2",
          "min": 500000,
          "maker": 0.06,
          "taker": 0.08,
          "coinMaker": 0.06,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 3",
          "min": 800000,
          "maker": 0.035,
          "taker": 0.06,
          "coinMaker": 0.035,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 2000000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 5",
          "min": 4000000,
          "maker": 0.015,
          "taker": 0.045,
          "coinMaker": 0.015,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 6",
          "min": 6000000,
          "maker": 0.0125,
          "taker": 0.0375,
          "coinMaker": 0.0125,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 7",
          "min": 8000000,
          "maker": 0.01,
          "taker": 0.0325,
          "coinMaker": 0.01,
          "coinTaker": 0.0325
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.08,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 500,
          "maker": 0.07,
          "taker": 0.09,
          "coinMaker": 0.07,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 2",
          "min": 10000,
          "maker": 0.06,
          "taker": 0.08,
          "coinMaker": 0.06,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 3",
          "min": 50000,
          "maker": 0.035,
          "taker": 0.06,
          "coinMaker": 0.035,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 200000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 5",
          "min": 1000000,
          "maker": 0.015,
          "taker": 0.045,
          "coinMaker": 0.015,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 6",
          "min": 2000000,
          "maker": 0.0125,
          "taker": 0.0375,
          "coinMaker": 0.0125,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 7",
          "min": 3000000,
          "maker": 0.01,
          "taker": 0.0325,
          "coinMaker": 0.01,
          "coinTaker": 0.0325
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
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 1000000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 2",
          "min": 5000000,
          "maker": 0.016,
          "taker": 0.05,
          "coinMaker": 0.016,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 3",
          "min": 8000000,
          "maker": 0.014,
          "taker": 0.04,
          "coinMaker": 0.014,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 4",
          "min": 20000000,
          "maker": 0.012,
          "taker": 0.0375,
          "coinMaker": 0.012,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 5",
          "min": 50000000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.01,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 6",
          "min": 100000000,
          "maker": 0.008,
          "taker": 0.0315,
          "coinMaker": 0.008,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 7",
          "min": 200000000,
          "maker": 0.006,
          "taker": 0.03,
          "coinMaker": 0.006,
          "coinTaker": 0.03
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 500,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 2",
          "min": 10000,
          "maker": 0.016,
          "taker": 0.05,
          "coinMaker": 0.016,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 3",
          "min": 50000,
          "maker": 0.014,
          "taker": 0.04,
          "coinMaker": 0.014,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 4",
          "min": 200000,
          "maker": 0.012,
          "taker": 0.0375,
          "coinMaker": 0.012,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 5",
          "min": 1000000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.01,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 6",
          "min": 2000000,
          "maker": 0.008,
          "taker": 0.0315,
          "coinMaker": 0.008,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 7",
          "min": 3000000,
          "maker": 0.006,
          "taker": 0.03,
          "coinMaker": 0.006,
          "coinTaker": 0.03
        }
      ]
    }
  },
  {
    "id": "htx",
    "name": "HTX",
    "color": "#7B8FC4",
    "nativeCoin": "HT",
    "coinDiscountRate": 0.25,
    "referralUrl": "https://www.htx.com/en-us/v/register/?invite_code=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "spot": {
      "volumeBased": [
        {
          "tier": "Prime 0",
          "min": 0,
          "maker": 0.2,
          "taker": 0.2,
          "coinMaker": 0.15,
          "coinTaker": 0.15
        },
        {
          "tier": "Prime 1",
          "min": 30000,
          "maker": 0.16,
          "taker": 0.17,
          "coinMaker": 0.12,
          "coinTaker": 0.1275
        },
        {
          "tier": "Prime 2",
          "min": 120000,
          "maker": 0.14,
          "taker": 0.15,
          "coinMaker": 0.105,
          "coinTaker": 0.1125
        },
        {
          "tier": "Prime 3",
          "min": 600000,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.075,
          "coinTaker": 0.075
        },
        {
          "tier": "Prime 4",
          "min": 3000000,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.06,
          "coinTaker": 0.075
        },
        {
          "tier": "Prime 5",
          "min": 12000000,
          "maker": 0.06,
          "taker": 0.09,
          "coinMaker": 0.045,
          "coinTaker": 0.0675
        },
        {
          "tier": "Prime 6",
          "min": 40000000,
          "maker": 0.05,
          "taker": 0.07,
          "coinMaker": 0.0375,
          "coinTaker": 0.0525
        },
        {
          "tier": "Prime 7",
          "min": 80000000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.03,
          "coinTaker": 0.0375
        },
        {
          "tier": "Prime 8",
          "min": 160000000,
          "maker": 0.03,
          "taker": 0.035,
          "coinMaker": 0.0225,
          "coinTaker": 0.02625
        },
        {
          "tier": "Prime 9",
          "min": 300000000,
          "maker": 0.0224,
          "taker": 0.0318,
          "coinMaker": 0.0168,
          "coinTaker": 0.02385
        },
        {
          "tier": "Prime 10",
          "min": 900000000,
          "maker": 0.0168,
          "taker": 0.0268,
          "coinMaker": 0.0126,
          "coinTaker": 0.0201
        },
        {
          "tier": "Prime 11",
          "min": 1800000000,
          "maker": 0.0126,
          "taker": 0.0218,
          "coinMaker": 0.00945,
          "coinTaker": 0.01635
        }
      ],
      "depositBased": [
        {
          "tier": "Prime 0",
          "min": 0,
          "maker": 0.2,
          "taker": 0.2,
          "coinMaker": 0.15,
          "coinTaker": 0.15
        },
        {
          "tier": "Prime 1",
          "min": 5000,
          "maker": 0.16,
          "taker": 0.17,
          "coinMaker": 0.12,
          "coinTaker": 0.1275
        },
        {
          "tier": "Prime 2",
          "min": 20000,
          "maker": 0.14,
          "taker": 0.15,
          "coinMaker": 0.105,
          "coinTaker": 0.1125
        },
        {
          "tier": "Prime 3",
          "min": 60000,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.075,
          "coinTaker": 0.075
        },
        {
          "tier": "Prime 4",
          "min": 100000,
          "maker": 0.08,
          "taker": 0.1,
          "coinMaker": 0.06,
          "coinTaker": 0.075
        },
        {
          "tier": "Prime 5",
          "min": 150000,
          "maker": 0.06,
          "taker": 0.09,
          "coinMaker": 0.045,
          "coinTaker": 0.0675
        },
        {
          "tier": "Prime 6",
          "min": 300000,
          "maker": 0.05,
          "taker": 0.07,
          "coinMaker": 0.0375,
          "coinTaker": 0.0525
        },
        {
          "tier": "Prime 7",
          "min": 600000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.03,
          "coinTaker": 0.0375
        },
        {
          "tier": "Prime 8",
          "min": 1200000,
          "maker": 0.03,
          "taker": 0.035,
          "coinMaker": 0.0225,
          "coinTaker": 0.02625
        },
        {
          "tier": "Prime 9",
          "min": 3000000,
          "maker": 0.0224,
          "taker": 0.0318,
          "coinMaker": 0.0168,
          "coinTaker": 0.02385
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "Prime 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.019,
          "coinTaker": 0.057
        },
        {
          "tier": "Prime 1",
          "min": 300000,
          "maker": 0.018,
          "taker": 0.055,
          "coinMaker": 0.0171,
          "coinTaker": 0.05225
        },
        {
          "tier": "Prime 2",
          "min": 5000000,
          "maker": 0.016,
          "taker": 0.05,
          "coinMaker": 0.0152,
          "coinTaker": 0.0475
        },
        {
          "tier": "Prime 3",
          "min": 10000000,
          "maker": 0.014,
          "taker": 0.045,
          "coinMaker": 0.0133,
          "coinTaker": 0.04275
        },
        {
          "tier": "Prime 4",
          "min": 20000000,
          "maker": 0.012,
          "taker": 0.04,
          "coinMaker": 0.0108,
          "coinTaker": 0.036
        },
        {
          "tier": "Prime 5",
          "min": 100000000,
          "maker": 0.01,
          "taker": 0.038,
          "coinMaker": 0.009,
          "coinTaker": 0.0342
        },
        {
          "tier": "Prime 6",
          "min": 300000000,
          "maker": 0.006,
          "taker": 0.035,
          "coinMaker": 0.0054,
          "coinTaker": 0.0315
        },
        {
          "tier": "Prime 7",
          "min": 500000000,
          "maker": 0.004,
          "taker": 0.032,
          "coinMaker": 0.0036,
          "coinTaker": 0.0288
        },
        {
          "tier": "Prime 8",
          "min": 600000000,
          "maker": 0.002,
          "taker": 0.03,
          "coinMaker": 0.0018,
          "coinTaker": 0.027
        },
        {
          "tier": "Prime 9",
          "min": 700000000,
          "maker": 0.001,
          "taker": 0.028,
          "coinMaker": 0.0009,
          "coinTaker": 0.0252
        },
        {
          "tier": "Prime 10",
          "min": 1000000000,
          "maker": 0.0005,
          "taker": 0.0265,
          "coinMaker": 0.00045,
          "coinTaker": 0.02385
        },
        {
          "tier": "Prime 11",
          "min": 1500000000,
          "maker": 0,
          "taker": 0.025,
          "coinMaker": 0,
          "coinTaker": 0.0225
        }
      ],
      "depositBased": [
        {
          "tier": "Prime 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.019,
          "coinTaker": 0.057
        },
        {
          "tier": "Prime 1",
          "min": 5000,
          "maker": 0.018,
          "taker": 0.055,
          "coinMaker": 0.0171,
          "coinTaker": 0.05225
        },
        {
          "tier": "Prime 2",
          "min": 20000,
          "maker": 0.016,
          "taker": 0.05,
          "coinMaker": 0.0152,
          "coinTaker": 0.0475
        },
        {
          "tier": "Prime 3",
          "min": 60000,
          "maker": 0.014,
          "taker": 0.045,
          "coinMaker": 0.0133,
          "coinTaker": 0.04275
        },
        {
          "tier": "Prime 4",
          "min": 100000,
          "maker": 0.012,
          "taker": 0.04,
          "coinMaker": 0.0108,
          "coinTaker": 0.036
        },
        {
          "tier": "Prime 5",
          "min": 150000,
          "maker": 0.01,
          "taker": 0.038,
          "coinMaker": 0.009,
          "coinTaker": 0.0342
        },
        {
          "tier": "Prime 6",
          "min": 300000,
          "maker": 0.006,
          "taker": 0.035,
          "coinMaker": 0.0054,
          "coinTaker": 0.0315
        },
        {
          "tier": "Prime 7",
          "min": 600000,
          "maker": 0.004,
          "taker": 0.032,
          "coinMaker": 0.0036,
          "coinTaker": 0.0288
        },
        {
          "tier": "Prime 8",
          "min": 1200000,
          "maker": 0.002,
          "taker": 0.03,
          "coinMaker": 0.0018,
          "coinTaker": 0.027
        },
        {
          "tier": "Prime 9",
          "min": 3000000,
          "maker": 0.001,
          "taker": 0.028,
          "coinMaker": 0.0009,
          "coinTaker": 0.0252
        }
      ]
    }
  },
  {
    "id": "bitmart",
    "name": "Bitmart",
    "color": "#0BC4CE",
    "nativeCoin": "BMX",
    "coinDiscountRate": 0.25,
    "referralUrl": "https://www.bitmart.com/register-invite/en?r=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 200000,
          "maker": 0.09,
          "taker": 0.095,
          "coinMaker": 0.09,
          "coinTaker": 0.095
        },
        {
          "tier": "VIP 2",
          "min": 500000,
          "maker": 0.08,
          "taker": 0.085,
          "coinMaker": 0.08,
          "coinTaker": 0.085
        },
        {
          "tier": "VIP 3",
          "min": 1000000,
          "maker": 0.07,
          "taker": 0.075,
          "coinMaker": 0.07,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 4",
          "min": 2000000,
          "maker": 0.05,
          "taker": 0.055,
          "coinMaker": 0.05,
          "coinTaker": 0.055
        },
        {
          "tier": "VIP 5",
          "min": 5000000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.04,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 6",
          "min": 10000000,
          "maker": 0.03,
          "taker": 0.04,
          "coinMaker": 0.03,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 7",
          "min": 20000000,
          "maker": 0.02,
          "taker": 0.025,
          "coinMaker": 0.02,
          "coinTaker": 0.025
        },
        {
          "tier": "VIP 8",
          "min": 50000000,
          "maker": 0.015,
          "taker": 0.02,
          "coinMaker": 0.015,
          "coinTaker": 0.02
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 10000,
          "maker": 0.09,
          "taker": 0.095,
          "coinMaker": 0.09,
          "coinTaker": 0.095
        },
        {
          "tier": "VIP 2",
          "min": 20000,
          "maker": 0.08,
          "taker": 0.085,
          "coinMaker": 0.08,
          "coinTaker": 0.085
        },
        {
          "tier": "VIP 3",
          "min": 50000,
          "maker": 0.07,
          "taker": 0.075,
          "coinMaker": 0.07,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 4",
          "min": 100000,
          "maker": 0.05,
          "taker": 0.055,
          "coinMaker": 0.05,
          "coinTaker": 0.055
        },
        {
          "tier": "VIP 5",
          "min": 200000,
          "maker": 0.04,
          "taker": 0.05,
          "coinMaker": 0.04,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 6",
          "min": 500000,
          "maker": 0.03,
          "taker": 0.04,
          "coinMaker": 0.03,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 7",
          "min": 2000000,
          "maker": 0.02,
          "taker": 0.025,
          "coinMaker": 0.02,
          "coinTaker": 0.025
        },
        {
          "tier": "VIP 8",
          "min": 5000000,
          "maker": 0.015,
          "taker": 0.02,
          "coinMaker": 0.015,
          "coinTaker": 0.02
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
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 20000000,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 50000000,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 3",
          "min": 100000000,
          "maker": 0.018,
          "taker": 0.05,
          "coinMaker": 0.018,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 4",
          "min": 150000000,
          "maker": 0.018,
          "taker": 0.05,
          "coinMaker": 0.018,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 5",
          "min": 200000000,
          "maker": 0.018,
          "taker": 0.05,
          "coinMaker": 0.018,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 6",
          "min": 300000000,
          "maker": 0.016,
          "taker": 0.04,
          "coinMaker": 0.016,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 7",
          "min": 500000000,
          "maker": 0.014,
          "taker": 0.03,
          "coinMaker": 0.014,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 8",
          "min": 1000000000,
          "maker": 0.014,
          "taker": 0.03,
          "coinMaker": 0.014,
          "coinTaker": 0.03
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 10000,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 20000,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 3",
          "min": 50000,
          "maker": 0.018,
          "taker": 0.05,
          "coinMaker": 0.018,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 4",
          "min": 100000,
          "maker": 0.018,
          "taker": 0.05,
          "coinMaker": 0.018,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 5",
          "min": 200000,
          "maker": 0.018,
          "taker": 0.05,
          "coinMaker": 0.018,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 6",
          "min": 500000,
          "maker": 0.016,
          "taker": 0.04,
          "coinMaker": 0.016,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 7",
          "min": 2000000,
          "maker": 0.014,
          "taker": 0.03,
          "coinMaker": 0.014,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 8",
          "min": 5000000,
          "maker": 0.014,
          "taker": 0.03,
          "coinMaker": 0.014,
          "coinTaker": 0.03
        }
      ]
    }
  },
  {
    "id": "coinw",
    "name": "CoinW",
    "color": "#9B5CF5",
    "nativeCoin": "CWT",
    "coinDiscountRate": 0.2,
    "referralUrl": "https://www.coinw.com/front/invitePublicity?r=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.09,
          "taker": 0.095,
          "coinMaker": 0.09,
          "coinTaker": 0.095
        },
        {
          "tier": "VIP 2",
          "min": 250000,
          "maker": 0.08,
          "taker": 0.085,
          "coinMaker": 0.08,
          "coinTaker": 0.085
        },
        {
          "tier": "VIP 3",
          "min": 850000,
          "maker": 0.07,
          "taker": 0.075,
          "coinMaker": 0.07,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 4",
          "min": 1500000,
          "maker": 0.06,
          "taker": 0.065,
          "coinMaker": 0.06,
          "coinTaker": 0.065
        },
        {
          "tier": "VIP 5",
          "min": 3500000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.05,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 6",
          "min": 8000000,
          "maker": 0.04,
          "taker": 0.055,
          "coinMaker": 0.04,
          "coinTaker": 0.055
        },
        {
          "tier": "VIP 7",
          "min": 15000000,
          "maker": 0.03,
          "taker": 0.05,
          "coinMaker": 0.03,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 8",
          "min": 30000000,
          "maker": 0.025,
          "taker": 0.03,
          "coinMaker": 0.025,
          "coinTaker": 0.03
        },
        {
          "tier": "VIP 9",
          "min": 60000000,
          "maker": 0.02,
          "taker": 0.03,
          "coinMaker": 0.02,
          "coinTaker": 0.03
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 10000,
          "maker": 0.09,
          "taker": 0.095,
          "coinMaker": 0.09,
          "coinTaker": 0.095
        },
        {
          "tier": "VIP 2",
          "min": 25000,
          "maker": 0.08,
          "taker": 0.085,
          "coinMaker": 0.08,
          "coinTaker": 0.085
        },
        {
          "tier": "VIP 3",
          "min": 50000,
          "maker": 0.07,
          "taker": 0.075,
          "coinMaker": 0.07,
          "coinTaker": 0.075
        },
        {
          "tier": "VIP 4",
          "min": 150000,
          "maker": 0.06,
          "taker": 0.065,
          "coinMaker": 0.06,
          "coinTaker": 0.065
        },
        {
          "tier": "VIP 5",
          "min": 300000,
          "maker": 0.05,
          "taker": 0.06,
          "coinMaker": 0.05,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 6",
          "min": 500000,
          "maker": 0.04,
          "taker": 0.055,
          "coinMaker": 0.04,
          "coinTaker": 0.055
        },
        {
          "tier": "VIP 7",
          "min": 1200000,
          "maker": 0.03,
          "taker": 0.05,
          "coinMaker": 0.03,
          "coinTaker": 0.05
        }
      ]
    },
    "futures": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 250000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 3",
          "min": 850000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 1500000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 5",
          "min": 3500000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 6",
          "min": 8000000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 7",
          "min": 15000000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 8",
          "min": 30000000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 9",
          "min": 60000000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 10000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 2",
          "min": 25000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 3",
          "min": 50000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 150000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 5",
          "min": 300000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 6",
          "min": 500000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 7",
          "min": 1200000,
          "maker": 0.01,
          "taker": 0.06,
          "coinMaker": 0.01,
          "coinTaker": 0.06
        }
      ]
    }
  },
  {
    "id": "toobit",
    "name": "Toobit",
    "color": "#1e7fff",
    "nativeCoin": null,
    "coinDiscountRate": null,
    "referralUrl": "https://www.toobit.com/register?invite_code=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.075,
          "taker": 0.1,
          "coinMaker": 0.075,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 100000,
          "maker": 0.07,
          "taker": 0.09,
          "coinMaker": 0.07,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 2",
          "min": 500000,
          "maker": 0.06,
          "taker": 0.08,
          "coinMaker": 0.06,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 3",
          "min": 1000000,
          "maker": 0.035,
          "taker": 0.06,
          "coinMaker": 0.035,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 5000000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 5",
          "min": 20000000,
          "maker": 0.015,
          "taker": 0.045,
          "coinMaker": 0.015,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 6",
          "min": 30000000,
          "maker": 0.0125,
          "taker": 0.0375,
          "coinMaker": 0.0125,
          "coinTaker": 0.0375
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.075,
          "taker": 0.1,
          "coinMaker": 0.075,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 1",
          "min": 500,
          "maker": 0.07,
          "taker": 0.09,
          "coinMaker": 0.07,
          "coinTaker": 0.09
        },
        {
          "tier": "VIP 2",
          "min": 50000,
          "maker": 0.06,
          "taker": 0.08,
          "coinMaker": 0.06,
          "coinTaker": 0.08
        },
        {
          "tier": "VIP 3",
          "min": 200000,
          "maker": 0.035,
          "taker": 0.06,
          "coinMaker": 0.035,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 5",
          "min": 2000000,
          "maker": 0.015,
          "taker": 0.045,
          "coinMaker": 0.015,
          "coinTaker": 0.045
        },
        {
          "tier": "VIP 6",
          "min": 3000000,
          "maker": 0.0125,
          "taker": 0.0375,
          "coinMaker": 0.0125,
          "coinTaker": 0.0375
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
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 3000000,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 2",
          "min": 8000000,
          "maker": 0.014,
          "taker": 0.04,
          "coinMaker": 0.014,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 3",
          "min": 25000000,
          "maker": 0.012,
          "taker": 0.0375,
          "coinMaker": 0.012,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 4",
          "min": 100000000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.01,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 5",
          "min": 300000000,
          "maker": 0.008,
          "taker": 0.0315,
          "coinMaker": 0.008,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 6",
          "min": 500000000,
          "maker": 0.006,
          "taker": 0.03,
          "coinMaker": 0.006,
          "coinTaker": 0.03
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 500,
          "maker": 0.02,
          "taker": 0.05,
          "coinMaker": 0.02,
          "coinTaker": 0.05
        },
        {
          "tier": "VIP 2",
          "min": 50000,
          "maker": 0.014,
          "taker": 0.04,
          "coinMaker": 0.014,
          "coinTaker": 0.04
        },
        {
          "tier": "VIP 3",
          "min": 200000,
          "maker": 0.012,
          "taker": 0.0375,
          "coinMaker": 0.012,
          "coinTaker": 0.0375
        },
        {
          "tier": "VIP 4",
          "min": 1000000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.01,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 5",
          "min": 2000000,
          "maker": 0.008,
          "taker": 0.0315,
          "coinMaker": 0.008,
          "coinTaker": 0.0315
        },
        {
          "tier": "VIP 6",
          "min": 3000000,
          "maker": 0.006,
          "taker": 0.03,
          "coinMaker": 0.006,
          "coinTaker": 0.03
        }
      ]
    }
  },
  {
    "id": "xt",
    "name": "XT.com",
    "color": "#72C350",
    "nativeCoin": "XT",
    "coinDiscountRate": 0.2,
    "referralUrl": "https://www.xt.com/accounts/register?ref=FEERADAR",
    "rebate": {
      "spot": 0.2,
      "futures": 0.2
    },
    "active": true,
    "spot": {
      "volumeBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.2,
          "taker": 0.2,
          "coinMaker": 0.2,
          "coinTaker": 0.2
        },
        {
          "tier": "VIP 1",
          "min": 20000,
          "maker": 0.16,
          "taker": 0.16,
          "coinMaker": 0.16,
          "coinTaker": 0.16
        },
        {
          "tier": "VIP 2",
          "min": 100000,
          "maker": 0.15,
          "taker": 0.15,
          "coinMaker": 0.15,
          "coinTaker": 0.15
        },
        {
          "tier": "VIP 3",
          "min": 250000,
          "maker": 0.12,
          "taker": 0.12,
          "coinMaker": 0.12,
          "coinTaker": 0.12
        },
        {
          "tier": "VIP 4",
          "min": 500000,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 5",
          "min": 1000000,
          "maker": 0.07,
          "taker": 0.07,
          "coinMaker": 0.07,
          "coinTaker": 0.07
        },
        {
          "tier": "VIP 6",
          "min": 5000000,
          "maker": 0.06,
          "taker": 0.06,
          "coinMaker": 0.06,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 7",
          "min": 10000000,
          "maker": 0.04,
          "taker": 0.04,
          "coinMaker": 0.04,
          "coinTaker": 0.04
        },
        {
          "tier": "Premium VIP",
          "min": 30000000,
          "maker": 0.02,
          "taker": 0.02,
          "coinMaker": 0.02,
          "coinTaker": 0.02
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.2,
          "taker": 0.2,
          "coinMaker": 0.2,
          "coinTaker": 0.2
        },
        {
          "tier": "VIP 1",
          "min": 30000,
          "maker": 0.16,
          "taker": 0.16,
          "coinMaker": 0.16,
          "coinTaker": 0.16
        },
        {
          "tier": "VIP 2",
          "min": 50000,
          "maker": 0.15,
          "taker": 0.15,
          "coinMaker": 0.15,
          "coinTaker": 0.15
        },
        {
          "tier": "VIP 3",
          "min": 100000,
          "maker": 0.12,
          "taker": 0.12,
          "coinMaker": 0.12,
          "coinTaker": 0.12
        },
        {
          "tier": "VIP 4",
          "min": 200000,
          "maker": 0.1,
          "taker": 0.1,
          "coinMaker": 0.1,
          "coinTaker": 0.1
        },
        {
          "tier": "VIP 5",
          "min": 500000,
          "maker": 0.07,
          "taker": 0.07,
          "coinMaker": 0.07,
          "coinTaker": 0.07
        },
        {
          "tier": "VIP 6",
          "min": 1000000,
          "maker": 0.06,
          "taker": 0.06,
          "coinMaker": 0.06,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 7",
          "min": 2000000,
          "maker": 0.04,
          "taker": 0.04,
          "coinMaker": 0.04,
          "coinTaker": 0.04
        },
        {
          "tier": "Premium VIP",
          "min": 5000000,
          "maker": 0.02,
          "taker": 0.02,
          "coinMaker": 0.02,
          "coinTaker": 0.02
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
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 200000,
          "maker": 0.018,
          "taker": 0.054,
          "coinMaker": 0.018,
          "coinTaker": 0.054
        },
        {
          "tier": "VIP 2",
          "min": 1000000,
          "maker": 0.015,
          "taker": 0.046,
          "coinMaker": 0.015,
          "coinTaker": 0.046
        },
        {
          "tier": "VIP 3",
          "min": 8000000,
          "maker": 0.013,
          "taker": 0.041,
          "coinMaker": 0.013,
          "coinTaker": 0.041
        },
        {
          "tier": "VIP 4",
          "min": 15000000,
          "maker": 0.012,
          "taker": 0.037,
          "coinMaker": 0.012,
          "coinTaker": 0.037
        },
        {
          "tier": "VIP 5",
          "min": 35000000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.01,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 6",
          "min": 85000000,
          "maker": 0.006,
          "taker": 0.033,
          "coinMaker": 0.006,
          "coinTaker": 0.033
        },
        {
          "tier": "VIP 7",
          "min": 150000000,
          "maker": 0.004,
          "taker": 0.03,
          "coinMaker": 0.004,
          "coinTaker": 0.03
        },
        {
          "tier": "Premium VIP",
          "min": 300000000,
          "maker": 0.0018,
          "taker": 0.024,
          "coinMaker": 0.0018,
          "coinTaker": 0.024
        }
      ],
      "depositBased": [
        {
          "tier": "VIP 0",
          "min": 0,
          "maker": 0.02,
          "taker": 0.06,
          "coinMaker": 0.02,
          "coinTaker": 0.06
        },
        {
          "tier": "VIP 1",
          "min": 30000,
          "maker": 0.018,
          "taker": 0.054,
          "coinMaker": 0.018,
          "coinTaker": 0.054
        },
        {
          "tier": "VIP 2",
          "min": 50000,
          "maker": 0.015,
          "taker": 0.046,
          "coinMaker": 0.015,
          "coinTaker": 0.046
        },
        {
          "tier": "VIP 3",
          "min": 100000,
          "maker": 0.013,
          "taker": 0.041,
          "coinMaker": 0.013,
          "coinTaker": 0.041
        },
        {
          "tier": "VIP 4",
          "min": 200000,
          "maker": 0.012,
          "taker": 0.037,
          "coinMaker": 0.012,
          "coinTaker": 0.037
        },
        {
          "tier": "VIP 5",
          "min": 500000,
          "maker": 0.01,
          "taker": 0.035,
          "coinMaker": 0.01,
          "coinTaker": 0.035
        },
        {
          "tier": "VIP 6",
          "min": 1000000,
          "maker": 0.006,
          "taker": 0.033,
          "coinMaker": 0.006,
          "coinTaker": 0.033
        },
        {
          "tier": "VIP 7",
          "min": 2000000,
          "maker": 0.004,
          "taker": 0.03,
          "coinMaker": 0.004,
          "coinTaker": 0.03
        },
        {
          "tier": "Premium VIP",
          "min": 5000000,
          "maker": 0.0018,
          "taker": 0.024,
          "coinMaker": 0.0018,
          "coinTaker": 0.024
        }
      ]
    }
  }
];
