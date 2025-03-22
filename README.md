# Q-Utils（beta）

一个功能丰富的前端工具函数库，提供了日常开发中常用的各类实用工具函数。采用TypeScript开发，拥有完整的类型定义和详细的文档注释。

## ✨ 特性

- 🔍 **全面的功能**：包含字符串、数组、对象、日期、函数等多种常用工具函数
- 🧩 **模块化设计**：按功能分类，可按需引入
- 📦 **轻量级**：无外部依赖，体积小巧
- 🔒 **类型安全**：使用TypeScript开发，提供完整的类型定义
- 📝 **详细文档**：每个函数都有详细的注释和使用示例
- ✅ **单元测试**：使用Jest进行完整的单元测试

## 📁 项目结构

```
q-utils/
├── src/                    # 源代码目录
│   ├── array/             # 数组相关工具函数
│   ├── browser/           # 浏览器相关工具函数
│   ├── color/             # 颜色相关工具函数
│   ├── date/              # 日期相关工具函数
│   ├── dom/               # DOM操作相关工具函数
│   ├── file/              # 文件操作相关工具函数
│   ├── function/          # 函数相关工具函数
│   ├── network/           # 网络操作相关工具函数
│   ├── number/            # 数字相关工具函数
│   ├── object/            # 对象相关工具函数
│   ├── storage/           # 存储管理相关工具函数
│   ├── string/            # 字符串相关工具函数
│   ├── utils/             # 通用工具函数
│   ├── animation/         # 动画相关工具函数
│   ├── audio/             # 音频相关工具函数
│   ├── video/             # 视频相关工具函数
│   └── image/             # 图片相关工具函数
├── test/                  # 测试目录
├── docs/                  # 文档目录
│   ├── USAGE.md          # 使用指南
│   ├── SUMMARY.md        # 项目总结
│   ├── array.md          # 数组相关文档
    └── ....              # 其他文档
├── examples/             # 示例目录
│   └── index.html       # 示例页面
├── dist/                # 构建输出目录
├── types/               # 类型定义目录
├── .eslintrc.js        # ESLint配置
├── .prettierrc         # Prettier配置
├── jest.config.js      # Jest配置
├── rollup.config.js    # Rollup配置
├── tsconfig.json       # TypeScript配置
├── package.json        # 项目配置
├── pnpm-lock.yaml      # pnpm依赖锁定文件
├── README.md           # 项目说明
├── CHANGELOG.md        # 更新日志
├── BUILD_CHANGELOG.md  # 构建日志
└── ERROR.md           # 错误日志
```

## 📦 安装

```bash
# 使用npm
npm install q-utils

# 使用yarn
yarn add q-utils

# 使用pnpm
pnpm add q-utils
```

## 🔨 使用

你可以导入整个库、使用命名空间方式导入或按需导入特定的功能：

```typescript
// 导入整个库
import * as qUtils from 'q-utils';

// 使用命名空间方式导入（推荐，避免命名冲突）
import { string, array, func, dom } from 'q-utils';

string.capitalize('hello'); // 'Hello'
array.unique([1, 2, 2, 3]); // [1, 2, 3]
const initOnce = func.once(() => console.log('只执行一次'));
dom.on(button, 'click', () => console.log('按钮被点击'));

// 按需导入特定功能（需注意同名函数问题）
import { capitalize } from 'q-utils/string';
import { unique } from 'q-utils/array';
```

### 解决同名函数问题

某些函数（如 `once`、`isEmpty`）在不同模块中都有实现，使用命名空间方式可以明确区分：

```typescript
import { func, dom, object, utils } from 'q-utils';

// 函数模块中的 once（确保函数只执行一次）
const initialize = func.once(() => {
  console.log('初始化操作，只会执行一次');
});

// DOM模块中的 once（一次性事件监听）
dom.once(button, 'click', () => {
  console.log('按钮点击事件，只会触发一次');
});

// 对象模块中的 isEmpty（检查对象是否为空）
object.isEmpty({}); // true

// 工具模块中的 isEmpty（通用检查值是否为空）
utils.isEmpty(''); // true
```

## 📑 功能分类

### 字符串操作

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

### 数字操作

