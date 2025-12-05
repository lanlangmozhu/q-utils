[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / match

# Function: match()

> **match**(`str`, `regexp`): `RegExpMatchArray` \| `null`

Defined in: [regexp/match.ts:63](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/match.ts#L63)

返回匹配结果

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`RegExpMatchArray` \| `null`

匹配结果

## Example

```ts
match('test123', /(\d+)/) // ['123', '123']
```
