[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / allMatchRangesWithNamedGroups

# Function: allMatchRangesWithNamedGroups()

> **allMatchRangesWithNamedGroups**(`str`, `regexp`): `object`[]

Defined in: [regexp/advanced.ts:182](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/advanced.ts#L182)

获取正则表达式的所有匹配范围和命名捕获组

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`object`[]

所有匹配范围和命名捕获组

## Example

```ts
allMatchRangesWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // [{ start: 0, end: 10, groups: { year: '2023', month: '01', day: '01' } }]
```
