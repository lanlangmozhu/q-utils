[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [empty](../README.md) / isEmptyWeakMap

# Function: isEmptyWeakMap()

> **isEmptyWeakMap**(`value`): `value is WeakMap<object, never>`

Defined in: [empty/collections.ts:38](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/empty/collections.ts#L38)

检查值是否为空 WeakMap

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is WeakMap<object, never>`

是否为空 WeakMap

## Example

```ts
isEmptyWeakMap(new WeakMap()) // true
isEmptyWeakMap(new Map()) // false
```
