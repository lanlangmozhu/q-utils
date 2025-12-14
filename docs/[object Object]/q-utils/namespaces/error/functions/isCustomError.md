[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [error](../README.md) / isCustomError

# Function: isCustomError()

> **isCustomError**(`error`): `error is CustomError`

Defined in: [error/check.ts:16](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/check.ts#L16)

检查是否为自定义错误

## Parameters

### error

`unknown`

错误对象

## Returns

`error is CustomError`

是否为自定义错误

## Example

```ts
isCustomError(new CustomError('Test', 'test')) // true
isCustomError(new Error('test')) // false
```
