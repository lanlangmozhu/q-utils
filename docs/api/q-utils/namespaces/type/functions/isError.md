[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isError

# Function: isError()

> **isError**(`value`): `value is Error`

Defined in: [type/advanced.ts:41](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/advanced.ts#L41)

检查值是否为 Error 对象

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Error`

是否为 Error 对象

## Example

```ts
isError(new Error()) // true
isError(new TypeError()) // true
isError({}) // false
```
