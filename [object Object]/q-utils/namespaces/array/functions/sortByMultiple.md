[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / sortByMultiple

# Function: sortByMultiple()

> **sortByMultiple**\<`T`\>(`arr`, `conditions`): `T`[]

Defined in: [array/sort.ts:61](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/sort.ts#L61)

根据多个条件对数组元素进行排序

## Type Parameters

### T

`T`

## Parameters

### arr

要排序的数组

`T`[] | `null` | `undefined`

### conditions

排序条件数组

`object`[] | `null` | `undefined`

## Returns

`T`[]

排序后的数组

## Example

```typescript
sortByMultiple(
  [
    { name: 'a', age: 20 },
    { name: 'b', age: 18 },
    { name: 'a', age: 18 }
  ],
  [
    { key: 'name', order: 'asc' },
    { key: 'age', order: 'desc' }
  ]
)
// 返回 [{ name: 'a', age: 20 }, { name: 'a', age: 18 }, { name: 'b', age: 18 }]
```
