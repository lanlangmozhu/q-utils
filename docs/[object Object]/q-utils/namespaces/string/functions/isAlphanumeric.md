[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / isAlphanumeric

# Function: isAlphanumeric()

> **isAlphanumeric**(`str`): `boolean`

Defined in: [string/validate.ts:50](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/validate.ts#L50)

是否为字母数字字符串

## Parameters

### str

要验证的字符串

`string` | `null` | `undefined`

## Returns

`boolean`

是否为字母数字字符串

## Example

```ts
isAlphanumeric('abc123'); // true
isAlphanumeric('abc'); // true
isAlphanumeric('123'); // true
isAlphanumeric('abc-123'); // false
```
