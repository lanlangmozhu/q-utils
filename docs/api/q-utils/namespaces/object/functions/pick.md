[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [object](../README.md) / pick

# Function: pick()

> **pick**\<`T`, `K`\>(`obj`, `keys`): `T` *extends* `object` ? `Pick`\<`T`\<`T`\>, `K`\> : `Record`\<`string`, `never`\>

Defined in: [object/pick.ts:24](https://github.com/lanlangmozhu/q-utils/blob/main/src/object/pick.ts#L24)

从对象中选取指定的属性，创建一个新对象

## Type Parameters

### T

`T` *extends* `object` \| `null` \| `undefined`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`T`

源对象，可以为 null 或 undefined

### keys

`K`[]

要选取的属性名数组

## Returns

`T` *extends* `object` ? `Pick`\<`T`\<`T`\>, `K`\> : `Record`\<`string`, `never`\>

包含选定属性的新对象，如果源对象为 null 或 undefined，则返回空对象

## Example

```ts
// 基本用法
const user = { id: 1, name: '张三', age: 30, email: 'zhangsan@example.com' };

const userBasic = pick(user, ['id', 'name']);
console.log(userBasic); // 输出: { id: 1, name: '张三' }

// 处理不存在的属性
const result = pick(user, ['id', 'role']);
console.log(result); // 输出: { id: 1 }

// 处理 null 或 undefined
const nullResult = pick(null, ['id']);
console.log(nullResult); // 输出: {}
```
