[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / flatten

# Function: flatten()

> **flatten**\<`T`\>(`arr`, `depth`): `T`[]

Defined in: [array/basic.ts:127](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/basic.ts#L127)

将多维数组扁平化为一维数组

## Type Parameters

### T

`T`

## Parameters

### arr

要扁平化的数组

`T`[] | `null` | `undefined`

### depth

`number` = `Infinity`

扁平化的深度，默认为 Infinity

## Returns

`T`[]

扁平化后的数组

## Example

```typescript
flatten([1, [2, 3], [4, [5, 6]]])
// 返回 [1, 2, 3, 4, 5, 6]
```
