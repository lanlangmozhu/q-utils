[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / allMatchPositionsWithNamedGroups

# Function: allMatchPositionsWithNamedGroups()

> **allMatchPositionsWithNamedGroups**(`str`, `regexp`): `object`[]

Defined in: [regexp/advanced.ts:158](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/advanced.ts#L158)

获取正则表达式的所有匹配位置和命名捕获组

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`object`[]

所有匹配位置和命名捕获组

## Example

```ts
allMatchPositionsWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // [{ index: 0, groups: { year: '2023', month: '01', day: '01' } }]
```
