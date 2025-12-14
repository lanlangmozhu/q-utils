[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [empty](../README.md) / isEmptyMap

# Function: isEmptyMap()

> **isEmptyMap**(`value`): `value is Map<never, never>`

Defined in: [empty/collections.ts:15](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/empty/collections.ts#L15)

检查值是否为空 Map

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Map<never, never>`

是否为空 Map

## Example

```ts
isEmptyMap(new Map()) // true
isEmptyMap(new Map([['key', 'value']])) // false
isEmptyMap({}) // false
```
