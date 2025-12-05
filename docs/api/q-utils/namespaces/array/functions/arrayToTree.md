[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / arrayToTree

# Function: arrayToTree()

> **arrayToTree**\<`T`\>(`arr`, `options`): `T` & `object`[]

Defined in: [array/tree.ts:21](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/tree.ts#L21)

将数组转换为树结构

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### arr

要转换的数组

`T`[] | `null` | `undefined`

### options

配置选项

\{ `idKey?`: `string`; `parentKey?`: `string`; `childrenKey?`: `string`; \} | `null` | `undefined`

## Returns

`T` & `object`[]

树结构

## Example

```typescript
arrayToTree([
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 }
])
// 返回 [{ id: 1, children: [{ id: 2 }, { id: 3 }] }]
```
