[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [error](../README.md) / createResourceError

# Function: createResourceError()

> **createResourceError**(`message`, `code?`): [`CustomError`](../classes/CustomError.md)

Defined in: [error/create.ts:78](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/create.ts#L78)

创建资源错误

## Parameters

### message

`string`

错误信息

### code?

`string`

错误代码

## Returns

[`CustomError`](../classes/CustomError.md)

资源错误实例

## Example

```ts
createResourceError('Resource not found', 'E005')
```
