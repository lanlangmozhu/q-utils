[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [empty](../README.md) / isEmptyArray

# Function: isEmptyArray()

> **isEmptyArray**(`value`): `value is []`

Defined in: [empty/specific.ts:24](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/empty/specific.ts#L24)

检查值是否为空数组

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is []`

是否为空数组

## Example

```ts
isEmptyArray([]) // true
isEmptyArray([1, 2, 3]) // false
isEmptyArray({}) // false
```
