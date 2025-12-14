[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / allMatchIndices

# Function: allMatchIndices()

> **allMatchIndices**(`str`, `regexp`): `number`[]

Defined in: [regexp/advanced.ts:16](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/advanced.ts#L16)

获取正则表达式的所有匹配位置

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`number`[]

所有匹配位置

## Example

```ts
allMatchIndices('test1 test2 test3', /\w+(\d+)/g) // [0, 6, 12]
```
