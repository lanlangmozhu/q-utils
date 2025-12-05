[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / allMatchTexts

# Function: allMatchTexts()

> **allMatchTexts**(`str`, `regexp`): `string`[]

Defined in: [regexp/advanced.ts:54](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/advanced.ts#L54)

获取正则表达式的所有匹配文本

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`string`[]

所有匹配文本

## Example

```ts
allMatchTexts('test1 test2 test3', /\w+(\d+)/g) // ['test1', 'test2', 'test3']
```
