[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isMap

# Function: isMap()

> **isMap**(`value`): `value is Map<unknown, unknown>`

Defined in: [type/advanced.ts:73](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/advanced.ts#L73)

检查值是否为 Map 对象

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Map<unknown, unknown>`

是否为 Map 对象

## Example

```ts
isMap(new Map()) // true
isMap({}) // false
```
