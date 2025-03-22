# Q-Utils 使用指南

## 目录

1. [安装](#安装)
2. [基本使用](#基本使用)
3. [功能分类](#功能分类)
   - [类型检测](#类型检测)
   - [空值检测](#空值检测)
   - [布尔值工具](#布尔值工具)
   - [Promise 工具](#promise-工具)
   - [正则表达式工具](#正则表达式工具)
   - [错误处理工具](#错误处理工具)
   - [Symbol 工具](#symbol-工具)
   - [BigInt 工具](#bigint-工具)
   - [字符串工具](#字符串工具)
   - [数组工具](#数组工具)
   - [对象工具](#对象工具)
   - [函数工具](#函数工具)
   - [日期工具](#日期工具)
   - [DOM 工具](#dom-工具)
   - [存储工具](#存储工具)
   - [网络工具](#网络工具)
   - [数字工具](#数字工具)
   - [颜色工具](#颜色工具)
   - [浏览器工具](#浏览器工具)

## 安装

```bash
# 使用npm
npm install q-utils

# 使用yarn
yarn add q-utils

# 使用pnpm
pnpm add q-utils
```

## 基本使用

你可以通过以下方式使用 Q-Utils：

```typescript
// 导入整个库
import * as qUtils from 'q-utils';

// 使用命名空间方式导入（推荐）
import { string, array, func, dom } from 'q-utils';

// 按需导入特定功能
import { capitalize } from 'q-utils/string';
import { unique } from 'q-utils/array';
```

## 功能分类

### 类型检测

```typescript
import { 
  isString,       // 检查值是否为字符串
  isNumber,       // 检查值是否为数字
  isBoolean,      // 检查值是否为布尔值
  isArray,        // 检查值是否为数组
  isObject,       // 检查值是否为对象
  isFunction,     // 检查值是否为函数
  isNull,         // 检查值是否为null
  isUndefined,    // 检查值是否为undefined
  getType         // 获取值的类型
} from 'q-utils/type';

// 示例
isString('hello');           // true
isNumber(123);              // true
isBoolean(true);            // true
isArray([]);                // true
isObject({});               // true
isFunction(() => {});       // true
isNull(null);               // true
isUndefined(undefined);     // true
getType('hello');           // 'string'
```

### 空值检测

```typescript
import { 
  isEmpty,         // 检查值是否为空
  isEmptyString,   // 检查字符串是否为空
  isEmptyArray,    // 检查数组是否为空
  isEmptyObject,   // 检查对象是否为空
  isNil            // 检查值是否为null或undefined
} from 'q-utils/empty';

// 示例
isEmpty('');               // true
isEmptyString('');         // true
isEmptyArray([]);          // true
isEmptyObject({});         // true
isNil(null);               // true
isNil(undefined);          // true
```

### 布尔值工具

```typescript
import { 
  toBoolean,      // 将值转换为布尔值
  isTruthy,       // 检查值是否为真值
  isFalsy         // 检查值是否为假值
} from 'q-utils/boolean';

// 示例
toBoolean('true');         // true
toBoolean('false');        // false
isTruthy('hello');         // true
isFalsy('');              // true
```

### Promise 工具

```typescript
import { 
  delay,          // 延迟执行
  timeout,        // 超时控制
  retry,          // 重试机制
  concurrent,     // 并发控制
  debounce,       // 防抖
  throttle        // 节流
} from 'q-utils/promise';

// 示例
// 延迟执行
await delay(1000); // 延迟1秒

// 超时控制
try {
  await timeout(fetch('api'), 5000);
} catch (error) {
  console.error('请求超时');
}

// 重试机制
await retry(async () => {
  // 可能失败的操作
}, { maxAttempts: 3 });

// 并发控制
const results = await concurrent([
  () => fetch('api1'),
  () => fetch('api2'),
  () => fetch('api3')
], 2); // 最多同时执行2个请求
```

### 正则表达式工具

```typescript
import { 
  escapeRegExp,    // 转义正则表达式特殊字符
  createRegExp,    // 创建正则表达式
  matchAll,        // 获取所有匹配结果
  replaceAll,      // 替换所有匹配项
  split,           // 按正则表达式分割字符串
  test,            // 测试字符串是否匹配
  exec,            // 执行正则表达式匹配
  execAll,         // 执行所有正则表达式匹配
  match,           // 返回匹配结果
  search,          // 返回匹配位置
  replace,         // 替换匹配项
  getCaptureGroups, // 获取所有捕获组
  getFlags,        // 获取所有标志
  hasFlag,         // 检查是否包含指定标志
  addFlag,         // 添加标志
  removeFlag,      // 移除标志
  getSource,       // 获取源字符串
  toString,        // 获取完整字符串表示
  clone,           // 克隆正则表达式
  combine,         // 合并多个正则表达式
  countMatches,    // 获取匹配次数
  firstMatchIndex, // 获取第一个匹配位置
  lastMatchIndex,  // 获取最后一个匹配位置
  allMatchIndices, // 获取所有匹配位置
  allMatchRanges,  // 获取所有匹配范围
  allMatchTexts,   // 获取所有匹配文本
  allCaptureGroups, // 获取所有捕获组值
  getNamedCaptureGroups, // 获取所有命名捕获组
  allNamedCaptureGroups, // 获取所有命名捕获组值
  allMatchPositions, // 获取所有匹配位置和文本
  allMatchRangesWithText, // 获取所有匹配范围和文本
  allMatchPositionsWithGroups, // 获取所有匹配位置和捕获组
  allMatchRangesWithGroups, // 获取所有匹配范围和捕获组
  allMatchPositionsWithNamedGroups, // 获取所有匹配位置和命名捕获组
  allMatchRangesWithNamedGroups // 获取所有匹配范围和命名捕获组
} from 'q-utils/regexp';

// 示例
escapeRegExp('.*+?^${}()|[]\\'); // '\.\*\+\?\^\$\{\}\(\)\|\[\]\\'
createRegExp('test', 'gi'); // /test/gi
matchAll('test1 test2 test3', /\w+(\d+)/g); // [['test1', '1'], ['test2', '2'], ['test3', '3']]
replaceAll('test1 test2 test3', /\w+(\d+)/g, 'word$1'); // 'word1 word2 word3'
split('test1,test2;test3', /[,;]/); // ['test1', 'test2', 'test3']
test('test123', /\d+/); // true
exec('test123', /(\d+)/); // ['123', '123']
execAll('test1 test2 test3', /\w+(\d+)/g); // [['test1', '1'], ['test2', '2'], ['test3', '3']]
match('test123', /(\d+)/); // ['123', '123']
search('test123', /\d+/); // 4
replace('test123', /(\d+)/, '456'); // 'test456'
getCaptureGroups(/(\d+)(\w+)/); // ['$1', '$2']
getFlags(/test/gi); // ['g', 'i']
hasFlag(/test/gi, 'g'); // true
addFlag(/test/, 'g'); // /test/g
removeFlag(/test/gi, 'i'); // /test/g
getSource(/test/); // 'test'
toString(/test/gi); // '/test/gi'
clone(/test/gi); // /test/gi
combine([/\d+/, /\w+/], 'g'); // /(\d+)|(\w+)/g
countMatches('test1 test2 test3', /\w+(\d+)/g); // 3
firstMatchIndex('test123', /\d+/); // 4
lastMatchIndex('test123', /\d+/); // 4
allMatchIndices('test1 test2 test3', /\w+(\d+)/g); // [0, 6, 12]
allMatchRanges('test1 test2 test3', /\w+(\d+)/g); // [[0, 5], [6, 11], [12, 17]]
allMatchTexts('test1 test2 test3', /\w+(\d+)/g); // ['test1', 'test2', 'test3']
allCaptureGroups('test1 test2 test3', /\w+(\d+)/g); // [['1'], ['2'], ['3']]
getNamedCaptureGroups(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/); // ['year', 'month', 'day']
allNamedCaptureGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/); // [{ year: '2023', month: '01', day: '01' }]
allMatchPositions('test1 test2 test3', /\w+(\d+)/g); // [{ index: 0, text: 'test1' }, { index: 6, text: 'test2' }, { index: 12, text: 'test3' }]
allMatchRangesWithText('test1 test2 test3', /\w+(\d+)/g); // [{ start: 0, end: 5, text: 'test1' }, { start: 6, end: 11, text: 'test2' }, { start: 12, end: 17, text: 'test3' }]
allMatchPositionsWithGroups('test1 test2 test3', /\w+(\d+)/g); // [{ index: 0, groups: ['1'] }, { index: 6, groups: ['2'] }, { index: 12, groups: ['3'] }]
allMatchRangesWithGroups('test1 test2 test3', /\w+(\d+)/g); // [{ start: 0, end: 5, groups: ['1'] }, { start: 6, end: 11, groups: ['2'] }, { start: 12, end: 17, groups: ['3'] }]
allMatchPositionsWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/); // [{ index: 0, groups: { year: '2023', month: '01', day: '01' } }]
allMatchRangesWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/); // [{ start: 0, end: 10, groups: { year: '2023', month: '01', day: '01' } }]
```

### 错误处理工具

```typescript
import { 
  createError,     // 创建自定义错误
  isError,         // 检查值是否为错误对象
  isErrorInstance, // 检查错误是否为指定类型
  getErrorStack,   // 获取错误堆栈
  getErrorMessage, // 获取错误信息
  getErrorName,    // 获取错误名称
  getErrorCause,   // 获取错误原因
  setErrorCause,   // 设置错误原因
  wrapError,       // 包装错误
  unwrapError      // 解包错误
} from 'q-utils/error';

// 示例
const error = createError('CustomError', '这是一个自定义错误');
isError(error); // true
isErrorInstance(error, 'CustomError'); // true
getErrorStack(error); // 错误堆栈信息
getErrorMessage(error); // '这是一个自定义错误'
getErrorName(error); // 'CustomError'
getErrorCause(error); // undefined
setErrorCause(error, new Error('原始错误'));
getErrorCause(error); // Error: 原始错误
```

### Symbol 工具

```typescript
import { 
  createSymbol,    // 创建Symbol
  isSymbol,        // 检查值是否为Symbol
  getSymbolDescription, // 获取Symbol描述
  getSymbolKey,    // 获取Symbol键
  getSymbolKeys,   // 获取所有Symbol键
  getSymbolValues, // 获取所有Symbol值
  getSymbolEntries, // 获取所有Symbol键值对
  hasSymbol,       // 检查对象是否包含指定Symbol
  deleteSymbol     // 删除对象中的Symbol
} from 'q-utils/symbol';

// 示例
const sym = createSymbol('test');
isSymbol(sym); // true
getSymbolDescription(sym); // 'test'
const obj = { [sym]: 'value' };
getSymbolKey(obj, sym); // 'value'
getSymbolKeys(obj); // [sym]
getSymbolValues(obj); // ['value']
getSymbolEntries(obj); // [[sym, 'value']]
hasSymbol(obj, sym); // true
deleteSymbol(obj, sym); // true
```

### BigInt 工具

```typescript
import { 
  isBigInt,        // 检查值是否为BigInt
  toBigInt,        // 转换为BigInt
  fromBigInt,      // 从BigInt转换
  addBigInt,       // BigInt加法
  subtractBigInt,  // BigInt减法
  multiplyBigInt,  // BigInt乘法
  divideBigInt,    // BigInt除法
  remainderBigInt, // BigInt取余
  powerBigInt,     // BigInt幂运算
  negateBigInt,    // BigInt取负
  absBigInt,       // BigInt绝对值
  minBigInt,       // BigInt最小值
  maxBigInt,       // BigInt最大值
  clampBigInt,     // BigInt范围限制
  randomBigInt     // 随机BigInt
} from 'q-utils/bigint';

// 示例
const bigInt = toBigInt('12345678901234567890');
isBigInt(bigInt); // true
addBigInt(bigInt, toBigInt('1')); // 12345678901234567891n
subtractBigInt(bigInt, toBigInt('1')); // 12345678901234567889n
multiplyBigInt(bigInt, toBigInt('2')); // 24691357802469135780n
divideBigInt(bigInt, toBigInt('2')); // 6172839450617283945n
remainderBigInt(bigInt, toBigInt('3')); // 0n
powerBigInt(bigInt, toBigInt('2')); // 152415787532388367501905199875019052100n
negateBigInt(bigInt); // -12345678901234567890n
absBigInt(negateBigInt(bigInt)); // 12345678901234567890n
minBigInt(bigInt, toBigInt('0')); // 0n
maxBigInt(bigInt, toBigInt('0')); // 12345678901234567890n
clampBigInt(bigInt, toBigInt('0'), toBigInt('1000')); // 1000n
randomBigInt(toBigInt('1000')); // 0n 到 1000n 之间的随机数
```

### 字符串工具

```typescript
import { 
  trim,            // 去除字符串两端的空白字符
  capitalize,      // 将字符串首字母大写
  camelize,        // 将连字符分隔的字符串转为驼峰式
  dasherize,       // 将驼峰式字符串转为横线连接
  truncate,        // 截断字符串，超出部分用省略号替代
  escape,          // 转义HTML特殊字符
  unescape,        // 反转义HTML实体
  template,        // 高级模板字符串处理
  format           // 格式化字符串（支持printf风格、索引和命名参数）
} from 'q-utils/string';

// 示例
capitalize('hello world');        // 'Hello world'
camelize('background-color');     // 'backgroundColor'
dasherize('backgroundColor');     // 'background-color'
truncate('这是一段很长的文字需要被截断', 10); // '这是一段很...'
escape('<div>text</div>');        // '&lt;div&gt;text&lt;/div&gt;'
unescape('&lt;div&gt;text&lt;/div&gt;'); // '<div>text</div>'
format('Hello, {name}!', { name: 'Alice' }); // 'Hello, Alice!'
```

### 数组工具

```typescript
import { 
  unique,         // 数组去重
  flatten,        // 数组扁平化
  shuffle,        // 随机打乱数组
  chunk,          // 将数组分割成指定大小的块
  intersection,   // 获取多个数组的交集
  difference,     // 获取数组差集
  groupBy,        // 按指定规则对数组元素进行分组
  sortBy          // 按指定条件对数组进行排序
} from 'q-utils/array';

// 示例
unique([1, 2, 2, 3]);                   // [1, 2, 3]
flatten([1, [2, [3]], 4]);              // [1, 2, 3, 4]
shuffle([1, 2, 3, 4, 5]);               // 随机打乱数组
chunk([1, 2, 3, 4, 5], 2);              // [[1, 2], [3, 4], [5]]
intersection([1, 2, 3], [2, 3, 4]);     // [2, 3]
difference([1, 2, 3], [2, 3, 4]);       // [1]
groupBy([1, 2, 3, 4], n => n % 2 === 0 ? 'even' : 'odd'); // { even: [2, 4], odd: [1, 3] }
sortBy([3, 1, 4, 2], (a, b) => a - b);  // [1, 2, 3, 4]
```

### 对象工具

```typescript
import { 
  deepClone,      // 深拷贝对象
  deepMerge,      // 深度合并对象
  pick,           // 从对象中选取指定属性
  omit,           // 从对象中排除指定属性
  isEmpty,        // 检查对象是否为空
  isEqual,        // 深度比较两个值是否相等
  getValueByPath, // 根据路径获取对象中的值
  setValueByPath  // 根据路径设置对象中的值
} from 'q-utils/object';

// 示例
deepClone({ a: 1, b: { c: 2 } });                  // 深拷贝对象
deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 } }); // { a: 1, b: { c: 2, d: 3 } }
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);           // { a: 1, c: 3 }
omit({ a: 1, b: 2, c: 3 }, ['b']);                // { a: 1, c: 3 }
isEmpty({});                                      // true
isEqual({ a: 1 }, { a: 1 });                       // true
getValueByPath({ a: { b: { c: 1 } } }, 'a.b.c');   // 1
setValueByPath({}, 'a.b.c', 1);                   // { a: { b: { c: 1 } } }
```

### 函数工具

```typescript
import {
  debounce,         // 防抖
  throttle,         // 节流
  once,             // 只执行一次的函数
  curry,            // 函数柯里化
  compose,          // 函数组合
  memoize,          // 函数记忆
  partial,          // 偏函数
  delay             // 延迟执行
} from 'q-utils/function';

// 示例
const debouncedFn = debounce(() => console.log('搜索'), 300);
const throttledFn = throttle(() => console.log('滚动'), 200);
const runOnce = once(() => console.log('只执行一次'));
const memoizedFn = memoize((n) => {
  console.log('计算', n);
  return n * 2;
});
```

### 日期工具

```typescript
import {
  format,           // 格式化日期
  addDays,          // 添加天数
  subtractDays,     // 减去天数
  addMonths,        // 添加月份
  subtractMonths,   // 减去月份
  addYears,         // 添加年份
  subtractYears,    // 减去年份
  isSameDay,        // 是否同一天
  isSameMonth,      // 是否同一月
  isSameYear,       // 是否同一年
  getWeekday,       // 获取星期几
  getDaysInMonth    // 获取月份天数
} from 'q-utils/date';

// 示例
format(new Date(), 'yyyy-MM-dd');                  // '2023-11-01'
addDays(new Date(), 5);                            // 添加5天后的日期
isSameDay(new Date(), new Date());                 // true
getWeekday(new Date());                            // 获取星期几(0-6)
getDaysInMonth(new Date(2023, 1, 1));              // 28 (2023年2月)
```

### DOM工具

```typescript
import {
  getElement,       // 获取DOM元素
  createElement,    // 创建DOM元素
  addClass,         // 添加类名
  removeClass,      // 移除类名
  toggleClass,      // 切换类名
  hasClass,         // 检查是否有类名
  on,               // 添加事件监听
  off,              // 移除事件监听
  getStyle,         // 获取样式值
  setStyle          // 设置样式值
} from 'q-utils/dom';

// 示例
const element = getElement('#app');
addClass(element, 'active');
removeClass(element, 'hidden');
toggleClass(element, 'selected');
hasClass(element, 'active');                         // true
on(element, 'click', () => console.log('点击了元素'));
setStyle(element, {color: 'red', fontSize: '14px'});
const color = getStyle(element, 'color');
```

### 存储工具

```typescript
import { 
  getLocalStorage,       // 获取 localStorage 数据
  setLocalStorage,       // 设置 localStorage 数据
  removeLocalStorage,    // 删除 localStorage 数据
  clearLocalStorage,     // 清除所有 localStorage 数据
  getAllLocalStorage,    // 获取所有 localStorage 数据
  getAllLocalStorageKeys, // 获取所有 localStorage 键名
  getAllLocalStorageValues, // 获取所有 localStorage 值
  getSessionStorage,     // 获取 sessionStorage 数据
  setSessionStorage,     // 设置 sessionStorage 数据
  removeSessionStorage,  // 删除 sessionStorage 数据
  clearSessionStorage    // 清除所有 sessionStorage 数据
} from 'q-utils/utils';

// 示例
setLocalStorage('user', { id: 1, name: 'Alice' });
const user = getLocalStorage('user', {});
removeLocalStorage('user');
const allData = getAllLocalStorage();
const allKeys = getAllLocalStorageKeys();
const allValues = getAllLocalStorageValues();

setSessionStorage('pageState', { scrollPos: 100 });
const pageState = getSessionStorage('pageState', {});
```

### 网络工具

```typescript
import { 
  request,          // 通用网络请求函数
  fetchWithTimeout, // 带超时功能的fetch
  jsonp,            // JSONP跨域请求
  ping,             // 检测URL可用性和响应时间
  downloadFile      // 从URL下载文件
} from 'q-utils/network';

// 示例
// 基本GET请求
request('https://api.example.com/users')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST请求
request('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  data: { name: '张三', age: 30 }
}).then(response => console.log(response));

// 超时设置
fetchWithTimeout('https://api.example.com/data', {}, 5000)
  .then(response => response.json())
  .catch(error => console.error(error));

// JSONP跨域请求
jsonp('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// 检测URL响应时间
ping('https://example.com')
  .then(time => console.log(`响应时间: ${time}ms`))
  .catch(error => console.error('无法连接:', error));

// 下载文件
downloadFile('https://example.com/file.pdf', { filename: '文档.pdf' })
  .catch(error => console.error('下载失败:', error));
```

### 数字工具

```typescript
import {
  random,           // 生成随机数
  round,            // 四舍五入
  floor,            // 向下取整
  ceil,             // 向上取整
  clamp,            // 限制数值范围
  formatNumber,     // 格式化数字
  toFixed,          // 保留小数位
  isNumber,         // 检查是否为数字
  toCurrency        // 转换为货币格式
} from 'q-utils/number';

// 示例
random(1, 10);                                      // 生成1-10之间的随机数
round(3.1415926, 2);                                // 3.14
clamp(100, 0, 50);                                  // 50
formatNumber(1234567.89, {delimiter: ',', decimal: 2}); // '1,234,567.89'
toCurrency(1234.56, 'CNY');                          // '¥1,234.56'
```

### 颜色工具

```typescript
import {
  hexToRgb,         // 十六进制转RGB
  rgbToHex,         // RGB转十六进制
  adjustColor        // 调整颜色
} from 'q-utils/color';

// 示例
// 十六进制转RGB
hexToRgb('#FF0000');                                // {r: 255, g: 0, b: 0}
hexToRgb('#FF0000', { format: 'string' });          // "rgb(255, 0, 0)"
hexToRgb('#FF0000', { alpha: 0.5, format: 'string' }); // "rgba(255, 0, 0, 0.5)"

// RGB转十六进制
rgbToHex(255, 0, 0);                                // '#FF0000'
rgbToHex({ r: 255, g: 0, b: 0 });                   // '#FF0000'
rgbToHex([255, 0, 0], null, null, { prefix: false }); // 'FF0000'

// 调整颜色
// 变亮颜色
adjustColor('#FF0000', { lightness: 0.2 });         // '#FF3333'
// 变暗颜色
adjustColor('#FF0000', { lightness: -0.2 });        // '#CC0000'
// 调整饱和度
adjustColor('#FF0000', { saturation: -0.5 });       // '#BF4040'
// 调整色调
adjustColor('#FF0000', { hue: 60 });                // '#FFFF00'
// 创建rgba颜色
adjustColor('#FF0000', { alpha: 0.5 });             // 'hsla(0, 100%, 50%, 0.5)'
```

### 浏览器工具

```typescript
import { 
  isMobile,         // 检测是否为移动设备
  isTablet,         // 检测是否为平板设备
  isDesktop,        // 检测是否为桌面设备
  isIOS,            // 检测是否为 iOS 设备
  isAndroid,        // 检测是否为 Android 设备
  isPortrait,       // 检测是否为竖屏模式
  isLandscape,      // 检测是否为横屏模式
  getDevicePixelRatio, // 获取设备像素比
  isTouchDevice,    // 判断是否支持触摸事件
  getDeviceType,    // 获取设备类型
  getBrowserInfo,   // 获取浏览器信息
  isBrowser,        // 检查是否为指定浏览器
  isChrome,         // 检查是否为 Chrome
  isFirefox,        // 检查是否为 Firefox
  isSafari,         // 检查是否为 Safari
  isEdge,           // 检查是否为 Edge
  isIE              // 检查是否为 IE
} from 'q-utils/utils';

// 示例
if (isMobile()) {
  // 显示移动版布局
}
if (isIOS()) {
  // iOS 特定处理
}
const deviceType = getDeviceType(); // 'mobile', 'tablet', 或 'desktop'
const browserInfo = getBrowserInfo();
if (isChrome()) {
  // Chrome 特定功能
}
```

## 高级用法

### 组合使用多个工具函数

```typescript
import { deepClone } from 'q-utils/object';
import { unique } from 'q-utils/array';
import { capitalize } from 'q-utils/string';

// 组合使用示例
const originalData = { 
  users: ['alice', 'bob', 'alice', 'charlie'],
  config: { theme: 'dark' }
};

// 深复制、去重并格式化用户名
const processedData = deepClone(originalData);
processedData.users = unique(processedData.users).map(capitalize);

console.log(processedData);
// { 
//   users: ['Alice', 'Bob', 'Charlie'],
//   config: { theme: 'dark' }
// }
```

### 自定义工具函数链

```typescript
// 创建自定义处理流程
function processUserData(data) {
  const { deepClone } = require('q-utils/object');
  const { unique } = require('q-utils/array');
  const { capitalize } = require('q-utils/string');
  
  return {
    ...deepClone(data),
    users: unique(data.users).map(capitalize)
  };
}

// 使用自定义函数
const result = processUserData({
  users: ['alice', 'bob', 'alice'],
  active: true
});
```

## 注意事项

1. 所有工具函数都设计为纯函数，不会修改原始输入
2. 大多数函数都有类型定义，可以在TypeScript项目中获得类型提示
3. 浏览器相关功能在非浏览器环境中会优雅降级

## 兼容性

Q-Utils 库支持所有现代浏览器和 Node.js 环境。对于特定的浏览器API，我们提供了检查函数和优雅降级措施。

## API文档

完整的API文档可以在我们的[在线文档](https://your-username.github.io/q-utils/)中查看，或通过以下命令在本地生成：

```bash
pnpm run docs
```

生成的文档将位于 `docs` 目录下。

## 字符串工具 (string)

### 基础操作

```typescript
import { isEmpty, isNotEmpty, length, reverse, repeat } from 'q-utils/string';

// 检查字符串是否为空
isEmpty(''); // true
isEmpty(' '); // false
isEmpty(null); // true
isEmpty(undefined); // true

// 检查字符串是否不为空
isNotEmpty('hello'); // true
isNotEmpty(''); // false
isNotEmpty(null); // false
isNotEmpty(undefined); // false

// 获取字符串长度
length('hello'); // 5
length('你好'); // 2
length(''); // 0
length(null); // 0
length(undefined); // 0

// 反转字符串
reverse('hello'); // 'olleh'
reverse('你好'); // '好你'
reverse(''); // ''
reverse(null); // ''
reverse(undefined); // ''

// 重复字符串
repeat('hello', 3); // 'hellohellohello'
repeat('a', 5); // 'aaaaa'
repeat('', 3); // ''
repeat('hello', 0); // ''
repeat('hello', -1); // ''
repeat(null, 3); // ''
repeat(undefined, 3); // ''
```

### 转换操作

```typescript
import { capitalize, capitalizeWords, camelize, dasherize, toNumber, toBoolean } from 'q-utils/string';

// 首字母大写
capitalize('hello world'); // 'Hello world'
capitalize('hello'); // 'Hello'
capitalize(''); // ''
capitalize(null); // ''
capitalize(undefined); // ''

// 每个单词首字母大写
capitalizeWords('hello world'); // 'Hello World'
capitalizeWords('hello'); // 'Hello'
capitalizeWords(''); // ''
capitalizeWords(null); // ''
capitalizeWords(undefined); // ''

// 驼峰命名转换
camelize('hello-world'); // 'helloWorld'
camelize('hello_world'); // 'helloWorld'
camelize('hello world'); // 'helloWorld'
camelize(''); // ''
camelize(null); // ''
camelize(undefined); // ''

// 短横线命名转换
dasherize('helloWorld'); // 'hello-world'
dasherize('hello_world'); // 'hello-world'
dasherize('hello world'); // 'hello-world'
dasherize(''); // ''
dasherize(null); // ''
dasherize(undefined); // ''

// 字符串转数字
toNumber('123'); // 123
toNumber('123.45'); // 123.45
toNumber('abc'); // 0
toNumber(''); // 0
toNumber(null); // 0
toNumber(undefined); // 0

// 字符串转布尔值
toBoolean('true'); // true
toBoolean('false'); // false
toBoolean('1'); // true
toBoolean('0'); // false
toBoolean(''); // false
toBoolean(null); // false
toBoolean(undefined); // false
```

### 截取和填充

```typescript
import { truncate, padStart, padEnd, left, right, isChinese } from 'q-utils/string';

// 截断字符串
truncate('Hello World', 8); // 'Hello...'
truncate('Hello World', 8, '...'); // 'Hello...'
truncate('Hello World', 8, '***'); // 'Hello***'
truncate('Hello World', 20); // 'Hello World'
truncate('', 8); // ''
truncate(null, 8); // ''
truncate(undefined, 8); // ''

// 左侧填充
padStart('123', 5, '0'); // '00123'
padStart('123', 5); // '  123'
padStart('123', 2); // '123'
padStart('', 5, '0'); // '00000'
padStart(null, 5, '0'); // '00000'
padStart(undefined, 5, '0'); // '00000'

// 右侧填充
padEnd('123', 5, '0'); // '12300'
padEnd('123', 5); // '123  '
padEnd('123', 2); // '123'
padEnd('', 5, '0'); // '00000'
padEnd(null, 5, '0'); // '00000'
padEnd(undefined, 5, '0'); // '00000'

// 获取左侧字符
left('Hello World', 5); // 'Hello'
left('Hello World', 20); // 'Hello World'
left('', 5); // ''
left(null, 5); // ''
left(undefined, 5); // ''

// 获取右侧字符
right('Hello World', 5); // 'World'
right('Hello World', 20); // 'Hello World'
right('', 5); // ''
right(null, 5); // ''
right(undefined, 5); // ''

// 检查是否包含中文字符
isChinese('你好'); // true
isChinese('Hello你好'); // true
isChinese('Hello'); // false
isChinese(''); // false
isChinese(null); // false
isChinese(undefined); // false
```

### 查找和替换

```typescript
import { indexOf, replace, replaceAll, includes, startsWith, endsWith } from 'q-utils/string';

// 查找子字符串位置
indexOf('Hello World', 'World'); // 6
indexOf('Hello World', 'world'); // -1
indexOf('Hello World', ''); // 0
indexOf('', 'World'); // -1
indexOf(null, 'World'); // -1
indexOf(undefined, 'World'); // -1

// 替换子字符串
replace('Hello World', 'World', 'JavaScript'); // 'Hello JavaScript'
replace('Hello World', 'world', 'JavaScript'); // 'Hello World'
replace('Hello World', '', 'JavaScript'); // 'JavaScriptHello World'
replace('', 'World', 'JavaScript'); // ''
replace(null, 'World', 'JavaScript'); // ''
replace(undefined, 'World', 'JavaScript'); // ''

// 替换所有匹配
replaceAll('Hello World World', 'World', 'JavaScript'); // 'Hello JavaScript JavaScript'
replaceAll('Hello World World', 'world', 'JavaScript'); // 'Hello World World'
replaceAll('Hello World World', '', 'JavaScript'); // 'JavaScriptHJavaScripteJavaScriptlJavaScriptlJavaScriptoJavaScript JavaScriptWJavaScriptoJavaScriptrJavaScriptlJavaScriptdJavaScript JavaScriptWJavaScriptoJavaScriptrJavaScriptlJavaScriptdJavaScript'
replaceAll('', 'World', 'JavaScript'); // ''
replaceAll(null, 'World', 'JavaScript'); // ''
replaceAll(undefined, 'World', 'JavaScript'); // ''

// 检查是否包含
includes('Hello World', 'World'); // true
includes('Hello World', 'world'); // false
includes('Hello World', ''); // true
includes('', 'World'); // false
includes(null, 'World'); // false
includes(undefined, 'World'); // false

// 检查是否以指定前缀开头
startsWith('Hello World', 'Hello'); // true
startsWith('Hello World', 'hello'); // false
startsWith('Hello World', ''); // true
startsWith('', 'Hello'); // false
startsWith(null, 'Hello'); // false
startsWith(undefined, 'Hello'); // false

// 检查是否以指定后缀结尾
endsWith('Hello World', 'World'); // true
endsWith('Hello World', 'world'); // false
endsWith('Hello World', ''); // true
endsWith('', 'World'); // false
endsWith(null, 'World'); // false
endsWith(undefined, 'World'); // false
```

### 清理和格式化

```typescript
import { trim, trimLeft, trimRight, normalizeSpace, format } from 'q-utils/string';

// 去除两端空白
trim('  Hello World  '); // 'Hello World'
trim('  Hello World'); // 'Hello World'
trim('Hello World  '); // 'Hello World'
trim(''); // ''
trim(null); // ''
trim(undefined); // ''

// 去除左侧空白
trimLeft('  Hello World  '); // 'Hello World  '
trimLeft('  Hello World'); // 'Hello World'
trimLeft('Hello World  '); // 'Hello World  '
trimLeft(''); // ''
trimLeft(null); // ''
trimLeft(undefined); // ''

// 去除右侧空白
trimRight('  Hello World  '); // '  Hello World'
trimRight('  Hello World'); // '  Hello World'
trimRight('Hello World  '); // 'Hello World'
trimRight(''); // ''
trimRight(null); // ''
trimRight(undefined); // ''

// 规范化空白字符
normalizeSpace('  Hello   World  '); // 'Hello World'
normalizeSpace('  Hello   World'); // 'Hello World'
normalizeSpace('Hello   World  '); // 'Hello World'
normalizeSpace(''); // ''
normalizeSpace(null); // ''
normalizeSpace(undefined); // ''

// 格式化字符串
format('Hello {0} World', 'JavaScript'); // 'Hello JavaScript World'
format('Hello {name} World', { name: 'JavaScript' }); // 'Hello JavaScript World'
format('Hello {0} {1}', 'JavaScript', 'World'); // 'Hello JavaScript World'
format(''); // ''
format(null); // ''
format(undefined); // ''
```

### 验证

```typescript
import { isNumeric, isAlpha, isAlphanumeric, isEmail, isUrl, isPhone } from 'q-utils/string';

// 是否为数字字符串
isNumeric('123'); // true
isNumeric('123.45'); // true
isNumeric('-123'); // true
isNumeric('abc'); // false
isNumeric(''); // false
isNumeric(null); // false
isNumeric(undefined); // false

// 是否为字母字符串
isAlpha('abc'); // true
isAlpha('ABC'); // true
isAlpha('123'); // false
isAlpha(''); // false
isAlpha(null); // false
isAlpha(undefined); // false

// 是否为字母数字字符串
isAlphanumeric('abc123'); // true
isAlphanumeric('ABC123'); // true
isAlphanumeric('123'); // true
isAlphanumeric('abc'); // true
isAlphanumeric(''); // false
isAlphanumeric(null); // false
isAlphanumeric(undefined); // false

// 是否为邮箱
isEmail('test@example.com'); // true
isEmail('test@example.co.uk'); // true
isEmail('test@example'); // false
isEmail(''); // false
isEmail(null); // false
isEmail(undefined); // false

// 是否为URL
isUrl('https://example.com'); // true
isUrl('http://example.com'); // true
isUrl('ftp://example.com'); // true
isUrl('example.com'); // false
isUrl(''); // false
isUrl(null); // false
isUrl(undefined); // false

// 是否为手机号
isPhone('13800138000'); // true
isPhone('1380013800'); // false
isPhone('138001380000'); // false
isPhone(''); // false
isPhone(null); // false
isPhone(undefined); // false
```

### 编码和解码

```typescript
import { encodeUrl, decodeUrl, encodeBase64, decodeBase64, encodeHtml, decodeHtml } from 'q-utils/string';

// URL编码
encodeUrl('Hello World'); // 'Hello%20World'
encodeUrl('你好'); // '%E4%BD%A0%E5%A5%BD'
encodeUrl(''); // ''
encodeUrl(null); // ''
encodeUrl(undefined); // ''

// URL解码
decodeUrl('Hello%20World'); // 'Hello World'
decodeUrl('%E4%BD%A0%E5%A5%BD'); // '你好'
decodeUrl(''); // ''
decodeUrl(null); // ''
decodeUrl(undefined); // ''

// Base64编码
encodeBase64('Hello World'); // 'SGVsbG8gV29ybGQ='
encodeBase64('你好'); // '5L2g5aW9'
encodeBase64(''); // ''
encodeBase64(null); // ''
encodeBase64(undefined); // ''

// Base64解码
decodeBase64('SGVsbG8gV29ybGQ='); // 'Hello World'
decodeBase64('5L2g5aW9'); // '你好'
decodeBase64(''); // ''
decodeBase64(null); // ''
decodeBase64(undefined); // ''

// HTML编码
encodeHtml('<div>Hello World</div>'); // '&lt;div&gt;Hello World&lt;/div&gt;'
encodeHtml(''); // ''
encodeHtml(null); // ''
encodeHtml(undefined); // ''

// HTML解码
decodeHtml('&lt;div&gt;Hello World&lt;/div&gt;'); // '<div>Hello World</div>'
decodeHtml(''); // ''
decodeHtml(null); // ''
decodeHtml(undefined); // ''
```

### 分割和合并

```typescript
import { split, join, splitByLength, splitLines } from 'q-utils/string';

// 分割字符串
split('Hello World', ' '); // ['Hello', 'World']
split('Hello,World', ','); // ['Hello', 'World']
split('Hello World', ''); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
split(''); // []
split(null); // []
split(undefined); // []

// 合并字符串数组
join(['Hello', 'World'], ' '); // 'Hello World'
join(['Hello', 'World'], ','); // 'Hello,World'
join(['Hello', 'World'], ''); // 'HelloWorld'
join([]); // ''
join(null); // ''
join(undefined); // ''

// 按长度分割
splitByLength('Hello World', 5); // ['Hello', ' Worl', 'd']
splitByLength('Hello World', 2); // ['He', 'll', 'o ', 'Wo', 'rl', 'd']
splitByLength('', 5); // []
splitByLength(null, 5); // []
splitByLength(undefined, 5); // []

// 按行分割
splitLines('Hello\nWorld'); // ['Hello', 'World']
splitLines('Hello\r\nWorld'); // ['Hello', 'World']
splitLines('Hello\rWorld'); // ['Hello', 'World']
splitLines(''); // []
splitLines(null); // []
splitLines(undefined); // []
```

### 统计

```typescript
import { count, frequency, getNumbers, getLetters } from 'q-utils/string';

// 统计子字符串出现次数
count('Hello World', 'l'); // 3
count('Hello World', 'World'); // 1
count('Hello World', ''); // 0
count('', 'l'); // 0
count(null, 'l'); // 0
count(undefined, 'l'); // 0

// 统计字符出现频率
frequency('Hello World'); // { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
frequency(''); // {}
frequency(null); // {}
frequency(undefined); // {}

// 获取字符串中的数字
getNumbers('Hello123World456'); // '123456'
getNumbers('Hello World'); // ''
getNumbers(''); // ''
getNumbers(null); // ''
getNumbers(undefined); // ''

// 获取字符串中的字母
getLetters('Hello123World456'); // 'HelloWorld'
getLetters('123456'); // ''
getLetters(''); // ''
getLetters(null); // ''
getLetters(undefined); // ''
```

### 比较

```typescript
import { compare, compareIgnoreCase, equals, equalsIgnoreCase, similarity } from 'q-utils/string';

// 比较两个字符串
compare('Hello', 'World'); // -1
compare('World', 'Hello'); // 1
compare('Hello', 'Hello'); // 0
compare('', ''); // 0
compare(null, ''); // 0
compare(undefined, ''); // 0

// 忽略大小写比较
compareIgnoreCase('Hello', 'hello'); // 0
compareIgnoreCase('Hello', 'World'); // -1
compareIgnoreCase('World', 'Hello'); // 1
compareIgnoreCase('', ''); // 0
compareIgnoreCase(null, ''); // 0
compareIgnoreCase(undefined, ''); // 0

// 检查是否相等
equals('Hello', 'Hello'); // true
equals('Hello', 'hello'); // false
equals('', ''); // true
equals(null, ''); // true
equals(undefined, ''); // true

// 忽略大小写检查是否相等
equalsIgnoreCase('Hello', 'hello'); // true
equalsIgnoreCase('Hello', 'World'); // false
equalsIgnoreCase('', ''); // true
equalsIgnoreCase(null, ''); // true
equalsIgnoreCase(undefined, ''); // true

// 计算相似度
similarity('Hello', 'Hello'); // 1
similarity('Hello', 'hello'); // 0.8
similarity('Hello', 'World'); // 0
similarity('', ''); // 1
similarity(null, ''); // 1
similarity(undefined, ''); // 1
```

### ID生成

```typescript
import { uuid, randomId } from 'q-utils/string';

// 生成UUID
uuid(); // '123e4567-e89b-12d3-a456-426614174000'

// 生成随机ID
randomId(); // 'a1b2c3d4'
randomId(10); // 'a1b2c3d4e5'
randomId(5, 'user_'); // 'user_a1b2c'
randomId(5, 'user_', '0123456789'); // 'user_12345'
``` 