[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / padStart

# Function: padStart()

> **padStart**(`str`, `length`, `padStr`): `string`

Defined in: [string/substring.ts:60](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/substring.ts#L60)

左侧填充

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
padStart('123', 5); // '  123'
padStart('123', 5, '0'); // '00123'
```
