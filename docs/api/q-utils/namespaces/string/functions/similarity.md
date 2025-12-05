[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / similarity

# Function: similarity()

> **similarity**(`str1`, `str2`): `number`

Defined in: [string/compare.ts:87](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/compare.ts#L87)

计算两个字符串的相似度（Levenshtein距离）

## Parameters

### str1

第一个字符串

`string` | `null` | `undefined`

### str2

第二个字符串

`string` | `null` | `undefined`

## Returns

`number`

相似度（0-1之间的数值）

## Example

```ts
similarity('hello', 'hallo'); // 0.8
similarity('world', 'word'); // 0.8
```
