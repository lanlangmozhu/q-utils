[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [error](../README.md) / getErrorCode

# Function: getErrorCode()

> **getErrorCode**(`error`): `string` \| `undefined`

Defined in: [error/utils.ts:35](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/utils.ts#L35)

获取错误代码

## Parameters

### error

`unknown`

错误对象

## Returns

`string` \| `undefined`

错误代码

## Example

```ts
getErrorCode(createCustomError('Test', 'test', 'E001')) // 'E001'
```
