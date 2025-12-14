[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / toScientific

# Function: toScientific()

> **toScientific**(`value`, `options`): `string`

Defined in: [number/format.ts:160](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/format.ts#L160)

将数字转换为科学计数法

## Parameters

### value

`number`

要转换的数字

### options

转换选项

#### precision?

`number`

保留的小数位数，默认为10

#### notation?

`"standard"` \| `"engineering"` \| `"compact"`

表示法类型，默认为'standard'

## Returns

`string`

科学计数法字符串

## Example

```ts
toScientific(1234567) // '1.234567e+6'
toScientific(1234567, { precision: 2 }) // '1.23e+6'
```