```typescript
import { 
  isNumber,       // 检查值是否为数字
  randomInt,      // 生成指定范围内的随机整数
  round,          // 四舍五入到指定小数位
  clamp,          // 将数值限制在指定范围内
  formatNumber,   // 格式化数字（添加千分位等）
  toFixed,        // 修复JS原生toFixed精度问题
  toCurrency,     // 将数值格式化为货币格式
  toChineseCurrency, // 将数值转换为中文大写金额
  precision       // 精确计算工具（加、减、乘、除、四舍五入等）
} from 'q-utils/number';

// 示例
isNumber(123);                    // true
randomInt(1, 10);                 // 返回1-10之间的随机整数
round(3.1415, 2);                 // 3.14
clamp(15, 0, 10);                 // 10
formatNumber(1234567.89);         // '1,234,567.89'
toFixed(0.615, 2);                // '0.62'（解决JS精度问题）
toCurrency(1234.56, { prefix: '$' }); // '$1,234.56'
toChineseCurrency(1234.56);       // '壹仟贰佰叁拾肆元伍角陆分'
precision.add(0.1, 0.2);          // 0.3（避免精度问题）
```

### 数组操作

```typescript
import { 
  unique,         // 数组去重
  uniqueBy,       // 按指定属性或函数对数组对象去重
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
uniqueBy([{id:1}, {id:1}, {id:2}], 'id'); // [{id:1}, {id:2}]
flatten([1, [2, [3]], 4]);              // [1, 2, 3, 4]
shuffle([1, 2, 3, 4, 5]);               // 随机打乱数组
chunk([1, 2, 3, 4, 5], 2);              // [[1, 2], [3, 4], [5]]
intersection([1, 2, 3], [2, 3, 4]);     // [2, 3]
difference([1, 2, 3], [2, 3, 4]);       // [1]
groupBy([1, 2, 3, 4], n => n % 2 === 0 ? 'even' : 'odd'); // { even: [2, 4], odd: [1, 3] }
sortBy([3, 1, 4, 2], (a, b) => a - b);  // [1, 2, 3, 4]
```

### 颜色操作

```typescript
import { 
  hexToRgb,         // 十六进制转RGB
  rgbToHex,         // RGB转十六进制
  adjustColor       // 调整颜色（亮度、饱和度、色调、透明度）
} from 'q-utils/color';

// 示例
// 十六进制转RGB
hexToRgb('#FF0000');                                // {r: 255, g: 0, b: 0}
hexToRgb('#FF0000', { format: 'string' });          // "rgb(255, 0, 0)"
hexToRgb('#FF0000', { alpha: 0.5, format: 'string' }); // "rgba(255, 0, 0, 0.5)"

// RGB转十六进制
rgbToHex(255, 0, 0);                                // '#FF0000'
rgbToHex({ r: 255, g: 0, b: 0 });                   // '#FF0000'
rgbToHex([255, 0, 0]);                              // '#FF0000'

// 调整颜色
adjustColor('#FF0000', { lightness: 0.2 });         // 变亮：'#FF3333'
adjustColor('#FF0000', { lightness: -0.2 });        // 变暗：'#CC0000'
adjustColor('#FF0000', { saturation: -0.5 });       // 降低饱和度：'#BF4040'
adjustColor('#FF0000', { hue: 60 });                // 调整色调：'#FFFF00'
adjustColor('#FF0000', { alpha: 0.5 });             // 添加透明度
```

### 对象操作

```typescript
import { 
  deepClone,      // 深拷贝对象
  deepMerge,      // 深度合并对象
  pick,           // 从对象中选取指定属性
  omit,           // 从对象中排除指定属性
  isEmpty,        // 检查对象是否为空
  get             // 根据路径获取对象中的值
} from 'q-utils/object';

// 示例
deepClone({ a: 1, b: { c: 2 } });                  // 深拷贝对象
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);           // { a: 1, c: 3 }
omit({ a: 1, b: 2, c: 3 }, ['b']);                // { a: 1, c: 3 }
get({ a: { b: { c: 1 } } }, 'a.b.c');             // 1
```

### 网络操作

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
  .then(data => console.log(data));

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
  .then(data => console.log(data));

// 检测URL响应时间
ping('https://example.com')
  .then(time => console.log(`响应时间: ${time}ms`));

// 下载文件
downloadFile('https://example.com/file.pdf', { filename: '文档.pdf' });
```

### 文件操作

```typescript
import { 
  readFile,         // 读取文件内容
  saveFile,         // 保存内容为文件
  fileToBase64,     // 文件转Base64
  base64ToFile,     // Base64转文件
  getFileExtension, // 获取文件扩展名
  isValidFileType,  // 检查文件类型是否有效
  getFileSize       // 获取文件大小
} from 'q-utils/file';

// 示例
// 读取文件内容
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
fileInput.addEventListener('change', async () => {
  const file = fileInput.files?.[0];
  if (file) {
    // 文本文件内容
    const text = await readFile(file, 'text');
    console.log('文件内容:', text);
    
    // 获取文件大小
    const size = getFileSize(file);
    console.log('文件大小:', size); // 如 "1.25 MB"
    
    // 检查文件类型
    const isImage = isValidFileType(file, ['image/jpeg', 'image/png']);
    console.log('是否为图片:', isImage);
    
    // 转换为Base64
    const base64 = await fileToBase64(file);
    
    // 保存文件
    saveFile('Hello, World!', 'hello.txt');
  }
});

