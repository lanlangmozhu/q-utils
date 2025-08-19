# Q-Utils 项目总结

## 项目概述

Q-Utils 是一个功能丰富的前端工具函数库，提供了开发中常用的各类工具函数。本项目采用 TypeScript 开发，拥有完整的类型定义和详细的文档注释。

## 主要特性

1. **全面的功能**
   - 类型检测工具
   - 空值检测工具
   - 布尔值工具
   - Promise 工具
   - 正则表达式工具
   - 错误处理工具
   - Symbol 工具
   - BigInt 工具
   - 字符串工具
   - 数组工具
   - 对象工具
   - 函数工具
   - 日期工具
   - DOM 工具
   - 存储工具
   - 网络工具
   - 数字工具
   - 颜色工具
   - 浏览器工具

2. **模块化设计**
   - 按功能分类，每个模块独立
   - 支持按需引入
   - 避免命名冲突

3. **类型安全**
   - 使用 TypeScript 开发
   - 提供完整的类型定义
   - 支持类型推导

4. **详细文档**
   - 每个函数都有详细的注释
   - 包含参数说明和返回值说明
   - 提供使用示例

5. **单元测试**
   - 使用 Jest 进行测试
   - 覆盖所有功能
   - 保证代码质量

## 技术栈

- 开发语言：TypeScript
- 包管理器：pnpm
- 构建工具：Rollup
- 测试框架：Jest
- 代码格式化：Prettier
- 代码检查：ESLint
- 文档生成：TypeDoc

## 项目结构

Q-Utils 采用模块化设计，每个功能模块都包含完整的实现、测试和文档：

