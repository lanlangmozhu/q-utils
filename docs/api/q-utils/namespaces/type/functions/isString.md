[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isString

# Function: isString()

> **isString**(`value`): `value is string`

Defined in: [type/basic.ts:181](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/basic.ts#L181)

检查值是否为字符串

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is string`

是否为字符串

## Example

```ts
isString('test') // true
isString('') // true
isString(1) // false
```
