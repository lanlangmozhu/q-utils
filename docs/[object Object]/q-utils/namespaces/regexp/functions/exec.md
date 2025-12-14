[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / exec

# Function: exec()

> **exec**(`str`, `regexp`): `RegExpExecArray` \| `null`

Defined in: [regexp/match.ts:30](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/match.ts#L30)

执行正则表达式匹配

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`RegExpExecArray` \| `null`

匹配结果

## Example

```ts
exec('test123', /(\d+)/) // ['123', '123']
```
