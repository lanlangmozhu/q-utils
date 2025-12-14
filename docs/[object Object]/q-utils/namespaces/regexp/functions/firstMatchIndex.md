[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / firstMatchIndex

# Function: firstMatchIndex()

> **firstMatchIndex**(`str`, `regexp`): `number`

Defined in: [regexp/utils.ts:71](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/utils.ts#L71)

获取正则表达式的第一个匹配位置

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`number`

第一个匹配位置

## Example

```ts
firstMatchIndex('test123', /\d+/) // 4
```
