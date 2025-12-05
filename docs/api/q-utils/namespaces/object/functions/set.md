[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [object](../README.md) / set

# Function: set()

> **set**\<`T`\>(`obj`, `path`, `value`): `T`

Defined in: [object/setValueByPath.ts:28](https://github.com/lanlangmozhu/q-utils/blob/main/src/object/setValueByPath.ts#L28)

根据路径设置对象中的值，支持点表示法和数组路径

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### obj

`T`

要设置值的对象

### path

路径字符串或路径数组

`string` | (`string` \| `number`)[]

### value

`any`

要设置的值

## Returns

`T`

修改后的原始对象

## Example

```ts
// 基本用法 - 点表示法
const obj = { a: { b: { c: 42 } } };
set(obj, 'a.b.c', 100);           // obj.a.b.c 变为 100
set(obj, 'a.x.y', 'hello');       // 创建不存在的路径，obj.a.x.y 变为 'hello'

// 使用数组路径
set(obj, ['a', 'b', 'd'], true);  // obj.a.b.d 变为 true

// 数组索引
const arr = { users: [{ name: '张三' }, { name: '李四' }] };
set(arr, 'users[1].name', '王五'); // arr.users[1].name 变为 '王五'
set(arr, ['users', 1, 'name'], '王五'); // 同上

// 创建数组
const data = {};
set(data, 'items[0]', 'first');    // data 变为 { items: ['first'] }
```
