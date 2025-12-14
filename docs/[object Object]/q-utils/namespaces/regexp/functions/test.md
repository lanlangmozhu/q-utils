[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [regexp](../README.md) / test

# Function: test()

> **test**(`str`, `regexp`): `boolean`

Defined in: [regexp/search.ts:32](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/regexp/search.ts#L32)

测试字符串是否匹配正则表达式

## Parameters

### str

`string`

要测试的字符串

### regexp

`RegExp`

正则表达式

## Returns

`boolean`

是否匹配

## Example

```ts
test('test123', /\d+/) // true
test('test', /\d+/) // false
```
