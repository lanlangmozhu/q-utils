[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isInteger

# Function: isInteger()

> **isInteger**(`value`): `value is number`

Defined in: [type/basic.ts:144](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/basic.ts#L144)

检查值是否为整数

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is number`

是否为整数

## Example

```ts
isInteger(1) // true
isInteger(1.0) // true
isInteger(1.5) // false
isInteger('1') // false
```
