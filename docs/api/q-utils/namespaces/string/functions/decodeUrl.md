[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / decodeUrl

# Function: decodeUrl()

> **decodeUrl**(`str`): `string`

Defined in: [string/encode.ts:31](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/encode.ts#L31)

URL解码

## Parameters

### str

要解码的字符串

`string` | `null` | `undefined`

## Returns

`string`

解码后的字符串

## Example

```ts
decodeUrl('Hello%20World'); // 'Hello World'
decodeUrl('%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C'); // '你好世界'
```
