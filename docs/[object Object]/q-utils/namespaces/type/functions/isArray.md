[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isArray

# Function: isArray()

> **isArray**(`value`): `value is unknown[]`

Defined in: [type/object.ts:45](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/object.ts#L45)

检查值是否为数组

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is unknown[]`

是否为数组

## Example

```ts
isArray([]) // true
isArray([1, 2, 3]) // true
isArray({}) // false
```
