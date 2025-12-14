[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / getNamedCaptureGroups

# Function: getNamedCaptureGroups()

> **getNamedCaptureGroups**(`regexp`): `string`[]

Defined in: [regexp/groups.ts:54](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/groups.ts#L54)

获取正则表达式的所有命名捕获组

## Parameters

### regexp

`RegExp`

正则表达式

## Returns

`string`[]

所有命名捕获组

## Example

```ts
getNamedCaptureGroups(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // ['year', 'month', 'day']
```
