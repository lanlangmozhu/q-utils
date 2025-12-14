[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / isNumeric

# Function: isNumeric()

> **isNumeric**(`str`): `boolean`

Defined in: [string/validate.ts:17](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/validate.ts#L17)

是否为数字字符串

## Parameters

### str

要验证的字符串

`string` | `null` | `undefined`

## Returns

`boolean`

是否为数字字符串

## Example

```ts
isNumeric('123'); // true
isNumeric('12.34'); // true
isNumeric('abc'); // false
```