```
q-utils/
├── src/                   # 源代码目录
│   ├── array/            # 数组相关工具函数
│   │   ├── __tests__/    # 数组模块测试文件
│   │   ├── README.md     # 数组模块详细文档
│   │   ├── basic.ts      # 基础数组操作
│   │   ├── compare.ts    # 数组比较操作
│   │   ├── group.ts      # 数组分组操作
│   │   ├── operation.ts  # 数组操作工具
│   │   ├── random.ts     # 数组随机操作
│   │   ├── sort.ts       # 数组排序操作
│   │   ├── stats.ts      # 数组统计操作
│   │   ├── transform.ts  # 数组转换操作
│   │   ├── tree.ts       # 树形数组操作
│   │   ├── unique.ts     # 数组去重操作
│   │   ├── validate.ts   # 数组验证操作
│   │   └── index.ts      # 数组模块入口
│   ├── string/           # 字符串相关工具函数
│   │   ├── __tests__/    # 字符串模块测试文件
│   │   ├── README.md     # 字符串模块详细文档
│   │   ├── basic.ts      # 基础字符串操作
│   │   ├── compare.ts    # 字符串比较操作
│   │   ├── encode.ts     # 字符串编码操作
│   │   ├── format.ts     # 字符串格式化
│   │   ├── search.ts     # 字符串搜索替换
│   │   ├── split.ts      # 字符串分割合并
│   │   ├── stats.ts      # 字符串统计操作
│   │   ├── substring.ts  # 字符串截取操作
│   │   ├── transform.ts  # 字符串转换操作
│   │   ├── uuid.ts       # UUID生成工具
│   │   ├── validate.ts   # 字符串验证操作
│   │   └── index.ts      # 字符串模块入口
│   ├── number/           # 数字相关工具函数
│   │   ├── __tests__/    # 数字模块测试文件
│   │   ├── README.md     # 数字模块详细文档
│   │   ├── analysis.ts   # 数据分析工具
│   │   ├── basic.ts      # 基础数字操作
│   │   ├── finance.ts    # 金融计算工具
│   │   ├── format.ts     # 数字格式化
│   │   ├── math.ts       # 数学计算工具
│   │   ├── range.ts      # 数字范围工具
│   │   ├── random.ts     # 随机数生成
│   │   ├── special.ts    # 特殊数字处理
│   │   └── index.ts      # 数字模块入口
│   ├── date/             # 日期相关工具函数
│   │   ├── __tests__/    # 日期模块测试文件
│   │   ├── README.md     # 日期模块详细文档
│   │   ├── basic.ts      # 基础日期操作
│   │   ├── calculation.ts # 日期计算工具
│   │   ├── range.ts      # 日期范围工具
│   │   ├── time.ts       # 时间工具
│   │   └── index.ts      # 日期模块入口
│   ├── object/           # 对象相关工具函数
│   │   ├── __tests__/    # 对象模块测试文件
│   │   ├── README.md     # 对象模块详细文档
│   │   ├── deepClone.ts  # 深拷贝工具
│   │   ├── getValueByPath.ts # 路径获取值
│   │   ├── setValueByPath.ts # 路径设置值
│   │   ├── pick.ts       # 对象属性选择
│   │   └── index.ts      # 对象模块入口
│   ├── dom/              # DOM操作相关工具函数
│   │   ├── __tests__/    # DOM模块测试文件
│   │   ├── README.md     # DOM模块详细文档
│   │   ├── animation.ts  # DOM动画工具
│   │   ├── basic.ts      # 基础DOM操作
│   │   ├── element.ts    # 元素操作工具
│   │   ├── event.ts      # 事件处理工具
│   │   └── index.ts      # DOM模块入口
│   ├── function/         # 函数相关工具函数
│   │   ├── __tests__/    # 函数模块测试文件
│   │   ├── README.md     # 函数模块详细文档
│   │   └── index.ts      # 函数模块入口
│   ├── network/          # 网络操作相关工具函数
│   │   ├── __tests__/    # 网络模块测试文件
│   │   ├── README.md     # 网络模块详细文档
│   │   └── index.ts      # 网络模块入口
│   ├── storage/          # 存储管理相关工具函数
│   │   ├── __tests__/    # 存储模块测试文件
│   │   ├── README.md     # 存储模块详细文档
│   │   └── index.ts      # 存储模块入口
│   ├── browser/          # 浏览器相关工具函数
│   │   ├── __tests__/    # 浏览器模块测试文件
│   │   ├── README.md     # 浏览器模块详细文档
│   │   └── index.ts      # 浏览器模块入口
│   ├── file/             # 文件操作相关工具函数
│   │   ├── __tests__/    # 文件模块测试文件
│   │   ├── README.md     # 文件模块详细文档
│   │   └── index.ts      # 文件模块入口
│   ├── color/            # 颜色相关工具函数
│   │   ├── __tests__/    # 颜色模块测试文件
│   │   ├── README.md     # 颜色模块详细文档
│   │   └── index.ts      # 颜色模块入口
│   ├── bigint/           # 大整数相关工具函数
│   │   ├── __tests__/    # 大整数模块测试文件
│   │   ├── README.md     # 大整数模块详细文档
│   │   └── index.ts      # 大整数模块入口
│   ├── boolean/          # 布尔值相关工具函数
│   │   ├── __tests__/    # 布尔值模块测试文件
│   │   ├── README.md     # 布尔值模块详细文档
│   │   └── index.ts      # 布尔值模块入口
│   ├── empty/            # 空值相关工具函数
│   │   ├── __tests__/    # 空值模块测试文件
│   │   ├── README.md     # 空值模块详细文档
│   │   └── index.ts      # 空值模块入口
│   ├── error/            # 错误处理相关工具函数
│   │   ├── __tests__/    # 错误处理模块测试文件
│   │   ├── README.md     # 错误处理模块详细文档
│   │   └── index.ts      # 错误处理模块入口
│   ├── promise/          # Promise相关工具函数
│   │   ├── __tests__/    # Promise模块测试文件
│   │   ├── README.md     # Promise模块详细文档
│   │   └── index.ts      # Promise模块入口
│   ├── regexp/           # 正则表达式相关工具函数
│   │   ├── __tests__/    # 正则表达式模块测试文件
│   │   ├── README.md     # 正则表达式模块详细文档
│   │   └── index.ts      # 正则表达式模块入口
│   ├── symbol/           # Symbol相关工具函数
│   │   ├── __tests__/    # Symbol模块测试文件
│   │   ├── README.md     # Symbol模块详细文档
│   │   └── index.ts      # Symbol模块入口
│   ├── type/             # 类型检测相关工具函数
│   │   ├── __tests__/    # 类型检测模块测试文件
│   │   ├── README.md     # 类型检测模块详细文档
│   │   └── index.ts      # 类型检测模块入口
│   └── index.ts          # 主入口文件
├── docs/                 # 项目级文档目录
│   ├── USAGE.md         # 使用指南
│   ├── SUMMARY.md       # 项目总结
│   └── index.md         # 项目介绍
├── examples/             # 示例目录
│   └── index.html       # 示例页面
└── dist/                 # 构建输出目录
```

