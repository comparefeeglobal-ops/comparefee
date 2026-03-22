/**
 * CompareFee - Fee Calculator Utility
 */

/**
 * Find the matching VIP tier for a given user value
 * @param {Array} tiers - sorted tier array
 * @param {number} userValue - user's volume or deposit value
 * @returns {object} { tierIndex, tier }
 */
export function findUserTier(tiers, userValue) {
  let matchedIndex = 0;
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (userValue >= tiers[i].min) {
      matchedIndex = i;
      break;
    }
  }
  return { tierIndex: matchedIndex, tier: tiers[matchedIndex] };
}

/**
 * Calculate effective fees after optional discounts
 * @param {object} tier - the VIP tier data
 * @param {object} options - { coinDiscount: bool, rebateRate: number }
 * @returns {object} { maker, taker, baseMaker, baseTaker }
 */
export function calculateFees(tier, options = {}) {
  const { coinDiscount = false, rebateRate = 0 } = options;

  const hasCoinFields = 'coinMaker' in tier && tier.coinMaker !== null;

  let maker, taker;
  if (coinDiscount && hasCoinFields) {
    maker = tier.coinMaker;
    taker = tier.coinTaker;
  } else {
    maker = tier.maker;
    taker = tier.taker;
  }

  const baseMaker = maker;
  const baseTaker = taker;

  if (rebateRate > 0) {
    // Do not apply rebate to negative fees — negative means
    // the exchange pays the user, so discounting would reduce their benefit
    if (maker > 0) maker = maker * (1 - rebateRate);
    if (taker > 0) taker = taker * (1 - rebateRate);
  }

  return {
    maker: roundFee(maker),
    taker: roundFee(taker),
    baseMaker: roundFee(baseMaker),
    baseTaker: roundFee(baseTaker),
  };
}

/**
 * Round fee to 4 decimal places
 */
function roundFee(fee) {
  return Math.round(fee * 10000) / 10000;
}

/**
 * Format fee as percentage string
 * @param {number} fee - fee in percentage (e.g., 0.1 = 0.1%)
 * @returns {string}
 */
export function formatFee(fee) {
  if (fee === 0) return '0%';
  if (fee < 0) return fee.toFixed(4) + '%';
  return fee.toFixed(4) + '%';
}

/**
 * Format dollar value for display
 */
export function formatUSD(value) {
  if (value >= 1_000_000_000) return '$' + (value / 1_000_000_000).toFixed(1) + 'B';
  if (value >= 1_000_000) return '$' + (value / 1_000_000).toFixed(1) + 'M';
  if (value >= 1_000) return '$' + (value / 1_000).toFixed(1) + 'K';
  return '$' + value.toFixed(0);
}

/**
 * Convert a linear slider position (0-1) to a log-scale value
 * Range: $100 to $10,000,000,000
 */
export function sliderToValue(position) {
  const minLog = Math.log10(100);       // 2
  const maxLog = Math.log10(10_000_000_000); // 10
  const logValue = minLog + position * (maxLog - minLog);
  return Math.pow(10, logValue);
}

/**
 * Convert a value to slider position (0-1)
 */
export function valueToSlider(value) {
  const minLog = Math.log10(100);
  const maxLog = Math.log10(10_000_000_000);
  const logValue = Math.log10(Math.max(100, value));
  return (logValue - minLog) / (maxLog - minLog);
}

/**
 * Convert a value to Y-axis pixel position (log scale)
 */
export function valueToY(value, chartHeight) {
  const minLog = Math.log10(100);
  const maxLog = Math.log10(10_000_000_000);
  const logValue = Math.log10(Math.max(100, value));
  const ratio = (logValue - minLog) / (maxLog - minLog);
  // Invert: higher values at top
  return chartHeight * (1 - ratio);
}

/**
 * Get Y position for a dollar value on the chart
 */
export function getYPosition(value, chartHeight) {
  return valueToY(value, chartHeight);
}
