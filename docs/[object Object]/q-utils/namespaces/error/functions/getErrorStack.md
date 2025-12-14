[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [error](../README.md) / getErrorStack

# Function: getErrorStack()

> **getErrorStack**(`error`): `string`

Defined in: [error/utils.ts:15](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/utils.ts#L15)

获取错误堆栈信息

## Parameters

### error

`Error`

错误对象

## Returns

`string`

错误堆栈信息

## Example

```ts
getErrorStack(new Error('test'))
```
