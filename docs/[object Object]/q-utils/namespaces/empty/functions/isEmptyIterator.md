[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [empty](../README.md) / isEmptyIterator

# Function: isEmptyIterator()

> **isEmptyIterator**(`value`): `value is Iterator<never, any, any>`

Defined in: [empty/collections.ts:60](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/empty/collections.ts#L60)

检查值是否为空迭代器

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Iterator<never, any, any>`

是否为空迭代器

## Example

```ts
isEmptyIterator([][Symbol.iterator]()) // true
isEmptyIterator([1, 2, 3][Symbol.iterator]()) // false
```
