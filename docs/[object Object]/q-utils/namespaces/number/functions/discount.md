[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / discount

# Function: discount()

> **discount**(`originalPrice`, `discountRate`): `number`

Defined in: [number/finance.ts:106](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/finance.ts#L106)

计算折扣

## Parameters

### originalPrice

`number`

原价

### discountRate

`number`

折扣率（0-1）

## Returns

`number`

折扣后的价格

## Example

```ts
discount(100, 0.2) // 80
discount(100, 0.5) // 50
```
