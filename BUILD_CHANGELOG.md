# 构建更新日志

## [1.0.0] - 2024-03-21

### 新增功能

#### 类型检测工具
- 新增 `isString` 函数，用于检查值是否为字符串
- 新增 `isNumber` 函数，用于检查值是否为数字
- 新增 `isBoolean` 函数，用于检查值是否为布尔值
- 新增 `isArray` 函数，用于检查值是否为数组
- 新增 `isObject` 函数，用于检查值是否为对象
- 新增 `isFunction` 函数，用于检查值是否为函数
- 新增 `isNull` 函数，用于检查值是否为 null
- 新增 `isUndefined` 函数，用于检查值是否为 undefined
- 新增 `getType` 函数，用于获取值的类型

#### 空值检测工具
- 新增 `isEmpty` 函数，用于检查值是否为空
- 新增 `isEmptyString` 函数，用于检查字符串是否为空
- 新增 `isEmptyArray` 函数，用于检查数组是否为空
- 新增 `isEmptyObject` 函数，用于检查对象是否为空
- 新增 `isNil` 函数，用于检查值是否为 null 或 undefined

#### 布尔值工具
- 新增 `toBoolean` 函数，用于将值转换为布尔值
- 新增 `isTruthy` 函数，用于检查值是否为真值
- 新增 `isFalsy` 函数，用于检查值是否为假值

#### Promise 工具
- 新增 `delay` 函数，用于延迟执行
- 新增 `timeout` 函数，用于超时控制
- 新增 `retry` 函数，用于重试机制
- 新增 `concurrent` 函数，用于并发控制
- 新增 `debounce` 函数，用于防抖
- 新增 `throttle` 函数，用于节流

#### 正则表达式工具
- 新增 `escapeRegExp` 函数，用于转义正则表达式特殊字符
- 新增 `createRegExp` 函数，用于创建正则表达式
- 新增 `matchAll` 函数，用于获取所有匹配结果
- 新增 `replaceAll` 函数，用于替换所有匹配项
- 新增 `split` 函数，用于按正则表达式分割字符串
- 新增 `test` 函数，用于测试字符串是否匹配
- 新增 `exec` 函数，用于执行正则表达式匹配
- 新增 `execAll` 函数，用于执行所有正则表达式匹配
- 新增 `match` 函数，用于返回匹配结果
- 新增 `search` 函数，用于返回匹配位置
- 新增 `replace` 函数，用于替换匹配项
- 新增 `getCaptureGroups` 函数，用于获取所有捕获组
- 新增 `getFlags` 函数，用于获取所有标志
- 新增 `hasFlag` 函数，用于检查是否包含指定标志
- 新增 `addFlag` 函数，用于添加标志
- 新增 `removeFlag` 函数，用于移除标志
- 新增 `getSource` 函数，用于获取源字符串
- 新增 `toString` 函数，用于获取完整字符串表示
- 新增 `clone` 函数，用于克隆正则表达式
- 新增 `combine` 函数，用于合并多个正则表达式
- 新增 `countMatches` 函数，用于获取匹配次数
- 新增 `firstMatchIndex` 函数，用于获取第一个匹配位置
- 新增 `lastMatchIndex` 函数，用于获取最后一个匹配位置
- 新增 `allMatchIndices` 函数，用于获取所有匹配位置
- 新增 `allMatchRanges` 函数，用于获取所有匹配范围
- 新增 `allMatchTexts` 函数，用于获取所有匹配文本
- 新增 `allCaptureGroups` 函数，用于获取所有捕获组值
- 新增 `getNamedCaptureGroups` 函数，用于获取所有命名捕获组
- 新增 `allNamedCaptureGroups` 函数，用于获取所有命名捕获组值
- 新增 `allMatchPositions` 函数，用于获取所有匹配位置和文本
- 新增 `allMatchRangesWithText` 函数，用于获取所有匹配范围和文本
- 新增 `allMatchPositionsWithGroups` 函数，用于获取所有匹配位置和捕获组
- 新增 `allMatchRangesWithGroups` 函数，用于获取所有匹配范围和捕获组
- 新增 `allMatchPositionsWithNamedGroups` 函数，用于获取所有匹配位置和命名捕获组
- 新增 `allMatchRangesWithNamedGroups` 函数，用于获取所有匹配范围和命名捕获组

