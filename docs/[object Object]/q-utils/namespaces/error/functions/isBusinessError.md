[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [error](../README.md) / isBusinessError

# Function: isBusinessError()

> **isBusinessError**(`error`): `error is CustomError`

Defined in: [error/check.ts:38](https://github.com/lanlangmozhu/q-utils/blob/main/src/error/check.ts#L38)

检查是否为业务错误

## Parameters

### error

`unknown`

错误对象

## Returns

`error is CustomError`

是否为业务错误

## Example

```ts
isBusinessError(createBusinessError('test')) // true
isBusinessError(new Error('test')) // false
```
