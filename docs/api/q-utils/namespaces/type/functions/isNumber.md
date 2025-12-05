[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`): `value is number`

Defined in: [type/basic.ts:131](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/basic.ts#L131)

检查值是否为数字

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is number`

是否为数字

## Example

```ts
isNumber(1) // true
isNumber(1.5) // true
isNumber(NaN) // true
isNumber('1') // false
```
