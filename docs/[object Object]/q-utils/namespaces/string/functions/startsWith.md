[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / startsWith

# Function: startsWith()

> **startsWith**(`str`, `searchStr`): `boolean`

Defined in: [string/search.ts:77](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/search.ts#L77)

是否以某字符串开头

## Parameters

### str

`string`

要检查的字符串

### searchStr

`string`

要查找的子字符串

## Returns

`boolean`

是否以该字符串开头

## Example

```ts
startsWith('Hello World', 'Hello'); // true
startsWith('Hello World', 'World'); // false
```
