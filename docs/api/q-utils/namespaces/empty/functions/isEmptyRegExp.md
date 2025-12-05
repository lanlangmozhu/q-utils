[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [empty](../README.md) / isEmptyRegExp

# Function: isEmptyRegExp()

> **isEmptyRegExp**(`value`): `value is RegExp`

Defined in: [empty/specific.ts:58](https://github.com/lanlangmozhu/q-utils/blob/main/src/empty/specific.ts#L58)

检查值是否为空正则表达式

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is RegExp`

是否为空正则表达式

## Example

```ts
isEmptyRegExp(new RegExp('')) // true
isEmptyRegExp(/test/) // false
```
