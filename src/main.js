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
  volumeValue: 1_000_000,  // 30-day trading volume (USDT)
  depositValue: 0,          // deposit / holding (USDT)
  coinDiscount: false,
  rebateEnabled: false,
  sortBy: 'taker',      // 'taker' | 'maker' | 'name'
  activeExchangeIds: exchanges.map(ex => ex.id),
};

function saveState() {
  localStorage.setItem('comparefee_state', JSON.stringify(state));
}

function loadState() {
  try {
    const saved = localStorage.getItem('comparefee_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.market) state.market = parsed.market;
      if (typeof parsed.volumeValue === 'number') state.volumeValue = parsed.volumeValue;
      if (typeof parsed.depositValue === 'number') state.depositValue = parsed.depositValue;
      if (typeof parsed.coinDiscount === 'boolean') state.coinDiscount = parsed.coinDiscount;
      // rebateEnabled intentionally excluded — payback service not yet launched
      if (parsed.sortBy) state.sortBy = parsed.sortBy;
      if (parsed.activeExchangeIds && Array.isArray(parsed.activeExchangeIds)) {
        state.activeExchangeIds = parsed.activeExchangeIds;
      }
    }
  } catch(e) {}
}

// ============================================
// DOM References
// ============================================
const els = {
  marketToggle: document.getElementById('marketToggle'),
  volumeSlider: document.getElementById('volumeSlider'),
  volumeTicks: document.getElementById('volumeTicks'),
  volumeInput: document.getElementById('volumeInput'),
  depositSlider: document.getElementById('depositSlider'),
  depositTicks: document.getElementById('depositTicks'),
  depositInput: document.getElementById('depositInput'),
  coinDiscountCheck: document.getElementById('coinDiscountCheck'),
  rebateCheck: document.getElementById('rebateCheck'),
  chartArea: document.getElementById('chartArea'),
  yAxis: document.getElementById('yAxis'),
  resultsInner: document.getElementById('resultsInner'),
  chartContainer: document.getElementById('chartContainer'),
  langSelect: document.getElementById('langSelect'),
  filterBtn: document.getElementById('filterBtn'),
  filterBtnText: document.getElementById('filterBtnText'),
  filterDropdown: document.getElementById('filterDropdown'),
  selectAllExchanges: document.getElementById('selectAllExchanges'),
  filterList: document.getElementById('filterList'),
  applyFilterBtn: document.getElementById('applyFilterBtn'),
  themeToggle: document.getElementById('themeToggle'),
};

// ============================================
// Initialization
// ============================================
// ============================================
function init() {
  loadState();
  setupTheme();
  setupToggles();
  setupDualSliders();
  setupSwitches();
  setupSliderTicks();
  setupYAxis();
  setupLangSelect();
  setupSortBar();
  setupFilterDropdown();
  initI18n(() => {
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
    saveState();
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
let renderRafId = null;

function setSliderFill(slider) {
  slider.style.setProperty('--fill-pct', (slider.value / 1000 * 100) + '%');
}

function setupOneSlider(slider, input, stateKey) {
  slider.addEventListener('input', () => {
    const position = slider.value / 1000;
    state[stateKey] = sliderToValue(position);
    input.value = Math.round(state[stateKey]).toLocaleString('en-US');
    setSliderFill(slider);

    if (renderRafId) cancelAnimationFrame(renderRafId);
    renderRafId = requestAnimationFrame(() => render());
  });

  slider.addEventListener('change', () => saveState());

  input.addEventListener('input', (e) => {
    const raw = e.target.value.replace(/[^0-9.]/g, '');
    if (raw.replace('.', '').length > 11) return; // max 11 digits
    const num = parseFloat(raw);
    if (!isNaN(num) && num >= 0) {
      state[stateKey] = num;
      const pos = valueToSlider(num);
      slider.value = Math.round(pos * 1000);
      setSliderFill(slider);
      saveState();
      render();
    }
  });

  input.addEventListener('blur', () => {
    input.value = Math.round(state[stateKey]).toLocaleString('en-US');
  });

  // Initialize position from state
  const pos = valueToSlider(state[stateKey]);
  slider.value = Math.round(pos * 1000);
  setSliderFill(slider);
  input.value = Math.round(state[stateKey]).toLocaleString('en-US');
}

function setupDualSliders() {
  setupOneSlider(els.volumeSlider, els.volumeInput, 'volumeValue');
  setupOneSlider(els.depositSlider, els.depositInput, 'depositValue');

  window.addEventListener('resize', () => {
    if (renderRafId) cancelAnimationFrame(renderRafId);
    renderRafId = requestAnimationFrame(() => render());
  });
}

// ============================================
// Theme Setup
// ============================================
function setupTheme() {
  const toggleBtn = els.themeToggle;
  if (!toggleBtn) return;
  const iconSpan = toggleBtn.querySelector('.theme-icon');
  
  // Load saved theme, default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'light') {
    document.body.classList.add('theme-light');
    if(iconSpan) iconSpan.textContent = '🌙'; // 라이트모드일때 달력 버튼 표시 (다크모드로 가기)
  } else {
    document.body.classList.remove('theme-light');
    if(iconSpan) iconSpan.textContent = '☀️'; // 다크모드일때 해 버튼 표시 (라이트모드로 가기)
  }

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('theme-light');
    const newTheme = isLight ? 'light' : 'dark';
    if(iconSpan) iconSpan.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', newTheme);
  });
}

