/**
 * CompareFee - Exchange Fee Data (aggregator)
 *
 * 신규 거래소 추가 방법:
 * 1. src/data/exchanges/__template.js 복사 → [거래소id].js 로 저장
 * 2. 수수료 데이터 입력
 * 3. 아래에 import 한 줄 추가
 * 4. exchanges 배열에 추가
 */

import binance from './exchanges/binance.js';
import bybit   from './exchanges/bybit.js';
import okx     from './exchanges/okx.js';
import bitget  from './exchanges/bitget.js';
import gate    from './exchanges/gate.js';
import kucoin  from './exchanges/kucoin.js';
import mexc    from './exchanges/mexc.js';
import htx      from './exchanges/htx.js';
import bingx    from './exchanges/bingx.js';
import bitmart  from './exchanges/bitmart.js';
import lbank    from './exchanges/lbank.js';
import xt       from './exchanges/xt.js';
import coinw    from './exchanges/coinw.js';
import deepcoin from './exchanges/deepcoin.js';
import toobit   from './exchanges/toobit.js';
import bitunix  from './exchanges/bitunix.js';

export const exchanges = [
  binance,
  bybit,
  okx,
  bitget,
  gate,
  kucoin,
  mexc,
  htx,
  bingx,
  bitmart,
  lbank,
  xt,
  coinw,
  deepcoin,
  toobit,
  bitunix,
];
