[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [object](../README.md) / deepClone

# Function: deepClone()

> **deepClone**\<`T`\>(`obj`): `T`

Defined in: [object/deepClone.ts:30](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/object/deepClone.ts#L30)

深拷贝对象或数组，创建一个完全独立的副本

## Type Parameters

### T

`T`

## Parameters

### obj

`T`

要深拷贝的对象或数组

## Returns

`T`

深拷贝后的对象或数组

## Example

```ts
// 基本用法
const original = { 
  name: '张三', 
  age: 30,
  address: { city: '北京', district: '海淀' },
  hobbies: ['阅读', '旅行'] 
};

const copy = deepClone(original);
copy.address.city = '上海';
copy.hobbies.push('游泳');

console.log(original.address.city); // 输出: '北京'
console.log(original.hobbies); // 输出: ['阅读', '旅行']

// 处理循环引用
const obj: any = { name: '张三' };
obj.self = obj;
const cloned = deepClone(obj);
console.log(cloned.self === cloned); // 输出: true
```
