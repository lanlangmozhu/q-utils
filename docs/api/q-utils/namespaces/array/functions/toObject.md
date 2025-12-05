[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / toObject

# Function: toObject()

> **toObject**\<`T`, `K`, `V`\>(`arr`, `keyFn`, `valueFn`): `Record`\<`K`, `V`\>

Defined in: [array/transform.ts:22](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/transform.ts#L22)

将数组转换为对象

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number`

### V

`V`

## Parameters

### arr

源数组

`T`[] | `null` | `undefined`

### keyFn

(`item`) => `K`

生成键的函数

### valueFn

(`item`) => `V`

生成值的函数

## Returns

`Record`\<`K`, `V`\>

转换后的对象

## Example

```typescript
toObject(
  [{ id: 1, name: 'a' }, { id: 2, name: 'b' }],
  item => item.id,
  item => item.name
)
// 返回 { 1: 'a', 2: 'b' }
```
