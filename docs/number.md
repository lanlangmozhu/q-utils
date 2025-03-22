# Number 工具函数

## 目录结构

```typescript
src/number/
├── index.ts       // 导出所有功能
├── basic.ts       // 基础操作
├── format.ts      // 格式化
├── finance.ts     // 金融计算
├── math.ts        // 数学计算
├── radix.ts       // 进制转换
├── random.ts      // 随机数
├── range.ts       // 范围处理
├── special.ts     // 特殊处理
├── statistics.ts  // 统计分析
├── unit.ts        // 单位转换
├── animation.ts   // 动画计算
├── performance.ts // 性能优化
└── analysis.ts    // 数据分析
```

## 功能说明

### 基础操作 (basic.ts)
- `isNumber`: 判断是否为数字
- `isInteger`: 判断是否为整数
- `isPositive`: 判断是否为正数
- `inRange`: 判断是否在范围内
- `toFixed`: 保留小数位数

### 格式化 (format.ts)
- `toThousands`: 格式化为千分位
- `toPercentage`: 格式化为百分比
- `toChinese`: 数字转中文
- `toCurrency`: 格式化为货币

### 金融计算 (finance.ts)
- `calculateInterest`: 计算利息
- `calculateLoan`: 计算贷款
- `calculateInvestment`: 计算投资
- `calculateTax`: 计算税收

### 数学计算 (math.ts)
- `factorial`: 阶乘
- `fibonacci`: 斐波那契数列
- `isPrime`: 判断质数
- `gcd`: 最大公约数
- `lcm`: 最小公倍数

### 进制转换 (radix.ts)
- `toBinary`: 转二进制
- `toOctal`: 转八进制
- `toHex`: 转十六进制
- `fromBinary`: 从二进制转换
- `fromOctal`: 从八进制转换
- `fromHex`: 从十六进制转换

### 随机数 (random.ts)
- `random`: 生成随机数
- `randomInt`: 生成随机整数
- `randomFloat`: 生成随机浮点数
- `randomRange`: 生成指定范围的随机数

### 范围处理 (range.ts)
- `clamp`: 限制数值范围
- `normalize`: 归一化数值
- `lerp`: 线性插值
- `map`: 映射数值范围

### 特殊处理 (special.ts)
- `approximatelyEqual`: 约等于判断
- `isFinite`: 判断是否为有限数
- `isNaN`: 判断是否为NaN
- `isInfinity`: 判断是否为无穷大

### 统计分析 (statistics.ts)
- `mean`: 平均值
- `median`: 中位数
- `mode`: 众数
- `standardDeviation`: 标准差
- `variance`: 方差

### 单位转换 (unit.ts)
- `formatBytes`: 字节转换
- `formatSeconds`: 时间转换
- `formatDistance`: 距离转换
- `formatWeight`: 重量转换

### 动画计算 (animation.ts)
- `easeInOut`: 缓入缓出
- `spring`: 弹簧动画
- `bezier`: 贝塞尔曲线
- `interpolate`: 插值计算

### 性能优化 (performance.ts)
- `optimizePrecision`: 优化精度
- `cache`: 计算结果缓存
- `throttle`: 函数节流
- `debounce`: 函数防抖

### 数据分析 (analysis.ts)
- `trend`: 趋势分析
- `correlation`: 相关性分析
- `regression`: 回归分析
- `forecast`: 预测分析

## 使用示例

```typescript
import { 
  isNumber, 
  toThousands, 
  calculateInterest, 
  random,
  clamp,
  easeInOut,
  optimizePrecision,
  trend
} from '@q-utils/number';

// 数值检查
const isValid = isNumber('123'); // true

// 格式化
const formatted = toThousands(1234567); // '1,234,567'

// 金融计算
const interest = calculateInterest(10000, 0.05, 1); // 500

// 随机数
const randomNum = random(1, 10); // 1-10之间的随机数

// 范围处理
const clamped = clamp(15, 0, 10); // 10

// 动画计算
const eased = easeInOut(0.5); // 0.5

// 性能优化
const optimized = optimizePrecision(3.14159); // 3.14

// 数据分析
const trendData = trend([1, 2, 3, 4, 5]); // 上升趋势
```

## 注意事项

1. 金融计算需要考虑精度问题
2. 随机数生成使用加密安全的随机数生成器
3. 单位转换支持国际化
4. 统计分析支持大数据量处理
5. 动画计算支持自定义缓动函数
6. 性能优化需要注意内存使用
7. 数据分析支持多种算法选择

## 更新记录

- 2024-03-21: 重构目录结构，优化功能分类
- 2024-03-19: 添加动画计算和性能优化相关方法
- 2024-03-18: 添加数据分析和统计分析相关方法 