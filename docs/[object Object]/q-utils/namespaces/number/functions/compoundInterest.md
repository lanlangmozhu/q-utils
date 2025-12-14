[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / compoundInterest

# Function: compoundInterest()

> **compoundInterest**(`principal`, `rate`, `time`, `frequency`): `number`

Defined in: [number/finance.ts:37](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/finance.ts#L37)

计算复利利息

## Parameters

### principal

`number`

本金

### rate

`number`

年利率

### time

`number`

时间（年）

### frequency

`number` = `1`

复利频率（每年复利次数）

## Returns

`number`

利息

## Example

```ts
compoundInterest(1000, 0.05, 1) // 50
compoundInterest(1000, 0.05, 1, 12) // 51.16
```
