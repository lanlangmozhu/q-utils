[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / countMatches

# Function: countMatches()

> **countMatches**(`str`, `regexp`): `number`

Defined in: [regexp/utils.ts:57](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/utils.ts#L57)

获取正则表达式的匹配次数

## Parameters

### str

`string`

要匹配的字符串

### regexp

`RegExp`

正则表达式

## Returns

`number`

匹配次数

## Example

```ts
countMatches('test1 test2 test3', /\w+(\d+)/g) // 3
```