// 获取文件扩展名
getFileExtension('document.pdf'); // 'pdf'

// Base64转文件
const imgDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAA...';
const imgFile = base64ToFile(imgDataUrl, 'image.png');
```

### 日期操作

```typescript
import { 
  formatDate,     // 日期格式化
  isDate,         // 检查值是否为有效日期
  timeAgo,        // 将日期格式化为相对时间
  isSameDay,      // 检查两个日期是否是同一天
  addDays,        // 添加天数
  addMonths,      // 添加月数
  getWeekNumber   // 获取日期是一年中的第几周
} from 'q-utils/date';

// 示例
formatDate(new Date(), 'YYYY-MM-DD');       // '2023-01-01'
isDate(new Date());                          // true
timeAgo(new Date(Date.now() - 3600000));    // '1小时前'
addDays(new Date(), 5);                      // 添加5天后的日期
```

### 函数操作

```typescript
import { 
  debounce,       // 函数防抖
  cancelDebounce, // 取消防抖函数
  throttle,       // 函数节流
  cancelThrottle, // 取消节流函数
  once,           // 确保函数只执行一次
  memoize,        // 缓存函数结果
  curry,          // 函数柯里化
  compose,        // 从右到左组合函数
  pipe,           // 从左到右组合函数
  sleep           // 延迟执行
} from 'q-utils/function';

// 示例
const debouncedFn = debounce(() => console.log('执行'), 300);
const throttledFn = throttle(() => console.log('执行'), 300);
const initOnce = once(() => console.log('只执行一次'));
const cachedFn = memoize(expensiveCalculation);
const curriedAdd = curry((a, b, c) => a + b + c);
const pipeline = compose(toString, multiply2, add10);
await sleep(1000); // 暂停1秒
```

### DOM操作

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

### 通用工具

```typescript
import { 
  getType,        // 获取值的类型
  isType,         // 检查值是否为指定类型
  isPlainObject,  // 检查值是否为普通对象
  isEmpty,        // 检查值是否为空
  uuid,           // 生成 UUID
  randomId,       // 生成随机 ID
  copyToClipboard, // 复制内容到剪贴板
  isCopySupported // 检查剪贴板功能是否可用
} from 'q-utils/utils';

// 示例
getType([]);                              // 'array'
isType('hello', 'string');                // true
isPlainObject({});                        // true
isEmpty('');                              // true
uuid();                                   // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
randomId(8);                              // 'a1b2c3d4'
copyToClipboard('文本内容').then(() => console.log('复制成功'));
```

### 存储管理

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
```

### Cookie 管理

```typescript
import { 
  setCookie,    // 设置 Cookie
  getCookie,    // 获取 Cookie
  deleteCookie, // 删除 Cookie
  hasCookie,    // 检查 Cookie 是否存在
  getAllCookies // 获取所有 Cookie
} from 'q-utils/utils';

// 示例
setCookie('username', 'alice', { expires: 7, path: '/' });
const username = getCookie('username');
deleteCookie('username');
```

### URL 操作

```typescript
import { 
  parseURLParams,    // 解析 URL 参数
  buildURL,          // 构建 URL
  getURLPath,        // 获取 URL 路径
  getURLDomain,      // 获取 URL 域名
  isHTTPS,           // 检查是否为 HTTPS
  getFileNameFromURL, // 从 URL 中提取文件名
  isAbsoluteURL,     // 检查是否为绝对 URL
  joinURL            // 合并 URL
} from 'q-utils/utils';

// 示例
const params = parseURLParams('https://example.com?id=123');
const url = buildURL('/api/users', { id: '123' });
const path = getURLPath('https://example.com/products/123');
```

### 设备和浏览器检测

```typescript
import { 
  isMobile,         // 检测是否为移动设备
  isTablet,         // 检测是否为平板设备
  isDesktop,        // 检测是否为桌面设备
  isIOS,            // 检测是否为 iOS 设备
  isAndroid,        // 检测是否为 Android 设备
  getBrowserInfo,   // 获取浏览器信息
  isChrome,         // 检查是否为 Chrome
  isFirefox,        // 检查是否为 Firefox
  isSafari          // 检查是否为 Safari
} from 'q-utils/utils';

// 示例
if (isMobile()) {
  // 显示移动版布局
}
const browserInfo = getBrowserInfo();
console.log(`浏览器: ${browserInfo.name} ${browserInfo.version}`);
```

## 数据分析相关函数

### growthRate
计算增长率
```typescript
function growthRate(initialValue: number, finalValue: number): number
```

