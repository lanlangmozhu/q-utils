[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [bigint](../README.md) / isBigInt

# Function: isBigInt()

> **isBigInt**(`value`): `value is bigint`

Defined in: [bigint/basic.ts:25](https://github.com/lanlangmozhu/q-utils/blob/main/src/bigint/basic.ts#L25)

检查是否为 BigInt

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is bigint`

是否为 BigInt

## Example

```ts
isBigInt(123n) // true
isBigInt(123) // false
```
