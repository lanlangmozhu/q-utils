[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / toCurrency

# Function: toCurrency()

> **toCurrency**(`value`, `locale`, `options`): `string`

Defined in: [number/format.ts:15](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/format.ts#L15)

将数字转换为货币格式

## Parameters

### value

`number`

要格式化的数字

### locale

`string` = `'zh-CN'`

地区设置

### options

`NumberFormatOptions` = `...`

格式化选项

## Returns

`string`

格式化后的货币字符串

## Example

```ts
toCurrency(1234.56) // '¥1,234.56'
```
