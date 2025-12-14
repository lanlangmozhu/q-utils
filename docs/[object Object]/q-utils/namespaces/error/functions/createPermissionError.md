[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [error](../README.md) / createPermissionError

# Function: createPermissionError()

> **createPermissionError**(`message`, `code?`): [`CustomError`](../classes/CustomError.md)

Defined in: [error/create.ts:67](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/create.ts#L67)

创建权限错误

## Parameters

### message

`string`

错误信息

### code?

`string`

错误代码

## Returns

[`CustomError`](../classes/CustomError.md)

权限错误实例

## Example

```ts
createPermissionError('Access denied', 'E004')
```
