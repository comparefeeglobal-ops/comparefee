/**
 * CompareFee - Main Application
 */
import './style.css';
import { exchanges } from './data/exchangeData.js';
import {
  findUserTier,
  calculateFees,
  formatFee,
  formatUSD,
  sliderToValue,
  valueToSlider,
  valueToY,
} from './utils/feeCalculator.js';
import { t, setLanguage, initI18n } from './i18n/index.js';

// ============================================
// State
// ============================================
const state = {
  market: 'futures',       // 'spot' | 'futures'
  criteria: 'volume',   // 'volume' | 'deposit'
  userValue: 1_000_000, // user's input value
  coinDiscount: false,
  rebateEnabled: false,
};

// ============================================
// DOM References
// ============================================
const els = {
  marketToggle: document.getElementById('marketToggle'),
  criteriaToggle: document.getElementById('criteriaToggle'),
  slider: document.getElementById('valueSlider'),
  sliderFill: document.getElementById('sliderFill'),
  sliderTicks: document.getElementById('sliderTicks'),
  sliderLabel: document.getElementById('sliderLabel'),
  valueInput: document.getElementById('valueInput'),
  coinDiscountCheck: document.getElementById('coinDiscountCheck'),
  rebateCheck: document.getElementById('rebateCheck'),
  chartArea: document.getElementById('chartArea'),
  chartMarker: document.getElementById('chartMarker'),
  markerLabel: document.getElementById('markerLabel'),
  yAxis: document.getElementById('yAxis'),
  resultsInner: document.getElementById('resultsInner'),
  chartContainer: document.getElementById('chartContainer'),
  langSelect: document.getElementById('langSelect'),
};

// ============================================
// Initialization
// ============================================
function init() {
  setupToggles();
  setupSlider();
  setupSwitches();
  setupSliderTicks();
  setupYAxis();
  setupLangSelect();
  initI18n(() => {
    updateSliderLabel();
    render();
  });
}

// ============================================
// Toggle Setup
// ============================================
function setupToggles() {
  els.marketToggle.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-btn');
    if (!btn) return;
    state.market = btn.dataset.value;
    updateToggleUI(els.marketToggle, state.market);
    render();
  });

  els.criteriaToggle.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-btn');
    if (!btn) return;
    state.criteria = btn.dataset.value;
    updateToggleUI(els.criteriaToggle, state.criteria);
    updateSliderLabel();
    render();
  });
}

function updateToggleUI(container, activeValue) {
  container.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.classList.toggle('toggle-btn--active', btn.dataset.value === activeValue);
  });
}

// ============================================
// Slider Setup
// ============================================
function setupSlider() {
  els.slider.addEventListener('input', () => {
    const position = els.slider.value / 1000;
    state.userValue = sliderToValue(position);
    syncInputFromValue();
    updateSliderFill();
    render();
  });

  els.valueInput.addEventListener('input', (e) => {
    const raw = e.target.value.replace(/[^0-9.]/g, '');
    const num = parseFloat(raw);
    if (!isNaN(num) && num >= 0) {
      state.userValue = num;
      syncSliderFromValue();
      render();
    }
  });

  els.valueInput.addEventListener('blur', () => {
    syncInputFromValue();
  });

  // Initialize
  syncSliderFromValue();
  updateSliderFill();
}

function syncInputFromValue() {
  const v = Math.round(state.userValue);
  els.valueInput.value = v.toLocaleString('en-US');
}

function syncSliderFromValue() {
  const pos = valueToSlider(state.userValue);
  els.slider.value = Math.round(pos * 1000);
  updateSliderFill();
}

function updateSliderFill() {
  const pct = (els.slider.value / 1000) * 100;
  els.sliderFill.style.width = pct + '%';
}

function updateSliderLabel() {
  els.sliderLabel.textContent = state.criteria === 'volume' 
    ? t('sliderLabelVolume') 
    : t('sliderLabelDeposit');
}

