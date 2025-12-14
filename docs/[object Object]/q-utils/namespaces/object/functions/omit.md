[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [object](../README.md) / omit

# Function: omit()

> **omit**\<`T`, `K`\>(`obj`, `keys`): `Partial`\<`T`\>

Defined in: [object/omit.ts:12](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/object/omit.ts#L12)

从对象中排除指定的属性，返回新对象

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

### K

`K` *extends* (`string` \| keyof `T`)[]

## Parameters

### obj

`T`

源对象

### keys

`K`

要排除的属性名数组，支持点号路径

## Returns

`Partial`\<`T`\>

新对象

## Example

```ts
const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
omit(obj, ['a', 'b.c']); // { b: { d: 3 }, e: 4 }
```
