[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / getCaptureGroups

# Function: getCaptureGroups()

> **getCaptureGroups**(`regexp`): `string`[]

Defined in: [regexp/groups.ts:15](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/groups.ts#L15)

获取正则表达式的所有捕获组

## Parameters

### regexp

`RegExp`

正则表达式

## Returns

`string`[]

捕获组数组

## Example

```ts
getCaptureGroups(/test-(\\d+)-(\\w+)/) // ['$1', '$2']
```