// ============================================
// Language Selector
// ============================================
function setupLangSelect() {
  els.langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value, () => {
      // 언어 변경 시, 번역 텍스트가 DOM에 반영되도록 카드 캐시 초기화
      if (typeof _cardPool !== 'undefined') {
        _cardPool.clear();
      }
      els.resultsInner.innerHTML = '';
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
  els.volumeTicks.innerHTML = html;
  els.depositTicks.innerHTML = html;
}

// ============================================
// Switch Setup
// ============================================
// ─── Toast ───────────────────────────────────────────────────
let _toastTimer = null;
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('toast--visible');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toast.classList.remove('toast--visible'), 2800);
}

function setupSwitches() {
  els.coinDiscountCheck.checked = state.coinDiscount;
  els.rebateCheck.checked = state.rebateEnabled;

  els.coinDiscountCheck.addEventListener('change', () => {
    state.coinDiscount = els.coinDiscountCheck.checked;
    saveState();
    render();
  });

  els.rebateCheck.addEventListener('change', () => {
    state.rebateEnabled = els.rebateCheck.checked;
    saveState();
    render();
  });
}

// ============================================
// Sort Bar
// ============================================
function setupSortBar() {
  const sortBar = document.getElementById('sortBar');
  if (!sortBar) return;
  sortBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.sort-btn');
    if (!btn) return;
    state.sortBy = btn.dataset.sort;
    sortBar.querySelectorAll('.sort-btn').forEach(b =>
      b.classList.toggle('sort-btn--active', b === btn)
    );
    saveState();
    renderCards(_lastResults);
  });
}