### 模块化设计优势

- **就近原则**：每个模块的测试和文档都放在对应的源代码目录下
- **易于维护**：修改代码时，相关的测试和文档就在同一目录
- **清晰结构**：每个模块都是完整的、自包含的功能单元
- **便于扩展**：新增模块时，只需在对应目录下创建相关文件

## 功能模块

### 类型检测

提供了一系列用于类型检测的工具函数，包括：
- `isString`: 检查值是否为字符串
- `isNumber`: 检查值是否为数字
- `isBoolean`: 检查值是否为布尔值
- `isArray`: 检查值是否为数组
- `isObject`: 检查值是否为对象
- `isFunction`: 检查值是否为函数
- `isNull`: 检查值是否为 null
- `isUndefined`: 检查值是否为 undefined
- `getType`: 获取值的类型

### 空值检测

提供了一系列用于空值检测的工具函数，包括：
- `isEmpty`: 检查值是否为空
- `isEmptyString`: 检查字符串是否为空
- `isEmptyArray`: 检查数组是否为空
- `isEmptyObject`: 检查对象是否为空
- `isNil`: 检查值是否为 null 或 undefined

### 布尔值工具

提供了一系列用于布尔值操作的工具函数，包括：
- `toBoolean`: 将值转换为布尔值
- `isTruthy`: 检查值是否为真值
- `isFalsy`: 检查值是否为假值

### Promise 工具

提供了一系列用于 Promise 操作的工具函数，包括：
- `delay`: 延迟执行
- `timeout`: 超时控制
- `retry`: 重试机制
- `concurrent`: 并发控制
- `debounce`: 防抖
- `throttle`: 节流

### 正则表达式工具

提供了一系列用于正则表达式操作的工具函数，包括：
- `escapeRegExp`: 转义正则表达式特殊字符
- `createRegExp`: 创建正则表达式
- `matchAll`: 获取所有匹配结果
- `replaceAll`: 替换所有匹配项
- `split`: 按正则表达式分割字符串
- `test`: 测试字符串是否匹配
- `exec`: 执行正则表达式匹配
- `execAll`: 执行所有正则表达式匹配
- `match`: 返回匹配结果
- `search`: 返回匹配位置
- `replace`: 替换匹配项
- `getCaptureGroups`: 获取所有捕获组
- `getFlags`: 获取所有标志
- `hasFlag`: 检查是否包含指定标志
- `addFlag`: 添加标志
- `removeFlag`: 移除标志
- `getSource`: 获取源字符串
- `toString`: 获取完整字符串表示
- `clone`: 克隆正则表达式
- `combine`: 合并多个正则表达式
- `countMatches`: 获取匹配次数
- `firstMatchIndex`: 获取第一个匹配位置
- `lastMatchIndex`: 获取最后一个匹配位置
- `allMatchIndices`: 获取所有匹配位置
- `allMatchRanges`: 获取所有匹配范围
- `allMatchTexts`: 获取所有匹配文本
- `allCaptureGroups`: 获取所有捕获组值
- `getNamedCaptureGroups`: 获取所有命名捕获组
- `allNamedCaptureGroups`: 获取所有命名捕获组值
- `allMatchPositions`: 获取所有匹配位置和文本
- `allMatchRangesWithText`: 获取所有匹配范围和文本
- `allMatchPositionsWithGroups`: 获取所有匹配位置和捕获组
- `allMatchRangesWithGroups`: 获取所有匹配范围和捕获组
- `allMatchPositionsWithNamedGroups`: 获取所有匹配位置和命名捕获组
- `allMatchRangesWithNamedGroups`: 获取所有匹配范围和命名捕获组

