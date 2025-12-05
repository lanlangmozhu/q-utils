[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [error](../README.md) / getErrorMessage

# Function: getErrorMessage()

> **getErrorMessage**(`error`): `string`

Defined in: [error/utils.ts:25](https://github.com/lanlangmozhu/q-utils/blob/main/src/error/utils.ts#L25)

获取错误消息

## Parameters

### error

`unknown`

错误对象

## Returns

`string`

错误消息

## Example

```ts
getErrorMessage(new Error('test')) // 'test'
```
