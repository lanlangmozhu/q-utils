[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [regexp](../README.md) / split

# Function: split()

> **split**(`str`, `regexp`): `string`[]

Defined in: [regexp/search.ts:46](https://github.com/lanlangmozhu/q-utils/blob/main/src/regexp/search.ts#L46)

按正则表达式分割字符串

## Parameters

### str

`string`

要分割的字符串

### regexp

`RegExp`

正则表达式

## Returns

`string`[]

分割后的字符串数组

## Example

```ts
split('test1,test2;test3', /[,;]/) // ['test1', 'test2', 'test3']
```