### 错误处理工具

提供了一系列用于错误处理的工具函数，包括：
- `createError`: 创建自定义错误
- `isError`: 检查值是否为错误对象
- `isErrorInstance`: 检查错误是否为指定类型
- `getErrorStack`: 获取错误堆栈
- `getErrorMessage`: 获取错误信息
- `getErrorName`: 获取错误名称
- `getErrorCause`: 获取错误原因
- `setErrorCause`: 设置错误原因
- `wrapError`: 包装错误
- `unwrapError`: 解包错误

### Symbol 工具

提供了一系列用于 Symbol 操作的工具函数，包括：
- `createSymbol`: 创建 Symbol
- `isSymbol`: 检查值是否为 Symbol
- `getSymbolDescription`: 获取 Symbol 描述
- `getSymbolKey`: 获取 Symbol 键
- `getSymbolKeys`: 获取所有 Symbol 键
- `getSymbolValues`: 获取所有 Symbol 值
- `getSymbolEntries`: 获取所有 Symbol 键值对
- `hasSymbol`: 检查对象是否包含指定 Symbol
- `deleteSymbol`: 删除对象中的 Symbol

### BigInt 工具

提供了一系列用于 BigInt 操作的工具函数，包括：
- `isBigInt`: 检查值是否为 BigInt
- `toBigInt`: 转换为 BigInt
- `fromBigInt`: 从 BigInt 转换
- `addBigInt`: BigInt 加法
- `subtractBigInt`: BigInt 减法
- `multiplyBigInt`: BigInt 乘法
- `divideBigInt`: BigInt 除法
- `remainderBigInt`: BigInt 取余
- `powerBigInt`: BigInt 幂运算
- `negateBigInt`: BigInt 取负
- `absBigInt`: BigInt 绝对值
- `minBigInt`: BigInt 最小值
- `maxBigInt`: BigInt 最大值
- `clampBigInt`: BigInt 范围限制
- `randomBigInt`: 随机 BigInt

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

## 数字处理模块总结

### 功能概述
数字处理模块提供了全面的数字操作功能，包括基础操作、格式化、金融计算、数学计算、进制转换、随机数、范围处理、特殊处理、统计分析、单位转换、动画计算、性能优化和数据分析等功能。

### 核心功能
1. 基础操作
   - 数值检查：`isNumber`、`isInteger`、`isPositive`
   - 范围判断：`inRange`、`toFixed`

2. 格式化
   - 千分位：`toThousands`
   - 百分比：`toPercentage`
   - 中文数字：`toChinese`
   - 货币：`toCurrency`

3. 金融计算
   - 利息：`calculateInterest`
   - 贷款：`calculateLoan`
   - 投资：`calculateInvestment`
   - 税收：`calculateTax`

4. 数学计算
   - 阶乘：`factorial`
   - 斐波那契：`fibonacci`
   - 质数：`isPrime`
   - 公约数：`gcd`、`lcm`

5. 进制转换
   - 二进制：`toBinary`、`fromBinary`
   - 八进制：`toOctal`、`fromOctal`
   - 十六进制：`toHex`、`fromHex`

6. 随机数
   - 随机数：`random`
   - 随机整数：`randomInt`
   - 随机浮点数：`randomFloat`
   - 范围随机：`randomRange`

7. 范围处理
   - 范围限制：`clamp`
   - 归一化：`normalize`
   - 线性插值：`lerp`
   - 范围映射：`map`

8. 特殊处理
   - 约等于：`approximatelyEqual`
   - 有限数：`isFinite`
   - NaN：`isNaN`
   - 无穷大：`isInfinity`

