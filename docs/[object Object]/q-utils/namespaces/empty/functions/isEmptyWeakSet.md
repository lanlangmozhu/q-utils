[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [empty](../README.md) / isEmptyWeakSet

# Function: isEmptyWeakSet()

> **isEmptyWeakSet**(`value`): `value is WeakSet<object>`

Defined in: [empty/collections.ts:49](https://github.com/lanlangmozhu/q-utils/blob/main/src/empty/collections.ts#L49)

检查值是否为空 WeakSet

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is WeakSet<object>`

是否为空 WeakSet

## Example

```ts
isEmptyWeakSet(new WeakSet()) // true
isEmptyWeakSet(new Set()) // false
```
