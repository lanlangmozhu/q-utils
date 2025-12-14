[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / padEnd

# Function: padEnd()

> **padEnd**(`str`, `length`, `padStr`): `string`

Defined in: [string/substring.ts:76](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/substring.ts#L76)

右侧填充

## Parameters

### str

`string`

要填充的字符串

### length

`number`

目标长度

### padStr

`string` = `' '`

填充字符，默认为空格

## Returns

`string`

填充后的字符串

## Example

```ts
padEnd('123', 5); // '123  '
padEnd('123', 5, '0'); // '12300'
```
