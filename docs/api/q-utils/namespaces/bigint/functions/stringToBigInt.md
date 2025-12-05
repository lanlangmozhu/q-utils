[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [bigint](../README.md) / stringToBigInt

# Function: stringToBigInt()

> **stringToBigInt**(`value`, `radix`): `bigint`

Defined in: [bigint/conversion.ts:27](https://github.com/lanlangmozhu/q-utils/blob/main/src/bigint/conversion.ts#L27)

将字符串转换为 BigInt

## Parameters

### value

`string`

字符串

### radix

`number` = `10`

进制

## Returns

`bigint`

BigInt 值

## Example

```ts
stringToBigInt('123') // 123n
stringToBigInt('7b', 16) // 123n
```
