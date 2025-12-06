[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [bigint](../README.md) / bigIntToString

# Function: bigIntToString()

> **bigIntToString**(`value`, `radix`): `string`

Defined in: [bigint/conversion.ts:15](https://github.com/lanlangmozhu/q-utils/blob/main/src/bigint/conversion.ts#L15)

将 BigInt 转换为字符串

## Parameters

### value

`bigint`

BigInt 值

### radix

`number` = `10`

进制

## Returns

`string`

字符串

## Example

```ts
bigIntToString(123n) // '123'
bigIntToString(123n, 16) // '7b'
```
