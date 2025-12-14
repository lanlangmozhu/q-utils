[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / decodeHtml

# Function: decodeHtml()

> **decodeHtml**(`str`): `string`

Defined in: [string/encode.ts:97](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/encode.ts#L97)

HTML解码

## Parameters

### str

要解码的字符串

`string` | `null` | `undefined`

## Returns

`string`

解码后的字符串

## Example

```ts
decodeHtml('&lt;div&gt;Hello &amp; World&lt;/div&gt;'); // '<div>Hello & World</div>'
```
