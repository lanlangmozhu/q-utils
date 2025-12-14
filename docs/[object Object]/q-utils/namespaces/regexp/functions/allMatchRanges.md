[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / allMatchRanges

# Function: allMatchRanges()

> **allMatchRanges**(`str`, `regexp`): \[`number`, `number`\][]

Defined in: [regexp/advanced.ts:35](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/advanced.ts#L35)

获取正则表达式的所有匹配范围

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

\[`number`, `number`\][]

所有匹配范围

## Example

```ts
allMatchRanges('test1 test2 test3', /\w+(\d+)/g) // [[0, 5], [6, 11], [12, 17]]
```