9. 统计分析
   - 平均值：`mean`
   - 中位数：`median`
   - 众数：`mode`
   - 标准差：`standardDeviation`
   - 方差：`variance`

10. 单位转换
    - 字节：`formatBytes`
    - 时间：`formatSeconds`
    - 距离：`formatDistance`
    - 重量：`formatWeight`

11. 动画计算
    - 缓动：`easeInOut`
    - 弹簧：`spring`
    - 贝塞尔：`bezier`
    - 插值：`interpolate`

12. 性能优化
    - 精度优化：`optimizePrecision`
    - 缓存：`cache`
    - 节流：`throttle`
    - 防抖：`debounce`

13. 数据分析
    - 趋势：`trend`
    - 相关性：`correlation`
    - 回归：`regression`
    - 预测：`forecast`

### 技术特点
1. 类型安全：完整的 TypeScript 类型定义
2. 性能优化：使用缓存和优化算法
3. 精度处理：处理浮点数精度问题
4. 国际化：支持多语言和地区格式
5. 可扩展：支持自定义配置和扩展

### 使用建议
1. 金融计算时注意精度问题
2. 大量数据计算时使用缓存
3. 动画计算时注意性能
4. 数据分析时注意数据质量
5. 单位转换时注意国际化

### 更新记录
- 2024-03-21: 重构目录结构，优化功能分类
- 2024-03-19: 添加动画计算和性能优化相关方法
- 2024-03-18: 添加数据分析和统计分析相关方法

## 已完成工作

### 项目结构搭建
- 使用 TypeScript 建立项目基础结构，提供完整类型定义
- 配置 ESLint、Prettier、Jest 等开发工具，确保代码质量和一致性
- 设置 Rollup 构建系统，支持各种模块格式（ESM、CommonJS、UMD）
- 创建模块化目录结构，按功能模块组织代码，便于维护和扩展
- 设置 npm 包配置，支持整体导入和按需引入

### 工具函数实现

1. **字符串操作**
   - `trim`：去除字符串两端空白字符，支持自定义字符
   - `capitalize`：首字母大写转换
   - `camelize`：连字符分隔字符串转驼峰式（如 'background-color' → 'backgroundColor'）
   - `dasherize`：驼峰式字符串转横线连接（如 'backgroundColor' → 'background-color'）
   - `truncate`：智能截断字符串，支持自定义省略符号和位置
   - `escape`/`unescape`：HTML特殊字符转义与反转义
   - `template`：高级模板字符串处理，支持变量替换
   - `format`：格式化字符串，支持多种参数形式

2. **数组操作**
   - `unique`/`uniqueBy`：数组去重，支持对象数组按指定属性去重
   - `flatten`：多层数组扁平化，可指定深度
   - `shuffle`：数组随机排序，使用高质量随机算法
   - `chunk`：将数组分割成指定大小的块
   - `intersection`/`difference`：数组交集和差集操作
   - `groupBy`：按指定规则对数组元素进行分组
   - `sortBy`：多条件数组排序，支持升序和降序

3. **对象操作**
   - `deepClone`：深度克隆对象，包括循环引用处理
   - `deepMerge`：递归合并对象
   - `pick`/`omit`：选取或排除对象属性
   - `getValueByPath`/`setValueByPath`：通过路径安全访问和设置对象属性
   - `isEmpty`：智能检测对象是否为空
   - `isEqual`：深度比较两个值是否相等

4. **数字操作**
   - `formatNumber`：格式化数字，支持千分位、小数位等
   - `toCurrency`：货币格式化，支持不同符号和位置
   - `toChineseCurrency`：数字转中文大写金额
   - `precision`：精确计算工具，解决JavaScript浮点数精度问题
   - `randomInt`：生成指定范围内的随机整数
   - `round`/`clamp`：数值舍入和范围限制

5. **函数操作**
   - `debounce`：函数防抖，避免频繁触发
   - `throttle`：函数节流，限制执行频率
   - `once`：确保函数只执行一次
   - `memoize`：函数结果缓存
   - `curry`/`compose`/`pipe`：函数式编程工具
   - `sleep`：异步延迟执行

