[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / matchAll

# Function: matchAll()

> **matchAll**(`str`, `regexp`): `RegExpMatchArray`[]

Defined in: [regexp/match.ts:16](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/match.ts#L16)

获取所有匹配结果

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`RegExpMatchArray`[]

匹配结果数组

## Example

```ts
matchAll('test1 test2 test3', /\w+(\d+)/g) // [['test1', '1'], ['test2', '2'], ['test3', '3']]
```
