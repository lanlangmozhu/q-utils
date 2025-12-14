[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isObject

# Function: isObject()

> **isObject**(`value`): `value is object`

Defined in: [type/object.ts:16](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/object.ts#L16)

检查值是否为对象

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is object`

是否为对象

## Example

```ts
isObject({}) // true
isObject([]) // true
isObject(null) // false
isObject(undefined) // false
```
