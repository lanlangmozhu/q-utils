[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / endsWith

# Function: endsWith()

> **endsWith**(`str`, `searchStr`): `boolean`

Defined in: [string/search.ts:92](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/search.ts#L92)

是否以某字符串结尾

## Parameters

### str

`string`

要检查的字符串

### searchStr

`string`

要查找的子字符串

## Returns

`boolean`

是否以该字符串结尾

## Example

```ts
endsWith('Hello World', 'World'); // true
endsWith('Hello World', 'Hello'); // false
```
