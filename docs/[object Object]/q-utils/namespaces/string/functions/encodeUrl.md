[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / encodeUrl

# Function: encodeUrl()

> **encodeUrl**(`str`): `string`

Defined in: [string/encode.ts:16](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/encode.ts#L16)

URL编码

## Parameters

### str

要编码的字符串

`string` | `null` | `undefined`

## Returns

`string`

编码后的字符串

## Example

```ts
encodeUrl('Hello World'); // 'Hello%20World'
encodeUrl('你好世界'); // '%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C'
```
