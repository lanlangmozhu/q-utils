[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / allMatchRangesWithText

# Function: allMatchRangesWithText()

> **allMatchRangesWithText**(`str`, `regexp`): `object`[]

Defined in: [regexp/advanced.ts:90](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/advanced.ts#L90)

获取正则表达式的所有匹配范围和文本

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`object`[]

所有匹配范围和文本

## Example

```ts
allMatchRangesWithText('test1 test2 test3', /\w+(\d+)/g) // [{ start: 0, end: 5, text: 'test1' }, { start: 6, end: 11, text: 'test2' }, { start: 12, end: 17, text: 'test3' }]
```
