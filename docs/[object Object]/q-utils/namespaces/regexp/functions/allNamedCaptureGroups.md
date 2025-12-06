[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / allNamedCaptureGroups

# Function: allNamedCaptureGroups()

> **allNamedCaptureGroups**(`str`, `regexp`): `Record`\<`string`, `string`\>[]

Defined in: [regexp/groups.ts:75](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/groups.ts#L75)

获取正则表达式的所有命名捕获组值

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`Record`\<`string`, `string`\>[]

所有命名捕获组值

## Example

```ts
allNamedCaptureGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // [{ year: '2023', month: '01', day: '01' }]
```
