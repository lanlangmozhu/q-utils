[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / indexOf

# Function: indexOf()

> **indexOf**(`str`, `searchStr`): `number`

Defined in: [string/search.ts:17](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/search.ts#L17)

查找子字符串

## Parameters

### str

`string`

要搜索的字符串

### searchStr

`string`

要查找的子字符串

## Returns

`number`

子字符串的位置，如果未找到则返回-1

## Example

```ts
indexOf('Hello World', 'World'); // 6
indexOf('Hello World', 'xyz'); // -1
```