### compoundGrowthRate
计算复合增长率
```typescript
function compoundGrowthRate(initialValue: number, finalValue: number, periods: number): number
```

### movingAverage
计算移动平均
```typescript
function movingAverage(values: number[], windowSize: number): number[]
```

### exponentialMovingAverage
计算指数移动平均
```typescript
function exponentialMovingAverage(values: number[], alpha: number): number[]
```

### trend
计算趋势
```typescript
function trend(values: number[]): number
```

### distribution
计算分布
```typescript
function distribution(values: number[], bins: number): Record<string, number>
```

### correlation
计算相关性
```typescript
function correlation(x: number[], y: number[]): number
```

### forecast
计算预测值
```typescript
function forecast(values: number[], periods: number): number[]
```

### seasonality
计算季节性
```typescript
function seasonality(values: number[], period: number): number[]
```

### outliers
计算异常值
```typescript
function outliers(values: number[], threshold?: number): number[]
```

## 功能模块

### 数字处理 (number)
- 基础操作：数值检查、范围判断、精度处理
- 格式化：千分位、百分比、中文数字、货币
- 金融计算：利息、贷款、投资、税收
- 数学计算：阶乘、斐波那契、质数、公约数
- 进制转换：二进制、八进制、十六进制
- 随机数：随机数、随机整数、随机浮点数
- 范围处理：范围限制、归一化、插值、映射
- 特殊处理：约等于、有限数、NaN、无穷大
- 统计分析：平均值、中位数、众数、标准差
- 单位转换：字节、时间、距离、重量
- 动画计算：缓动、弹簧、贝塞尔、插值
- 性能优化：精度优化、缓存、节流、防抖
- 数据分析：趋势、相关性、回归、预测

### 字符串工具 (string)

提供了一系列字符串操作工具函数，包括：

1. 基础操作
   - `isEmpty`: 检查字符串是否为空
   - `isNotEmpty`: 检查字符串是否不为空
   - `length`: 获取字符串长度
   - `reverse`: 反转字符串
   - `repeat`: 重复字符串

2. 转换操作
   - `capitalize`: 首字母大写
   - `capitalizeWords`: 每个单词首字母大写
   - `camelize`: 驼峰命名转换
   - `dasherize`: 短横线命名转换
   - `toNumber`: 字符串转数字
   - `toBoolean`: 字符串转布尔值

3. 截取和填充
   - `truncate`: 截断字符串
   - `padStart`: 左侧填充
   - `padEnd`: 右侧填充
   - `left`: 获取左侧字符
   - `right`: 获取右侧字符
   - `isChinese`: 检查是否包含中文字符

4. 查找和替换
   - `indexOf`: 查找子字符串位置
   - `replace`: 替换子字符串
   - `replaceAll`: 替换所有匹配
   - `includes`: 检查是否包含
   - `startsWith`: 检查是否以指定前缀开头
   - `endsWith`: 检查是否以指定后缀结尾

5. 清理和格式化
   - `trim`: 去除两端空白
   - `trimLeft`: 去除左侧空白
   - `trimRight`: 去除右侧空白
   - `normalizeSpace`: 规范化空白字符
   - `format`: 格式化字符串

6. 验证
   - `isNumeric`: 是否为数字字符串
   - `isAlpha`: 是否为字母字符串
   - `isAlphanumeric`: 是否为字母数字字符串
   - `isEmail`: 是否为邮箱
   - `isUrl`: 是否为URL
   - `isPhone`: 是否为手机号

7. 编码和解码
   - `encodeUrl`: URL编码
   - `decodeUrl`: URL解码
   - `encodeBase64`: Base64编码
   - `decodeBase64`: Base64解码
   - `encodeHtml`: HTML编码
   - `decodeHtml`: HTML解码

8. 分割和合并
   - `split`: 分割字符串
   - `join`: 合并字符串数组
   - `splitByLength`: 按长度分割
   - `splitLines`: 按行分割

9. 统计
   - `count`: 统计子字符串出现次数
   - `frequency`: 统计字符出现频率
   - `getNumbers`: 获取字符串中的数字
   - `getLetters`: 获取字符串中的字母

10. 比较
    - `compare`: 比较两个字符串
    - `compareIgnoreCase`: 忽略大小写比较
    - `equals`: 检查是否相等
    - `equalsIgnoreCase`: 忽略大小写检查是否相等
    - `similarity`: 计算相似度

11. ID生成
    - `uuid`: 生成UUID
    - `randomId`: 生成随机ID

## 开发

```bash
# 安装依赖
pnpm install

# 运行测试
pnpm test

# 构建
pnpm build

# 生成文档
pnpm docs
```

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

MIT

