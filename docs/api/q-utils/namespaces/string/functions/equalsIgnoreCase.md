[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / equalsIgnoreCase

# Function: equalsIgnoreCase()

> **equalsIgnoreCase**(`str1`, `str2`): `boolean`

Defined in: [string/compare.ts:70](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/compare.ts#L70)

忽略大小写检查两个字符串是否相等

## Parameters

### str1

第一个字符串

`string` | `null` | `undefined`

### str2

第二个字符串

`string` | `null` | `undefined`

## Returns

`boolean`

是否相等

## Example

```ts
equalsIgnoreCase('hello', 'HELLO'); // true
equalsIgnoreCase('hello', 'world'); // false
```
