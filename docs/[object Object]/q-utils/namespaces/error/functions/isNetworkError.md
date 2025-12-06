[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [error](../README.md) / isNetworkError

# Function: isNetworkError()

> **isNetworkError**(`error`): `error is CustomError`

Defined in: [error/check.ts:49](https://github.com/lanlangmozhu/q-utils/blob/main/src/error/check.ts#L49)

检查是否为网络错误

## Parameters

### error

`unknown`

错误对象

## Returns

`error is CustomError`

是否为网络错误

## Example

```ts
isNetworkError(createNetworkError('test')) // true
isNetworkError(new Error('test')) // false
```
