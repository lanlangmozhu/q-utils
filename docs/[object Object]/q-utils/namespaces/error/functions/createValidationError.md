[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [error](../README.md) / createValidationError

# Function: createValidationError()

> **createValidationError**(`message`, `code?`): [`CustomError`](../classes/CustomError.md)

Defined in: [error/create.ts:34](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/create.ts#L34)

创建验证错误

## Parameters

### message

`string`

错误信息

### code?

`string`

错误代码

## Returns

[`CustomError`](../classes/CustomError.md)

验证错误实例

## Example

```ts
createValidationError('Invalid input', 'E001')
```
