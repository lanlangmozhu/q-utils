[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / getType

# Function: getType()

> **getType**(`value`): `string`

Defined in: [type/basic.ts:27](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/basic.ts#L27)

获取值的类型

## Parameters

### value

`unknown`

要检查的值

## Returns

`string`

类型字符串

## Example

```ts
getType(123); // 返回: 'number'
getType('abc'); // 返回: 'string'
getType(true); // 返回: 'boolean'
getType(null); // 返回: 'null'
getType(undefined); // 返回: 'undefined'
getType([]); // 返回: 'array'
getType({}); // 返回: 'object'
getType(new Date()); // 返回: 'date'
getType(/\d+/); // 返回: 'regexp'
getType(new Map()); // 返回: 'map'
getType(new Set()); // 返回: 'set'
getType(() => {}); // 返回: 'function'
```