// ============================================
// Filter Dropdown
// ============================================
function setupFilterDropdown() {
  // Populate items
  const html = exchanges.map(ex => `
    <div class="filter-item">
      <label class="filter-checkbox-label">
        <input type="checkbox" class="exchange-checkbox" value="${ex.id}" checked>
        <span class="checkbox-custom"></span>
        ${ex.name}
      </label>
    </div>
  `).join('');
  els.filterList.innerHTML = html;

  const checkboxes = Array.from(els.filterList.querySelectorAll('.exchange-checkbox'));

  // Initialize checkboxes from state
  checkboxes.forEach(cb => {
    cb.checked = state.activeExchangeIds.includes(cb.value);
  });
  const allChecked = checkboxes.every(cb => cb.checked);
  els.selectAllExchanges.checked = allChecked;
  els.filterBtnText.textContent = `Filter (${state.activeExchangeIds.length}/${exchanges.length})`;

  // Toggle dropdown
  els.filterBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    els.filterDropdown.classList.toggle('hidden');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!els.filterDropdown.classList.contains('hidden') && 
        !els.filterDropdown.contains(e.target) && 
        !els.filterBtn.contains(e.target)) {
      els.filterDropdown.classList.add('hidden');
    }
  });

  // Stop propagation inside dropdown
  els.filterDropdown.addEventListener('click', (e) => e.stopPropagation());

  // Select All logic
  els.selectAllExchanges.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    checkboxes.forEach(cb => cb.checked = isChecked);
  });

  // Individual checkbox -> Sync Select All
  els.filterList.addEventListener('change', (e) => {
    if (e.target.classList.contains('exchange-checkbox')) {
      const allChecked = checkboxes.every(cb => cb.checked);
      els.selectAllExchanges.checked = allChecked;
    }
  });

  // Apply btn
  els.applyFilterBtn.addEventListener('click', () => {
    const selected = checkboxes.filter(cb => cb.checked).map(cb => cb.value);
    
    // Fallback: if user unselected everything, auto select all? Or just allow empty state
    // We allow empty state (will show 0 charts)
    state.activeExchangeIds = selected;
    saveState();
    els.filterBtnText.textContent = `Filter (${selected.length}/${exchanges.length})`;
    els.filterDropdown.classList.add('hidden');
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
let _lastResults = [];

function render() {
  const chartHeight = els.chartArea.offsetHeight || 480;
  const activeExchanges = exchanges.filter(ex => ex.active && state.activeExchangeIds.includes(ex.id));

  const results = activeExchanges.map(ex => {
    const marketData = ex[state.market]; // spot or futures
    const volTiers = marketData.volumeBased;
    const depTiers = marketData.depositBased;

    if (!volTiers || volTiers.length === 0) {
      return { exchange: ex, disabled: true, tiers: [], matchedTier: null, fees: null };
    }

    // Volume tier matching
    const volResult = findUserTier(volTiers, state.volumeValue);

    // Deposit tier matching (convert USDT → native coin if needed)
    // If depositCurrency exists but rate is unavailable (API fetch failed), skip deposit matching
    // to avoid using raw USDT value as native coin units (e.g. treating $10,000 as 10,000 BNB).
    let depResult = null;
    if (depTiers && depTiers.length > 0) {
      const needsConversion = !!ex.depositCurrency;
      const rateAvailable = !!ex.depositUSDTRate;
      if (!needsConversion || rateAvailable) {
        const depositEffective = rateAvailable
          ? state.depositValue / ex.depositUSDTRate
          : state.depositValue;
        depResult = findUserTier(depTiers, depositEffective);
      }
    }

    // AND/OR tier resolution
    let finalTierIndex;
    if (ex.tierRule === 'and') {
      // Binance: must meet BOTH volume AND deposit → take the lower tier
      finalTierIndex = depResult
        ? Math.min(volResult.tierIndex, depResult.tierIndex)
        : volResult.tierIndex;
    } else {
      // Everyone else: meet EITHER volume OR deposit → take the higher tier
      finalTierIndex = depResult
        ? Math.max(volResult.tierIndex, depResult.tierIndex)
        : volResult.tierIndex;
    }

    const tier = volTiers[finalTierIndex];

    const rebateRate = state.rebateEnabled ? ex.rebate[state.market] : 0;
    const fees = calculateFees(tier, {
      coinDiscount: state.coinDiscount,
      rebateRate,
    });
    const baseFees = calculateFees(tier, { coinDiscount: false, rebateRate: 0 });

    return {
      exchange: ex,
      disabled: false,
      tiers: volTiers,
      matchedTierIndex: finalTierIndex,
      matchedTier: tier,
      fees,
      baseFees,
      hasCoinDiscount: ex.nativeCoin !== null,
    };
  });

  renderChart(results, chartHeight);
  _lastResults = results;
  renderCards(results);
}

// ============================================
// Chart Rendering
// ============================================
function getColWidth() {
  return window.innerWidth <= 768 ? 44 : 88;
}

function renderChart(results, chartHeight) {
  // Dynamically set chartArea width so horizontal scroll works
  const colWidth = getColWidth();
  const totalWidth = results.length * (colWidth + 2); // +2 for gap
  els.chartArea.style.minWidth = totalWidth + 'px';
  
  // Make an array of existing columns to easily remove excess
  const existingCols = Array.from(els.chartArea.querySelectorAll('.exchange-column'));

  // Remove excess columns if there are more DOM nodes than filtered results
  if (existingCols.length > results.length) {
    for (let i = results.length; i < existingCols.length; i++) {
      existingCols[i].remove();
    }
  }

  results.forEach(({ exchange, disabled, tiers, matchedTierIndex }, colIdx) => {
    let col = existingCols[colIdx];
    let tiersContainer;

    if (!col) {
      col = document.createElement('div');
      col.className = 'exchange-column';
      const label = document.createElement('div');
      label.className = 'exchange-column__label';
      label.innerHTML = `<span class="exchange-column__name" data-exchange="${exchange.id}" style="color:${exchange.color}">${exchange.name}</span>`;
      col.appendChild(label);
      tiersContainer = document.createElement('div');
      tiersContainer.className = 'exchange-column__tiers';
      col.appendChild(tiersContainer);
      els.chartArea.appendChild(col);
    } else {
      // Update the label just in case this reused column belonged to a different exchange
      const labelSpan = col.querySelector('.exchange-column__name');
      if (labelSpan) {
        labelSpan.setAttribute('data-exchange', exchange.id);
        labelSpan.style.color = exchange.color;
        labelSpan.textContent = exchange.name;
      }
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
// Result Cards (DOM Pooling Optimized)
// ============================================
const _cardPool = new Map();

function renderCards(results) {
  const validResults = results.filter(r => !r.disabled && r.fees);

  // Sort cards
  const sorted = [...validResults].sort((a, b) => {
    if (state.sortBy === 'name') {
      return a.exchange.name.localeCompare(b.exchange.name);
    }
    return a.fees[state.sortBy] - b.fees[state.sortBy];
  });

  // Find lowest maker and lowest taker independently
  let lowestMaker = Infinity;
  let lowestTaker = Infinity;
  validResults.forEach(r => {
    if (r.fees.maker < lowestMaker) lowestMaker = r.fees.maker;
    if (r.fees.taker < lowestTaker) lowestTaker = r.fees.taker;
  });

  sorted.forEach((r, orderIndex) => {
    const { exchange, matchedTier, fees } = r;
    const isMakerLowest = fees.maker === lowestMaker;
    const isTakerLowest = fees.taker === lowestTaker;
    const preRebateFees = calculateFees(matchedTier, { coinDiscount: state.coinDiscount, rebateRate: 0 });
    const rebateMakerChanged = state.rebateEnabled && fees.maker !== preRebateFees.maker;
    const rebateTakerChanged = state.rebateEnabled && fees.taker !== preRebateFees.taker;

    let card = _cardPool.get(exchange.id);

    if (!card) {
      // 1. 최초 1회 전체 DOM 노드 및 참조 객체 생성
      card = { el: document.createElement('div'), refs: {} };
      card.el.className = 'result-card';
      card.el.style.setProperty('--card-color', exchange.color);

      card.el.innerHTML = `
        <div class="result-card__header">
          <span class="result-card__exchange" data-exchange="${exchange.id}" style="color:${exchange.color}">${exchange.name}</span>
          <span class="result-card__tier ref-tier"></span>
        </div>
        <div class="result-card__fees">
          <div class="fee-item">
            <span class="fee-item__label">${t('maker')} <span class="fee-badge ref-maker-badge"></span></span>
            <span class="fee-item__original ref-maker-orig"></span>
            <span class="fee-item__value ref-maker-val"></span>
          </div>
          <div class="fee-item">
            <span class="fee-item__label">${t('taker')} <span class="fee-badge ref-taker-badge"></span></span>
            <span class="fee-item__original ref-taker-orig"></span>
            <span class="fee-item__value ref-taker-val"></span>
          </div>
        </div>
        <button type="button" class="result-card__cta ref-cta">${t('signUp')}</button>
      `;

      card.refs = {
        tier: card.el.querySelector('.ref-tier'),
        makerBadge: card.el.querySelector('.ref-maker-badge'),
        makerOrig: card.el.querySelector('.ref-maker-orig'),
        makerVal: card.el.querySelector('.ref-maker-val'),
        takerBadge: card.el.querySelector('.ref-taker-badge'),
        takerOrig: card.el.querySelector('.ref-taker-orig'),
        takerVal: card.el.querySelector('.ref-taker-val'),
        cta: card.el.querySelector('.ref-cta'),
      };
      card.refs.cta.addEventListener('click', () => showToast(t('comingSoon')));

      els.resultsInner.appendChild(card.el);
      _cardPool.set(exchange.id, card);
    }

    // 2. 가비지 컬렉터 없이 이미 생성된 DOM 텍스트 내용, 표시여부만 고속 업데이트
    card.el.style.display = ''; // CSS 미디어 속성(flex/block)을 존중하도록 비움
    card.el.style.order = orderIndex; // CSS Grid 정렬 속성으로 DOM Move 방지

    card.refs.tier.textContent = matchedTier.tier;

    // Maker
    card.refs.makerBadge.textContent = isMakerLowest ? '👍' : '';
    card.refs.makerBadge.style.display = isMakerLowest ? 'inline-block' : 'none';
    card.refs.makerOrig.textContent = formatFee(preRebateFees.maker);
    card.refs.makerOrig.classList.toggle('fee-item__original--visible', rebateMakerChanged);
    card.refs.makerVal.textContent = formatFee(fees.maker);
    card.refs.makerVal.className = 'fee-item__value ref-maker-val ' +
      (rebateMakerChanged ? 'fee-item__value--rebated ' : '') +
      (fees.maker < 0 ? 'fee-item__value--negative ' : '') +
      (isMakerLowest ? 'fee-item__value--lowest' : '');

    // Taker
    card.refs.takerBadge.textContent = isTakerLowest ? '👍' : '';
    card.refs.takerBadge.style.display = isTakerLowest ? 'inline-block' : 'none';
    card.refs.takerOrig.textContent = formatFee(preRebateFees.taker);
    card.refs.takerOrig.classList.toggle('fee-item__original--visible', rebateTakerChanged);
    card.refs.takerVal.textContent = formatFee(fees.taker);
    card.refs.takerVal.className = 'fee-item__value ref-taker-val ' +
      (rebateTakerChanged ? 'fee-item__value--rebated ' : '') +
      (fees.taker < 0 ? 'fee-item__value--negative ' : '') +
      (isTakerLowest ? 'fee-item__value--lowest' : '');
  });

  // 사용자가 체크 해제한(필터 아웃된) 거래소 카드들은 GPU 렌더링 파이프라인에서 제외(display:none)
  _cardPool.forEach((card, exId) => {
    if (!validResults.some(r => r.exchange.id === exId)) {
      card.el.style.display = 'none';
    }
  });
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
