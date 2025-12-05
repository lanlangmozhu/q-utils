[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [error](../README.md) / getErrorName

# Function: getErrorName()

> **getErrorName**(`error`): `string`

Defined in: [error/utils.ts:45](https://github.com/lanlangmozhu/q-utils/blob/main/src/error/utils.ts#L45)

获取错误名称

## Parameters

### error

`unknown`

错误对象

## Returns

`string`

错误名称

## Example

```ts
getErrorName(new Error('test')) // 'Error'
```
