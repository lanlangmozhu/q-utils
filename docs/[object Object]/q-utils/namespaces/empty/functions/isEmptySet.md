[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [empty](../README.md) / isEmptySet

# Function: isEmptySet()

> **isEmptySet**(`value`): `value is Set<never>`

Defined in: [empty/collections.ts:27](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/empty/collections.ts#L27)

检查值是否为空 Set

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Set<never>`

是否为空 Set

## Example

```ts
isEmptySet(new Set()) // true
isEmptySet(new Set([1, 2, 3])) // false
isEmptySet([]) // false
```
