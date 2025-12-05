[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / filterTree

# Function: filterTree()

> **filterTree**\<`T`\>(`tree`, `predicate`, `options`): `T` & `object`[]

Defined in: [array/tree.ts:177](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/tree.ts#L177)

过滤树结构

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### tree

树结构

`T` & `object`[] | `null` | `undefined`

### predicate

(`node`) => `boolean`

过滤条件

### options

配置选项

\{ `childrenKey?`: `string`; \} | `null` | `undefined`

## Returns

`T` & `object`[]

过滤后的树结构

## Example

```typescript
filterTree(
  [{ id: 1, children: [{ id: 2 }, { id: 3 }] }],
  node => node.id !== 2
)
// 返回 [{ id: 1, children: [{ id: 3 }] }]
```
