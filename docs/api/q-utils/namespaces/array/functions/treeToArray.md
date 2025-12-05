[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / treeToArray

# Function: treeToArray()

> **treeToArray**\<`T`\>(`tree`, `options`): `T`[]

Defined in: [array/tree.ts:79](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/tree.ts#L79)

将树结构转换为数组

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### tree

要转换的树结构

`T` & `object`[] | `null` | `undefined`

### options

配置选项

\{ `idKey?`: `string`; `parentKey?`: `string`; `childrenKey?`: `string`; \} | `null` | `undefined`

## Returns

`T`[]

数组

## Example

```typescript
treeToArray([
  { id: 1, children: [{ id: 2 }, { id: 3 }] }
])
// 返回 [{ id: 1, parentId: null }, { id: 2, parentId: 1 }, { id: 3, parentId: 1 }]
```
