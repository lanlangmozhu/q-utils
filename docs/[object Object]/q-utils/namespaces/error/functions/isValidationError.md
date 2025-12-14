[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [error](../README.md) / isValidationError

# Function: isValidationError()

> **isValidationError**(`error`): `error is CustomError`

Defined in: [error/check.ts:27](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/check.ts#L27)

检查是否为验证错误

## Parameters

### error

`unknown`

错误对象

## Returns

`error is CustomError`

是否为验证错误

## Example

```ts
isValidationError(createValidationError('test')) // true
isValidationError(new Error('test')) // false
```
