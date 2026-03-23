/**
 * CompareFee - i18n Manager
 *
 * Usage:
 *   import { t, setLanguage, getCurrentLang } from './i18n/index.js';
 *   t('maker')  // 'MAKER' or '메이커' depending on current language
 */

import en from './en.js';
import ko from './ko.js';
import zh from './zh.js';
import hi from './hi.js';
import tr from './tr.js';

const dictionaries = { en, ko, zh, hi, tr };

let currentLang = localStorage.getItem('comparefee-lang') || 'en';

/**
 * Get a translated string by key.
 * Falls back to English if key is missing from current language.
 */
export function t(key) {
  return dictionaries[currentLang]?.[key] || dictionaries.en[key] || key;
}

/**
 * Get current language code
 */
export function getCurrentLang() {
  return currentLang;
}

/**
 * Set language and apply to all [data-i18n] elements in the DOM.
 * @param {string} lang - Language code (en, ko, zh, hi, tr)
 * @param {Function} [onApply] - Callback after applying translations (e.g. re-render)
 */
export function setLanguage(lang, onApply) {
  if (!dictionaries[lang]) return;
  currentLang = lang;
  localStorage.setItem('comparefee-lang', lang);

  // Update all static [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.textContent = val;
  });

  // Update tooltip text for [data-tooltip-i18n] elements
  document.querySelectorAll('[data-tooltip-i18n]').forEach(el => {
    const key = el.dataset.tooltipI18n;
    const val = t(key);
    if (val) el.dataset.tooltip = val;
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  // Trigger callback for dynamic content (cards, tooltips, slider label)
  if (typeof onApply === 'function') onApply();
}

/**
 * Initialize i18n — apply saved language on load.
 */
export function initI18n(onApply) {
  // Sync the dropdown if it exists
  const select = document.getElementById('langSelect');
  if (select) select.value = currentLang;

  setLanguage(currentLang, onApply);
}
