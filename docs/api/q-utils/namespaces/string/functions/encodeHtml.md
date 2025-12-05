[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / encodeHtml

# Function: encodeHtml()

> **encodeHtml**(`str`): `string`

Defined in: [string/encode.ts:73](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/encode.ts#L73)

HTML编码

## Parameters

### str

要编码的字符串

`string` | `null` | `undefined`

## Returns

`string`

编码后的字符串

## Example

```ts
encodeHtml('<div>Hello & World</div>'); // '&lt;div&gt;Hello &amp; World&lt;/div&gt;'
```
