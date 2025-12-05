[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / count

# Function: count()

> **count**\<`T`\>(`arr`): `Record`\<`string`, `number`\>

Defined in: [array/basic.ts:194](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/basic.ts#L194)

统计数组元素出现次数

## Type Parameters

### T

`T`

## Parameters

### arr

要统计的数组

`T`[] | `null` | `undefined`

## Returns

`Record`\<`string`, `number`\>

元素出现次数的对象

## Example

```typescript
count([1, 2, 1, 3, 2, 1])
// 返回 { 1: 3, 2: 2, 3: 1 }
```
