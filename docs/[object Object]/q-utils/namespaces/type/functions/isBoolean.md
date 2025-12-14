[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isBoolean

# Function: isBoolean()

> **isBoolean**(`value`): `value is boolean`

Defined in: [type/basic.ts:119](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/basic.ts#L119)

检查值是否为布尔值

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is boolean`

是否为布尔值

## Example

```ts
isBoolean(true) // true
isBoolean(false) // true
isBoolean(1) // false
isBoolean('true') // false
```
