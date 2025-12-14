[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / replaceAll

# Function: replaceAll()

> **replaceAll**(`str`, `regexp`, `replacement`): `string`

Defined in: [regexp/replace.ts:17](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/replace.ts#L17)

替换所有匹配项

## Parameters

### str

`string`

要替换的字符串

### regexp

`RegExp`

正则表达式

### replacement

`string`

替换内容

## Returns

`string`

替换后的字符串

## Example

```ts
replaceAll('test1 test2 test3', /\w+(\d+)/g, 'word$1') // 'word1 word2 word3'
```
