[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [error](../README.md) / isResourceError

# Function: isResourceError()

> **isResourceError**(`error`): `error is CustomError`

Defined in: [error/check.ts:71](https://github.com/lanlangmozhu/q-utils/blob/main/src/error/check.ts#L71)

检查是否为资源错误

## Parameters

### error

`unknown`

错误对象

## Returns

`error is CustomError`

是否为资源错误

## Example

```ts
isResourceError(createResourceError('test')) // true
isResourceError(new Error('test')) // false
```
