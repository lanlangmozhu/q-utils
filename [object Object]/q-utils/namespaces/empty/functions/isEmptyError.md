[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [empty](../README.md) / isEmptyError

# Function: isEmptyError()

> **isEmptyError**(`value`): `value is Error`

Defined in: [empty/specific.ts:69](https://github.com/lanlangmozhu/q-utils/blob/main/src/empty/specific.ts#L69)

检查值是否为空 Error

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Error`

是否为空 Error

## Example

```ts
isEmptyError(new Error('')) // true
isEmptyError(new Error('test')) // false
```
