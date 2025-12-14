[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / compare

# Function: compare()

> **compare**(`str1`, `str2`): `number`

Defined in: [string/compare.ts:18](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/compare.ts#L18)

比较两个字符串

## Parameters

### str1

第一个字符串

`string` | `null` | `undefined`

### str2

第二个字符串

`string` | `null` | `undefined`

## Returns

`number`

比较结果：-1 表示 str1 < str2，0 表示相等，1 表示 str1 > str2

## Example

```ts
compare('a', 'b'); // -1
compare('b', 'a'); // 1
compare('a', 'a'); // 0
```
