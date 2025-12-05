[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / parse

# Function: parse()

> **parse**(`value`, `options`): `number`

Defined in: [number/format.ts:80](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/format.ts#L80)

解析数字字符串为数字

## Parameters

### value

`string`

要解析的字符串

### options

解析选项

#### radix?

`number`

进制，默认为10

#### allowNaN?

`boolean`

是否允许NaN，默认为false

#### allowInfinity?

`boolean`

是否允许无穷大，默认为false

## Returns

`number`

解析后的数字

## Example

```ts
parse('123.45') // 123.45
parse('1,234.56') // 1234.56
parse('abc') // 0
parse('abc', { allowNaN: true }) // NaN
```
