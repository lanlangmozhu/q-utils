[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [func](../README.md) / compose

# Function: compose()

> **compose**\<`R`\>(...`funcs`): (`arg`) => `R`

Defined in: [function/compose.ts:22](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/function/compose.ts#L22)

函数组合，从右到左组合多个函数
组合函数方向为：compose(f, g, h)(x) 等同于 f(g(h(x)))

## Type Parameters

### R

`R`

## Parameters

### funcs

...(`arg`) => `any`[]

要组合的函数列表，从右到左执行

## Returns

组合后的函数

> (`arg`): `R`

### Parameters

#### arg

`any`

### Returns

`R`

## Example

```ts
// 基本用法
const add10 = (x: number) => x + 10;
const multiply2 = (x: number) => x * 2;
const toString = (x: number) => `结果是: ${x}`;

// 组合函数：toString(multiply2(add10(5)))
const calculate = compose(toString, multiply2, add10);

calculate(5); // 返回 "结果是: 30"

// 数据流向：5 -> add10 -> 15 -> multiply2 -> 30 -> toString -> "结果是: 30"
```
