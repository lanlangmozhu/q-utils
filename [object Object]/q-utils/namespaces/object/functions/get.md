[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [object](../README.md) / get

# Function: get()

> **get**\<`T`\>(`obj`, `path`, `defaultValue?`): `T`

Defined in: [object/getValueByPath.ts:25](https://github.com/lanlangmozhu/q-utils/blob/main/src/object/getValueByPath.ts#L25)

根据路径获取对象中的值，支持点表示法和数组路径

## Type Parameters

### T

`T` = `any`

## Parameters

### obj

`any`

要获取值的对象

### path

路径字符串或路径数组

`string` | (`string` \| `number`)[]

### defaultValue?

`T`

当路径不存在时返回的默认值

## Returns

`T`

路径对应的值或默认值

## Example

```ts
// 基本用法 - 点表示法
const obj = { a: { b: { c: 42 } } };
get(obj, 'a.b.c');          // 返回: 42
get(obj, 'a.b');            // 返回: { c: 42 }
get(obj, 'a.x.y', 'none');  // 返回: 'none'

// 使用数组路径
get(obj, ['a', 'b', 'c']);  // 返回: 42

// 数组索引
const arr = { users: [{ name: '张三' }, { name: '李四' }] };
get(arr, 'users[1].name');  // 返回: '李四'
get(arr, ['users', 1, 'name']); // 返回: '李四'
```
