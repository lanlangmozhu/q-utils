[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [error](../README.md) / createBusinessError

# Function: createBusinessError()

> **createBusinessError**(`message`, `code?`): [`CustomError`](../classes/CustomError.md)

Defined in: [error/create.ts:45](https://github.com/lanlangmozhu/q-utils/blob/main/src/error/create.ts#L45)

创建业务错误

## Parameters

### message

`string`

错误信息

### code?

`string`

错误代码

## Returns

[`CustomError`](../classes/CustomError.md)

业务错误实例

## Example

```ts
createBusinessError('Operation failed', 'E002')
```
