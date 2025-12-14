[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / isUrl

# Function: isUrl()

> **isUrl**(`str`): `boolean`

Defined in: [string/validate.ts:82](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/validate.ts#L82)

是否为URL

## Parameters

### str

要验证的字符串

`string` | `null` | `undefined`

## Returns

`boolean`

是否为URL

## Example

```ts
isUrl('https://example.com'); // true
isUrl('http://example.com'); // true
isUrl('ftp://example.com'); // true
isUrl('invalid-url'); // false
```
