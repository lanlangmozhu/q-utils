# 正则表达式工具函数

## 目录结构

```
src/regexp/
├── index.ts       // 导出所有功能
├── basic.ts       // 基础操作（escapeRegExp, createRegExp, clone）
├── match.ts       // 匹配相关（match, matchAll, exec, execAll）
├── replace.ts     // 替换相关（replace, replaceAll）
├── search.ts      // 搜索相关（search, test, split）
├── groups.ts      // 捕获组相关（getCaptureGroups, allCaptureGroups等）
├── flags.ts       // 标志相关（getFlags, hasFlag, addFlag, removeFlag）
├── utils.ts       // 工具函数（getSource, toString, combine等）
└── advanced.ts    // 高级功能（allMatchPositions, allMatchRanges等）
```

## 功能描述

正则表达式工具函数提供了一系列用于处理正则表达式的工具函数，包括创建、匹配、替换、分割等功能。

### 基础操作

- `escapeRegExp`: 转义正则表达式中的特殊字符
- `createRegExp`: 创建正则表达式对象
- `getSource`: 获取正则表达式的源字符串
- `getFlags`: 获取正则表达式的所有标志
- `hasFlag`: 检查正则表达式是否包含指定标志
- `addFlag`: 添加正则表达式标志
- `removeFlag`: 移除正则表达式标志
- `clone`: 克隆正则表达式
- `combine`: 组合多个正则表达式

### 匹配操作

- `test`: 测试字符串是否匹配正则表达式
- `match`: 返回匹配结果
- `matchAll`: 获取所有匹配结果
- `exec`: 执行正则表达式匹配
- `execAll`: 执行所有正则表达式匹配
- `search`: 返回匹配位置
- `countMatches`: 计算匹配次数
- `firstMatchIndex`: 获取第一个匹配位置
- `lastMatchIndex`: 获取最后一个匹配位置
- `allMatchIndices`: 获取所有匹配位置
- `allMatchRanges`: 获取所有匹配范围
- `allMatchTexts`: 获取所有匹配文本

### 替换操作

- `replace`: 替换匹配项
- `replaceAll`: 替换所有匹配项

### 分割操作

- `split`: 按正则表达式分割字符串

### 捕获组操作

- `getCaptureGroups`: 获取正则表达式的所有捕获组
- `getNamedCaptureGroups`: 获取正则表达式的所有命名捕获组
- `allCaptureGroups`: 获取所有捕获组
- `allNamedCaptureGroups`: 获取所有命名捕获组

### 高级匹配操作

- `allMatchPositions`: 获取所有匹配位置和文本
- `allMatchRangesWithText`: 获取所有匹配范围和文本
- `allMatchPositionsWithGroups`: 获取所有匹配位置和捕获组
- `allMatchRangesWithGroups`: 获取所有匹配范围和捕获组
- `allMatchPositionsWithNamedGroups`: 获取所有匹配位置和命名捕获组
- `allMatchRangesWithNamedGroups`: 获取所有匹配范围和命名捕获组

## 使用示例

```typescript
import { 
  escapeRegExp,
  createRegExp,
  test,
  match,
  matchAll,
  exec,
  execAll,
  search,
  replace,
  replaceAll,
  split,
  getCaptureGroups,
  getFlags,
  hasFlag,
  addFlag,
  removeFlag,
  getSource,
  countMatches,
  firstMatchIndex,
  lastMatchIndex,
  allMatchIndices,
  allMatchRanges,
  allMatchTexts,
  allCaptureGroups,
  getNamedCaptureGroups,
  allNamedCaptureGroups,
  allMatchPositions,
  allMatchRangesWithText,
  allMatchPositionsWithGroups,
  allMatchRangesWithGroups,
  allMatchPositionsWithNamedGroups,
  allMatchRangesWithNamedGroups
} from '@qh5-utils/regexp';

// 基础操作
escapeRegExp('.*+?^${}()|[]\\'); // '\.\*\+\?\^\$\{\}\(\)\|\[\]\\'
const regexp = createRegExp('test', 'gi'); // /test/gi
getSource(regexp); // 'test'
getFlags(regexp); // ['g', 'i']
hasFlag(regexp, 'g'); // true
addFlag(regexp, 'm'); // /test/gim
removeFlag(regexp, 'i'); // /test/g

// 匹配操作
test('test123', /\d+/); // true
match('test123', /(\d+)/); // ['123', '123']
matchAll('test1 test2 test3', /\w+(\d+)/g); // [['test1', '1'], ['test2', '2'], ['test3', '3']]
exec('test123', /(\d+)/); // ['123', '123']
execAll('test1 test2 test3', /\w+(\d+)/g); // [['test1', '1'], ['test2', '2'], ['test3', '3']]
search('test123', /\d+/); // 4

// 替换操作
replace('test123', /(\d+)/, '456'); // 'test456'
replaceAll('test1 test2 test3', /\w+(\d+)/g, 'word$1'); // 'word1 word2 word3'

// 分割操作
split('test1,test2;test3', /[,;]/); // ['test1', 'test2', 'test3']

// 捕获组操作
getCaptureGroups(/test-(\d+)-(\w+)/); // ['$1', '$2']
getNamedCaptureGroups(/(?<year>\d{4})-(?<month>\d{2})/); // ['year', 'month']
allCaptureGroups('test1 test2', /\w+(\d+)/g); // [['1'], ['2']]
allNamedCaptureGroups('2024-03', /(?<year>\d{4})-(?<month>\d{2})/g); // [{ year: '2024', month: '03' }]

// 高级匹配操作
allMatchPositions('test1 test2', /\w+(\d+)/g); // [{ index: 0, text: 'test1' }, { index: 6, text: 'test2' }]
allMatchRangesWithText('test1 test2', /\w+(\d+)/g); // [{ start: 0, end: 5, text: 'test1' }, { start: 6, end: 11, text: 'test2' }]
allMatchPositionsWithGroups('test1 test2', /\w+(\d+)/g); // [{ index: 0, groups: ['1'] }, { index: 6, groups: ['2'] }]
allMatchRangesWithGroups('test1 test2', /\w+(\d+)/g); // [{ start: 0, end: 5, groups: ['1'] }, { start: 6, end: 11, groups: ['2'] }]
allMatchPositionsWithNamedGroups('2024-03', /(?<year>\d{4})-(?<month>\d{2})/g); // [{ index: 0, groups: { year: '2024', month: '03' } }]
allMatchRangesWithNamedGroups('2024-03', /(?<year>\d{4})-(?<month>\d{2})/g); // [{ start: 0, end: 7, groups: { year: '2024', month: '03' } }]
```

## 注意事项

1. 正则表达式标志包括：g（全局）、i（忽略大小写）、m（多行）、s（点号匹配所有字符）、u（Unicode）、y（粘性）
2. 使用全局标志（g）时，exec 和 test 方法会记住上次匹配位置
3. 命名捕获组使用 (?<name>pattern) 语法
4. 替换字符串中可以使用 $1、$2 等引用捕获组，$& 引用整个匹配
5. 正则表达式的特殊字符需要转义

## 更新记录

- 2024-03-19: 初始版本
  - 添加基础操作函数
  - 添加匹配操作函数
  - 添加替换操作函数
  - 添加分割操作函数
  - 添加捕获组操作函数
  - 添加高级匹配操作函数 