[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isType

# Function: isType()

> **isType**(`value`, `type`): `boolean`

Defined in: [type/basic.ts:77](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/basic.ts#L77)

检查值是否为指定类型

## Parameters

### value

`unknown`

要检查的值

### type

类型字符串或类型字符串数组

`string` | `string`[]

## Returns

`boolean`

如果值是指定类型则返回true，否则返回false

## Example

```ts
isType(123, 'number'); // 返回: true
isType('abc', 'string'); // 返回: true
isType([], 'array'); // 返回: true
isType(null, 'null'); // 返回: true
isType(123, ['string', 'number']); // 返回: true
isType(undefined, ['null', 'undefined']); // 返回: true
```
