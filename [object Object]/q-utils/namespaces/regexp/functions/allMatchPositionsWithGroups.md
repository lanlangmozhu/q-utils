[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / allMatchPositionsWithGroups

# Function: allMatchPositionsWithGroups()

> **allMatchPositionsWithGroups**(`str`, `regexp`): `object`[]

Defined in: [regexp/advanced.ts:113](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/advanced.ts#L113)

获取正则表达式的所有匹配位置和捕获组

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`object`[]

所有匹配位置和捕获组

## Example

```ts
allMatchPositionsWithGroups('test1 test2 test3', /\w+(\d+)/g) // [{ index: 0, groups: ['1'] }, { index: 6, groups: ['2'] }, { index: 12, groups: ['3'] }]
```
