[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isPlainObject

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is Record<string, unknown>`

Defined in: [type/object.ts:29](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/object.ts#L29)

检查值是否为普通对象（由 Object 构造函数创建或原型链上没有其他对象）

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Record<string, unknown>`

是否为普通对象

## Example

```ts
isPlainObject({}) // true
isPlainObject(Object.create(null)) // true
isPlainObject(new Date()) // false
isPlainObject([]) // false
```
