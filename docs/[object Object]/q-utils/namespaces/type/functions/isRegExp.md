[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isRegExp

# Function: isRegExp()

> **isRegExp**(`value`): `value is RegExp`

Defined in: [type/advanced.ts:30](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/advanced.ts#L30)

检查值是否为正则表达式

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is RegExp`

是否为正则表达式

## Example

```ts
isRegExp(/test/) // true
isRegExp(new RegExp('test')) // true
isRegExp('test') // false
```
