[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / allMatchRangesWithGroups

# Function: allMatchRangesWithGroups()

> **allMatchRangesWithGroups**(`str`, `regexp`): `object`[]

Defined in: [regexp/advanced.ts:135](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/advanced.ts#L135)

获取正则表达式的所有匹配范围和捕获组

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`object`[]

所有匹配范围和捕获组

## Example

```ts
allMatchRangesWithGroups('test1 test2 test3', /\w+(\d+)/g) // [{ start: 0, end: 5, groups: ['1'] }, { start: 6, end: 11, groups: ['2'] }, { start: 12, end: 17, groups: ['3'] }]
```
