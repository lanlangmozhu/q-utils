[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / allCaptureGroups

# Function: allCaptureGroups()

> **allCaptureGroups**(`str`, `regexp`): `string`[][]

Defined in: [regexp/groups.ts:36](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/groups.ts#L36)

获取正则表达式的所有捕获组值

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`string`[][]

所有捕获组值

## Example

```ts
allCaptureGroups('test1 test2 test3', /\w+(\d+)/g) // [['1'], ['2'], ['3']]
```