// ============================================
// Language Selector
// ============================================
function setupLangSelect() {
  els.langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value, () => {
      updateSliderLabel();
      render();
    });
  });
}

// ============================================
// Slider Ticks
// ============================================
function setupSliderTicks() {
  const ticks = [100, 1000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000, 1_000_000_000, 10_000_000_000];
  const html = ticks.map(v => {
    return `<div class="slider-tick">
      <div class="slider-tick__mark"></div>
      <div class="slider-tick__label">${formatUSD(v)}</div>
    </div>`;
  }).join('');
  els.sliderTicks.innerHTML = html;
}

// ============================================
// Switch Setup
// ============================================
function setupSwitches() {
  els.coinDiscountCheck.addEventListener('change', () => {
    state.coinDiscount = els.coinDiscountCheck.checked;
    render();
  });

  els.rebateCheck.addEventListener('change', () => {
    state.rebateEnabled = els.rebateCheck.checked;
    render();
  });
}

// ============================================
// Y-Axis Labels
// ============================================
function setupYAxis() {
  renderYAxis();
}

function renderYAxis() {
  const chartHeight = els.chartArea.offsetHeight || 480;
  const ticks = [100, 1000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000, 1_000_000_000, 10_000_000_000];
  
  let html = '';
  ticks.forEach(v => {
    const y = valueToY(v, chartHeight);
    html += `<div class="y-label" style="top:${y}px">${formatUSD(v)}</div>`;
  });
  els.yAxis.innerHTML = html;

  // Gridlines
  const existingGridlines = els.chartArea.querySelectorAll('.chart__gridline');
  existingGridlines.forEach(el => el.remove());
  
  ticks.forEach(v => {
    const y = valueToY(v, chartHeight);
    const line = document.createElement('div');
    line.className = 'chart__gridline';
    line.style.top = y + 'px';
    els.chartArea.appendChild(line);
  });
}

// ============================================
// Main Render
// ============================================
function render() {
  const chartHeight = els.chartArea.offsetHeight || 480;
  const activeExchanges = exchanges.filter(ex => ex.active);

  // Get data for current market + criteria
  const results = activeExchanges.map(ex => {
    const marketData = ex[state.market]; // spot or futures
    const tierData = marketData[state.criteria === 'volume' ? 'volumeBased' : 'depositBased'];

    // Check if this criteria exists for this exchange
    if (!tierData || tierData.length === 0) {
      return { exchange: ex, disabled: true, tiers: [], matchedTier: null, fees: null };
    }

    const { tierIndex, tier } = findUserTier(tierData, state.userValue);
    
    const rebateRate = state.rebateEnabled ? ex.rebate[state.market] : 0;
    const fees = calculateFees(tier, {
      coinDiscount: state.coinDiscount,
      rebateRate,
    });

    // Base fees (no discount, no rebate) for comparison
    const baseFees = calculateFees(tier, { coinDiscount: false, rebateRate: 0 });

    return {
      exchange: ex,
      disabled: false,
      tiers: tierData,
      matchedTierIndex: tierIndex,
      matchedTier: tier,
      fees,
      baseFees,
      hasCoinDiscount: ex.nativeCoin !== null,
    };
  });

  renderChart(results, chartHeight);
  renderMarker(chartHeight);
  renderCards(results);
}

