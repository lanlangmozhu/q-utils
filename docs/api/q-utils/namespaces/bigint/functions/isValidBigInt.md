[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [bigint](../README.md) / isValidBigInt

# Function: isValidBigInt()

> **isValidBigInt**(`value`): `boolean`

Defined in: [bigint/basic.ts:37](https://github.com/lanlangmozhu/q-utils/blob/main/src/bigint/basic.ts#L37)

检查是否为有效的 BigInt

## Parameters

### value

`unknown`

要检查的值

## Returns

`boolean`

是否为有效的 BigInt

## Example

```ts
isValidBigInt(123n) // true
isValidBigInt('123') // true
isValidBigInt('abc') // false
```
