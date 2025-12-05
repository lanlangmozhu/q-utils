[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / findTreeNode

# Function: findTreeNode()

> **findTreeNode**\<`T`\>(`tree`, `predicate`, `options`): `T` & `object` \| `undefined`

Defined in: [array/tree.ts:132](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/tree.ts#L132)

在树结构中查找节点

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### tree

树结构

`T` & `object`[] | `null` | `undefined`

### predicate

(`node`) => `boolean`

查找条件

### options

配置选项

\{ `childrenKey?`: `string`; \} | `null` | `undefined`

## Returns

`T` & `object` \| `undefined`

找到的节点

## Example

```typescript
findTreeNode(
  [{ id: 1, children: [{ id: 2 }, { id: 3 }] }],
  node => node.id === 2
)
// 返回 { id: 2 }
```
