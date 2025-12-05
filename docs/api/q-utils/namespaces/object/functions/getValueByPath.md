[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [object](../README.md) / getValueByPath

# Function: getValueByPath()

> **getValueByPath**\<`T`\>(`obj`, `path`): `T` \| `undefined`

Defined in: [object/getValueByPath.ts:94](https://github.com/lanlangmozhu/q-utils/blob/main/src/object/getValueByPath.ts#L94)

根据路径获取对象中的值

## Type Parameters

### T

`T` = `any`

## Parameters

### obj

`Record`\<`string`, `any`\>

源对象

### path

路径，可以是字符串（用点号分隔）或字符串数组

`string` | `string`[]

## Returns

`T` \| `undefined`

路径对应的值，如果路径不存在则返回 undefined

## Example

```ts
const obj = { a: { b: { c: 1 } } };
getValueByPath(obj, 'a.b.c'); // 1
getValueByPath(obj, ['a', 'b', 'c']); // 1
getValueByPath(obj, 'a.d.e'); // undefined
```
