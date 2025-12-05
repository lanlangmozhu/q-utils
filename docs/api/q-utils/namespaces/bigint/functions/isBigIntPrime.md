[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [bigint](../README.md) / isBigIntPrime

# Function: isBigIntPrime()

> **isBigIntPrime**(`value`): `boolean`

Defined in: [bigint/validation.ts:38](https://github.com/lanlangmozhu/q-utils/blob/main/src/bigint/validation.ts#L38)

检查 BigInt 是否为质数

## Parameters

### value

`bigint`

BigInt 值

## Returns

`boolean`

是否为质数

## Example

```ts
isBigIntPrime(17n) // true
isBigIntPrime(18n) // false
```
