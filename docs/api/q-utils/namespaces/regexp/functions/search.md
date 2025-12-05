[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / search

# Function: search()

> **search**(`str`, `regexp`): `number`

Defined in: [regexp/search.ts:17](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/search.ts#L17)

返回匹配位置

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`number`

匹配位置

## Example

```ts
search('test123', /\d+/) // 4
search('test', /\d+/) // -1
```
