[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isWeakSet

# Function: isWeakSet()

> **isWeakSet**(`value`): `value is WeakSet<object>`

Defined in: [type/advanced.ts:104](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/advanced.ts#L104)

检查值是否为 WeakSet 对象

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is WeakSet<object>`

是否为 WeakSet 对象

## Example

```ts
isWeakSet(new WeakSet()) // true
isWeakSet(new Set()) // false
```