6. **日期操作**
   - `formatDate`：日期格式化，支持多种格式模板
   - `timeAgo`：将日期转换为"xx时间前"的相对格式
   - `addDays`/`addMonths`/`addYears`：日期加减操作
   - `isSameDay`/`isToday`/`isBefore`/`isAfter`：日期比较
   - `getWeekNumber`/`getDaysInMonth`：日期信息获取
   - `isLeapYear`：闰年判断

7. **DOM操作**
   - `querySelector`/`querySelectorAll`：增强的元素选择器
   - `addClass`/`removeClass`/`toggleClass`/`hasClass`：CSS类名操作
   - `getStyle`/`setStyle`：DOM样式获取和设置
   - `on`/`off`/`once`：事件绑定与解绑
   - `createElement`：便捷创建DOM元素
   - `insertBefore`/`insertAfter`：元素插入
   - `scrollTo`：平滑滚动
   - `getDomPosition`：获取元素位置信息

8. **颜色操作**
   - `rgbToHex`/`hexToRgb`：颜色格式转换
   - `adjustColor`：调整颜色亮度、饱和度、色相
   - `getContrastColor`：获取适合背景色的文本颜色
   - `isValidColor`：颜色格式验证

9. **浏览器操作**
   - `cookie`：完整的Cookie管理（设置、获取、删除）
   - `localStorage`/`sessionStorage`：存储增强，支持对象和过期时间
   - `copyToClipboard`：跨浏览器复制内容到剪贴板
   - `url`：URL解析和构建工具
   - `parseURLParams`/`buildURL`：URL参数处理
   - `getURLPath`/`getURLDomain`：URL信息获取

10. **设备检测**
    - `isMobile`/`isTablet`/`isDesktop`：设备类型检测
    - `isIOS`/`isAndroid`：操作系统检测
    - `getBrowserInfo`：获取浏览器名称和版本
    - `isBrowser`/`isChrome`/`isFirefox`/`isSafari`：浏览器检测
    - `isPortrait`/`isLandscape`：屏幕方向检测
    - `isTouchDevice`：触摸设备检测
    - `getDevicePixelRatio`：获取设备像素比

11. **通用工具**
    - `getType`/`isType`：精确类型判断
    - `isPlainObject`：普通对象检测
    - `uuid`/`randomId`：生成唯一标识符
    - `isEmpty`：统一的空值检测
    - `supportsCSSProperty`/`supportsWebAPI`：特性检测

### 文档和测试
- 为每个函数添加详细的 JSDoc 注释，包括参数、返回值和示例
- 编写完整的单元测试，确保功能正确性和边界情况处理
- 创建 README、使用指南和 API 文档
- 编写贡献指南和发布指南
- 提供在线文档，便于查询和使用

### 辅助工具
- 初始化脚本：帮助新用户快速设置开发环境
- 依赖更新脚本：安全地更新项目依赖
- 示例文件：展示库的各种功能使用方式
- 开发环境配置：开发、测试和构建流程

## 后续扩展方向

### 功能扩展
1. **更多工具函数**
   - 更多颜色处理工具（颜色对比度计算、色板生成等）
   - 更多的数学计算工具（统计函数、科学计算等）
   - 校验工具（邮箱、手机号、身份证等格式验证）
   - 国际化支持工具（多语言、货币、日期时区等）
   - 安全相关工具（加密解密、XSS防护等）

2. **浏览器能力**
   - 网络请求封装（基于fetch，支持拦截器、超时、重试等）
   - 媒体查询工具（响应式设计辅助）
   - 性能监控工具（页面性能指标收集与分析）
   - Web API 封装（如 WebSocket、IndexedDB等）

3. **性能优化工具**
   - 性能测量工具（函数执行时间、内存使用等）
   - 虚拟列表/滚动优化工具（处理大数据列表）
   - 资源预加载工具（图片、脚本等）
   - 懒加载工具（组件、图片等）

