[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isBigInt

# Function: isBigInt()

> **isBigInt**(`value`): `value is bigint`

Defined in: [type/advanced.ts:63](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/advanced.ts#L63)

检查值是否为 BigInt

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is bigint`

是否为 BigInt

## Example

```ts
isBigInt(BigInt(1)) // true
isBigInt(1n) // true
isBigInt(1) // false
```