// ============================================
// Chart Rendering
// ============================================
function renderChart(results, chartHeight) {
  // Reuse existing column nodes — only create them on first render
  const existingCols = els.chartArea.querySelectorAll('.exchange-column');
  const needsCreate = existingCols.length !== results.length;

  results.forEach(({ exchange, disabled, tiers, matchedTierIndex }, colIdx) => {
    let col = existingCols[colIdx];
    let tiersContainer;

    if (needsCreate || !col) {
      col = document.createElement('div');
      col.className = 'exchange-column';
      const label = document.createElement('div');
      label.className = 'exchange-column__label';
      label.innerHTML = `<span class="exchange-column__name" style="color:${exchange.color}">${exchange.name}</span>`;
      col.appendChild(label);
      tiersContainer = document.createElement('div');
      tiersContainer.className = 'exchange-column__tiers';
      col.appendChild(tiersContainer);
      els.chartArea.appendChild(col);
    } else {
      tiersContainer = col.querySelector('.exchange-column__tiers');
    }

    col.classList.toggle('exchange-column--disabled', disabled);

    // Rebuild tier blocks (fast — these are the things that actually change)
    tiersContainer.innerHTML = '';

    if (!disabled && tiers.length > 0) {
      tiers.forEach((tier, i) => {
        const minVal = Math.max(tier.min, 100);
        const maxVal = i < tiers.length - 1 ? tiers[i + 1].min : 10_000_000_000;
        const topY    = valueToY(maxVal, chartHeight);
        const bottomY = valueToY(minVal, chartHeight);
        const height  = bottomY - topY;
        if (height < 1) return;

        const baseColor = exchange.color;
        const opacity   = 0.15 + (i / tiers.length) * 0.35;
        const isActive  = i === matchedTierIndex;

        const block = document.createElement('div');
        block.className = 'tier-block ' + (isActive ? 'tier-block--highlighted' : 'tier-block--dimmed');
        block.style.cssText = `top:${topY}px;height:${height}px;background:${hexToRGBA(baseColor, isActive ? opacity + 0.25 : opacity)}`;

        if (height > 14) {
          const lbl = document.createElement('span');
          lbl.className = 'tier-block__label';
          lbl.textContent = tier.tier;
          block.appendChild(lbl);
        }

        block.addEventListener('mouseenter', (e) => showTooltip(e, tier, exchange));
        block.addEventListener('mousemove', moveTooltip);
        block.addEventListener('mouseleave', hideTooltip);
        tiersContainer.appendChild(block);
      });
    }
  });
}

// ============================================
// Chart Marker
// ============================================
function renderMarker(chartHeight) {
  const y = valueToY(state.userValue, chartHeight);
  els.chartMarker.style.top = y + 'px';
  els.markerLabel.textContent = formatUSD(state.userValue);
}

