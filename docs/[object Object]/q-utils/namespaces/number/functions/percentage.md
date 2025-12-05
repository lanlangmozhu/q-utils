[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / percentage

# Function: percentage()

> **percentage**(`value`, `options`): `string`

Defined in: [number/format.ts:132](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/format.ts#L132)

将数字转换为百分比

## Parameters

### value

`number`

要转换的数字

### options

转换选项

#### precision?

`number`

保留的小数位数，默认为0

#### withSymbol?

`boolean`

是否包含百分号，默认为true

## Returns

`string`

百分比字符串

## Example

```ts
percentage(0.1234) // '12%'
percentage(0.1234, { precision: 2 }) // '12.34%'
percentage(0.1234, { withSymbol: false }) // '12'
```
