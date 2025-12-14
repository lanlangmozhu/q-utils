[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / replace

# Function: replace()

> **replace**(`str`, `regexp`, `replacement`): `string`

Defined in: [regexp/replace.ts:32](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/replace.ts#L32)

替换匹配项

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
replace('test123', /(\d+)/, '456') // 'test456'
```