#### 错误处理工具
- 新增 `createError` 函数，用于创建自定义错误
- 新增 `isError` 函数，用于检查值是否为错误对象
- 新增 `isErrorInstance` 函数，用于检查错误是否为指定类型
- 新增 `getErrorStack` 函数，用于获取错误堆栈
- 新增 `getErrorMessage` 函数，用于获取错误信息
- 新增 `getErrorName` 函数，用于获取错误名称
- 新增 `getErrorCause` 函数，用于获取错误原因
- 新增 `setErrorCause` 函数，用于设置错误原因
- 新增 `wrapError` 函数，用于包装错误
- 新增 `unwrapError` 函数，用于解包错误

#### Symbol 工具
- 新增 `createSymbol` 函数，用于创建 Symbol
- 新增 `isSymbol` 函数，用于检查值是否为 Symbol
- 新增 `getSymbolDescription` 函数，用于获取 Symbol 描述
- 新增 `getSymbolKey` 函数，用于获取 Symbol 键
- 新增 `getSymbolKeys` 函数，用于获取所有 Symbol 键
- 新增 `getSymbolValues` 函数，用于获取所有 Symbol 值
- 新增 `getSymbolEntries` 函数，用于获取所有 Symbol 键值对
- 新增 `hasSymbol` 函数，用于检查对象是否包含指定 Symbol
- 新增 `deleteSymbol` 函数，用于删除对象中的 Symbol

#### BigInt 工具
- 新增 `isBigInt` 函数，用于检查值是否为 BigInt
- 新增 `toBigInt` 函数，用于转换为 BigInt
- 新增 `fromBigInt` 函数，用于从 BigInt 转换
- 新增 `addBigInt` 函数，用于 BigInt 加法
- 新增 `subtractBigInt` 函数，用于 BigInt 减法
- 新增 `multiplyBigInt` 函数，用于 BigInt 乘法
- 新增 `divideBigInt` 函数，用于 BigInt 除法
- 新增 `remainderBigInt` 函数，用于 BigInt 取余
- 新增 `powerBigInt` 函数，用于 BigInt 幂运算
- 新增 `negateBigInt` 函数，用于 BigInt 取负
- 新增 `absBigInt` 函数，用于 BigInt 绝对值
- 新增 `minBigInt` 函数，用于 BigInt 最小值
- 新增 `maxBigInt` 函数，用于 BigInt 最大值
- 新增 `clampBigInt` 函数，用于 BigInt 范围限制
- 新增 `randomBigInt` 函数，用于随机 BigInt

### 构建更新
- 更新 rollup.config.js，添加新增功能的构建配置
- 更新 tsconfig.json，添加新增功能的类型定义配置
- 更新 package.json，添加新增功能的依赖配置
- 更新 .eslintrc.js，添加新增功能的代码检查配置
- 更新 .prettierrc.js，添加新增功能的代码格式化配置

### 文档更新
- 更新 README.md，添加新增功能的使用说明
- 更新 USAGE.md，添加新增功能的详细使用指南
- 更新 SUMMARY.md，添加新增功能的功能说明
- 更新 CHANGELOG.md，记录本次更新内容
- 更新 BUILD_CHANGELOG.md，记录本次构建更新内容

### 示例更新
- 更新 examples/index.html，添加新增功能的使用示例

### 测试更新
- 更新 test 目录下的单元测试，添加新增功能的测试用例

## [0.1.0] - 2024-03-19

### 新增
- 构建数组工具函数库
- 生成类型定义文件
- 生成文档文件

### 优化
- 优化构建配置
- 优化类型定义生成
- 优化文档生成

### 文档
- 生成 array.md 文档
- 更新 CHANGELOG.md
- 更新 BUILD_CHANGELOG.md 