[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / get

# Function: get()

> **get**\<`T`\>(`arr`, `index`, `defaultValue?`): `T` \| `undefined`

Defined in: [array/basic.ts:87](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/basic.ts#L87)

安全获取数组元素

## Type Parameters

### T

`T`

## Parameters

### arr

源数组

`T`[] | `null` | `undefined`

### index

`number`

索引

### defaultValue?

`T`

默认值

## Returns

`T` \| `undefined`

指定索引的元素或默认值

## Example

```typescript
get([1, 2, 3], 1, 0)
// 返回 2
get([1, 2, 3], 5, 0)
// 返回 0
```
