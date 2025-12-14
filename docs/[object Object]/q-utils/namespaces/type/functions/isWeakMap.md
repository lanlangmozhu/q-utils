[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isWeakMap

# Function: isWeakMap()

> **isWeakMap**(`value`): `value is WeakMap<object, unknown>`

Defined in: [type/advanced.ts:93](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/advanced.ts#L93)

检查值是否为 WeakMap 对象

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is WeakMap<object, unknown>`

是否为 WeakMap 对象

## Example

```ts
isWeakMap(new WeakMap()) // true
isWeakMap(new Map()) // false
```