// ============================================
// Result Cards
// ============================================
function renderCards(results) {
  const validResults = results.filter(r => !r.disabled && r.fees);

  // Find lowest maker and lowest taker independently
  let lowestMaker = Infinity;
  let lowestTaker = Infinity;
  validResults.forEach(r => {
    if (r.fees.maker < lowestMaker) lowestMaker = r.fees.maker;
    if (r.fees.taker < lowestTaker) lowestTaker = r.fees.taker;
  });

  let html = '';
  validResults.forEach(r => {
    const { exchange, matchedTier, fees, hasCoinDiscount } = r;
    const isMakerLowest = fees.maker === lowestMaker;
    const isTakerLowest = fees.taker === lowestTaker;
    const showCoinNotice = state.coinDiscount && !hasCoinDiscount;

    // Pre-rebate fees (with coin discount applied if active, but without rebate)
    // This is what we show as the strikethrough "original" price
    const preRebateFees = calculateFees(matchedTier, {
      coinDiscount: state.coinDiscount,
      rebateRate: 0,
    });

    // Strikethrough + green highlight only when rebate is ON and actually changes the fee
    const rebateMakerChanged = state.rebateEnabled && fees.maker !== preRebateFees.maker;
    const rebateTakerChanged = state.rebateEnabled && fees.taker !== preRebateFees.taker;

    html += `
      <div class="result-card" style="--card-color: ${exchange.color}">
        <div class="result-card__header">
          <span class="result-card__exchange" style="color:${exchange.color}">${exchange.name}</span>
          <span class="result-card__tier">${matchedTier.tier}</span>
        </div>
        <div class="result-card__notice ${showCoinNotice ? 'result-card__notice--visible' : ''}">
          ${t('noCoinDiscount')}
        </div>
        <div class="result-card__fees">
          <div class="fee-item">
            <span class="fee-item__label">${t('maker')} ${isMakerLowest ? `<span class="fee-badge">${t('lowest')}</span>` : ''}</span>
            <span class="fee-item__original ${rebateMakerChanged ? 'fee-item__original--visible' : ''}">${formatFee(preRebateFees.maker)}</span>
            <span class="fee-item__value ${rebateMakerChanged ? 'fee-item__value--rebated' : ''} ${fees.maker < 0 ? 'fee-item__value--negative' : ''} ${isMakerLowest ? 'fee-item__value--lowest' : ''}">${formatFee(fees.maker)}</span>
          </div>
          <div class="fee-item">
            <span class="fee-item__label">${t('taker')} ${isTakerLowest ? `<span class="fee-badge">${t('lowest')}</span>` : ''}</span>
            <span class="fee-item__original ${rebateTakerChanged ? 'fee-item__original--visible' : ''}">${formatFee(preRebateFees.taker)}</span>
            <span class="fee-item__value ${rebateTakerChanged ? 'fee-item__value--rebated' : ''} ${fees.taker < 0 ? 'fee-item__value--negative' : ''} ${isTakerLowest ? 'fee-item__value--lowest' : ''}">${formatFee(fees.taker)}</span>
          </div>
        </div>
        <a href="${exchange.referralUrl}" target="_blank" rel="noopener" class="result-card__cta">
          ${t('signUp')}
        </a>
      </div>
    `;
  });

  els.resultsInner.innerHTML = html;
}

// ============================================
// Tooltip
// ============================================
let tooltipEl = null;

function getTooltip() {
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'tier-tooltip';
    document.body.appendChild(tooltipEl);
  }
  return tooltipEl;
}

function showTooltip(e, tier, exchange) {
  const tip = getTooltip();
  tip.innerHTML = `
    <div class="tier-tooltip__title" style="color:${exchange.color}">${exchange.name} — ${tier.tier}</div>
    <div class="tier-tooltip__row"><span>${t('tooltipMin')}:</span><span>${formatUSD(tier.min)}</span></div>
    <div class="tier-tooltip__row"><span>${t('tooltipMaker')}:</span><span>${formatFee(tier.maker)}</span></div>
    <div class="tier-tooltip__row"><span>${t('tooltipTaker')}:</span><span>${formatFee(tier.taker)}</span></div>
    ${'coinMaker' in tier && tier.coinMaker != null ? `
      <div class="tier-tooltip__row"><span>${t('tooltipCoinMaker')}:</span><span>${formatFee(tier.coinMaker)}</span></div>
      <div class="tier-tooltip__row"><span>${t('tooltipCoinTaker')}:</span><span>${formatFee(tier.coinTaker)}</span></div>
    ` : ''}
  `;
  tip.classList.add('tier-tooltip--visible');
  moveTooltip(e);
}

function moveTooltip(e) {
  if (!tooltipEl) return;
  tooltipEl.style.left = (e.clientX + 12) + 'px';
  tooltipEl.style.top = (e.clientY - 10) + 'px';
}

function hideTooltip() {
  if (tooltipEl) tooltipEl.classList.remove('tier-tooltip--visible');
}

// ============================================
// Utility
// ============================================
const _rgbaCache = new Map();
function hexToRGBA(hex, alpha) {
  const key = hex + alpha;
  if (_rgbaCache.has(key)) return _rgbaCache.get(key);
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const result = `rgba(${r},${g},${b},${alpha})`;
  _rgbaCache.set(key, result);
  return result;
}

// ============================================
// Resize Handler
// ============================================
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    renderYAxis();
    render();
  }, 150);
});

// Wait for layout then init
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    init();
  });
});
