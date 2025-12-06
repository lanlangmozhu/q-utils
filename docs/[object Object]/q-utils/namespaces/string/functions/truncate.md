[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / truncate

# Function: truncate()

> **truncate**(`str`, `length`, `omission`, `countingChineseCharsAsTwo`): `string`

Defined in: [string/substring.ts:21](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/substring.ts#L21)

截断字符串，超出指定长度的部分用省略号替代

## Parameters

### str

`string`

要处理的字符串

### length

`number`

最大长度

### omission

`string` = `'...'`

省略符号，默认为'...'

### countingChineseCharsAsTwo

`boolean` = `false`

是否将中文字符按两个字符计算，默认为false

## Returns

`string`

处理后的字符串

## Example

```ts
truncate('Hello World', 5); // 'Hello...'
truncate('Hello World', 8, '…'); // 'Hello Wo…'
truncate('你好世界', 4); // '你好世界'
truncate('你好世界', 4, '...', true); // '你好...'
```
