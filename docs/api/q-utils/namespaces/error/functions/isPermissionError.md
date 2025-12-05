[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [error](../README.md) / isPermissionError

# Function: isPermissionError()

> **isPermissionError**(`error`): `error is CustomError`

Defined in: [error/check.ts:60](https://github.com/lanlangmozhu/q-utils/blob/main/src/error/check.ts#L60)

检查是否为权限错误

## Parameters

### error

`unknown`

错误对象

## Returns

`error is CustomError`

是否为权限错误

## Example

```ts
isPermissionError(createPermissionError('test')) // true
isPermissionError(new Error('test')) // false
```
