[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [bigint](../README.md) / bigIntSign

# Function: bigIntSign()

> **bigIntSign**(`value`): `number`

Defined in: [bigint/math.ts:25](https://github.com/lanlangmozhu/q-utils/blob/main/src/bigint/math.ts#L25)

获取 BigInt 的符号

## Parameters

### value

`bigint`

BigInt 值

## Returns

`number`

符号（1、0 或 -1）

## Example

```ts
bigIntSign(123n) // 1
bigIntSign(0n) // 0
bigIntSign(-123n) // -1
```
