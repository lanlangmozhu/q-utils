# BigInt 工具函数

## 目录结构

```
src/bigint/
├── index.ts       // 导出所有功能
├── basic.ts       // 基础操作（createBigInt, isBigInt, isValidBigInt）
├── conversion.ts  // 转换操作（bigIntToString, stringToBigInt）
├── math.ts        // 数学运算（bigIntAbs, bigIntSign, bigIntSqrt等）
├── gcd.ts         // 最大公约数和最小公倍数（bigIntGcd, bigIntLcm）
└── validation.ts  // 验证操作（isBigIntEven, isBigIntOdd, isBigIntPrime）
```

## 功能描述

BigInt 工具函数提供了一系列用于处理大整数的工具函数，包括创建、检查、转换、计算等功能。

### 基础操作

- `createBigInt`: 创建 BigInt 值
- `isBigInt`: 检查是否为 BigInt
- `isValidBigInt`: 检查是否为有效的 BigInt

### 转换操作

- `bigIntToString`: 将 BigInt 转换为字符串
- `stringToBigInt`: 将字符串转换为 BigInt

### 数学运算

- `bigIntAbs`: 获取 BigInt 的绝对值
- `bigIntSign`: 获取 BigInt 的符号
- `bigIntLength`: 获取 BigInt 的位数
- `isBigIntEven`: 检查 BigInt 是否为偶数
- `isBigIntOdd`: 检查 BigInt 是否为奇数
- `isBigIntPrime`: 检查 BigInt 是否为质数
- `bigIntSqrt`: 获取 BigInt 的平方根
- `bigIntPow`: 获取 BigInt 的幂
- `bigIntGcd`: 获取 BigInt 的最大公约数
- `bigIntLcm`: 获取 BigInt 的最小公倍数

## 使用示例

```typescript
import { 
  createBigInt, 
  isBigInt, 
  isValidBigInt,
  bigIntToString,
  stringToBigInt,
  bigIntAbs,
  bigIntSign,
  bigIntLength,
  isBigIntEven,
  isBigIntOdd,
  isBigIntPrime,
  bigIntSqrt,
  bigIntPow,
  bigIntGcd,
  bigIntLcm
} from '@qh5-utils/bigint';

// 创建 BigInt
const num = createBigInt(123); // 123n
const str = createBigInt('123'); // 123n

// 检查类型
isBigInt(123n); // true
isBigInt(123); // false
isValidBigInt('123'); // true
isValidBigInt('abc'); // false

// 转换
bigIntToString(123n); // '123'
bigIntToString(123n, 16); // '7b'
stringToBigInt('123'); // 123n
stringToBigInt('7b', 16); // 123n

// 数学运算
bigIntAbs(-123n); // 123n
bigIntSign(123n); // 1
bigIntSign(0n); // 0
bigIntSign(-123n); // -1
bigIntLength(123n); // 3
isBigIntEven(123n); // false
isBigIntOdd(123n); // true
isBigIntPrime(17n); // true
bigIntSqrt(16n); // 4n
bigIntPow(2n, 3n); // 8n
bigIntGcd(12n, 18n); // 6n
bigIntLcm(12n, 18n); // 36n
```

## 注意事项

1. BigInt 运算时需要使用 BigInt 字面量（以 n 结尾）或 BigInt() 构造函数
2. BigInt 不能与普通数字直接混合运算
3. BigInt 不支持小数运算
4. 某些数学运算（如平方根）可能产生精度损失

## 更新记录

- 2024-03-18: 初始版本
  - 添加基础操作函数
  - 添加转换操作函数
  - 添加数学运算函数 