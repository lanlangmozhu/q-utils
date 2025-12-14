[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [error](../README.md) / createNetworkError

# Function: createNetworkError()

> **createNetworkError**(`message`, `code?`): [`CustomError`](../classes/CustomError.md)

Defined in: [error/create.ts:56](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/create.ts#L56)

创建网络错误

## Parameters

### message

`string`

错误信息

### code?

`string`

错误代码

## Returns

[`CustomError`](../classes/CustomError.md)

网络错误实例

## Example

```ts
createNetworkError('Connection failed', 'E003')
```