### 工程化改进
1. **CI/CD**
   - 设置 GitHub Actions 自动构建和测试
   - 自动发布到 npm
   - 自动生成更新日志
   - 版本管理自动化

2. **文档升级**
   - 构建交互式文档网站
   - 提供在线演示和 CodeSandbox 示例
   - 多语言文档支持
   - API 自动生成与更新

3. **包体积优化**
   - 分析和优化包体积
   - 提供更细粒度的模块导入方式
   - Tree-shaking 优化
   - 按需加载支持

## 使用说明

### 安装
```bash
# 使用npm
npm install q-utils

# 使用yarn
yarn add q-utils

# 使用pnpm
pnpm add q-utils
```

### 基本使用
```typescript
// 按需导入
import { capitalize } from 'q-utils/string';
import { unique } from 'q-utils/array';
import { uuid } from 'q-utils/utils';

// 使用函数
capitalize('hello');            // 'Hello'
unique([1, 2, 2, 3]);           // [1, 2, 3]
const id = uuid();              // 生成唯一ID
```

### 开发环境设置
```bash
# 克隆仓库
git clone https://github.com/your-username/q-utils.git

# 初始化项目
node scripts/init.mjs

# 开发模式
pnpm dev

# 运行测试
pnpm test

# 构建
pnpm build
```

## 项目维护建议

1. **版本管理**
   - 遵循语义化版本规范
   - 每次发布前完整测试
   - 保持向后兼容性
   - 详细的更新日志

2. **代码质量**
   - 保持代码覆盖率在 90% 以上
   - 定期更新依赖
   - 遵循代码规范和文档标准
   - 代码审查流程

3. **社区建设**
   - 积极响应 Issues 和 PR
   - 定期更新文档和示例
   - 收集用户反馈，持续优化
   - 建立贡献者指南

## 数组工具函数

### 功能分类

1. 数组验证
   - `isValidArray`: 验证数组是否有效
   - `isArrayEqual`: 比较两个数组是否相等
   - `isSubArray`: 检查一个数组是否是另一个数组的子数组

2. 数组统计
   - `countOccurrences`: 统计数组元素出现次数
   - `countByKey`: 按字段统计数量
   - `arrayStats`: 统计数值数组

3. 数组操作
   - `move`: 移动数组元素
   - `swap`: 交换数组元素
   - `rotate`: 旋转数组
   - `uniqueOrdered`: 数组去重并保持顺序
   - `uniqueSorted`: 数组去重并排序

4. 数组树结构
   - `arrayToTree`: 将数组转换为树结构
   - `treeToArray`: 将树结构转换为数组
   - `findTreeNode`: 查找树节点
   - `getNodePath`: 获取节点路径

### 工具函数实现

1. 数组验证
   - 使用 `Array.isArray` 判断数组
   - 使用 `reduce` 实现数组比较
   - 使用 `every` 实现子数组检查

2. 数组统计
   - 使用 `reduce` 实现元素计数
   - 使用 `reduce` 实现字段统计
   - 使用 `reduce` 和 `sort` 实现数值统计

3. 数组操作
   - 使用 `splice` 实现元素移动
   - 使用解构赋值实现元素交换
   - 使用 `slice` 实现数组旋转
   - 使用 `Set` 实现数组去重
   - 使用 `sort` 实现数组排序

4. 数组树结构
   - 使用 `Map` 实现数组转树
   - 使用递归实现树转数组
   - 使用递归实现节点查找
   - 使用递归实现路径获取

### 功能扩展

1. 数组验证
   - 支持自定义比较函数
   - 支持深度比较
   - 支持部分比较

2. 数组统计
   - 支持多字段统计
   - 支持条件统计
   - 支持分组统计

3. 数组操作
   - 支持批量移动
   - 支持批量交换
   - 支持自定义排序
   - 支持自定义去重

4. 数组树结构
   - 支持自定义字段名
   - 支持自定义子节点名
   - 支持自定义父节点名
   - 支持自定义ID字段名 