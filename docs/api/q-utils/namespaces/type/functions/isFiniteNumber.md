[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isFiniteNumber

# Function: isFiniteNumber()

> **isFiniteNumber**(`value`): `value is number`

Defined in: [type/basic.ts:157](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/basic.ts#L157)

检查值是否为有限数字

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is number`

是否为有限数字

## Example

```ts
isFiniteNumber(1) // true
isFiniteNumber(1.5) // true
isFiniteNumber(Infinity) // false
isFiniteNumber(NaN) // false
```
