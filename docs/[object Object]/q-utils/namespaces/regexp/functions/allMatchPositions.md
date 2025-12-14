[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / allMatchPositions

# Function: allMatchPositions()

> **allMatchPositions**(`str`, `regexp`): `object`[]

Defined in: [regexp/advanced.ts:68](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/advanced.ts#L68)

获取正则表达式的所有匹配位置和文本

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`object`[]

所有匹配位置和文本

## Example

```ts
allMatchPositions('test1 test2 test3', /\w+(\d+)/g) // [{ index: 0, text: 'test1' }, { index: 6, text: 'test2' }, { index: 12, text: 'test3' }]
```
