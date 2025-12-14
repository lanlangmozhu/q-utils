[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / execAll

# Function: execAll()

> **execAll**(`str`, `regexp`): `RegExpExecArray`[]

Defined in: [regexp/match.ts:44](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/match.ts#L44)

执行所有正则表达式匹配

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`RegExpExecArray`[]

所有匹配结果

## Example

```ts
execAll('test1 test2 test3', /\w+(\d+)/g) // [['test1', '1'], ['test2', '2'], ['test3', '3']]
```
