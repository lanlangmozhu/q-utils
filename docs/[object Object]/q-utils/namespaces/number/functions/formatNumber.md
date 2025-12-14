[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / formatNumber

# Function: formatNumber()

> **formatNumber**(`value`, `locale`, `options`): `string`

Defined in: [number/format.ts:35](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/format.ts#L35)

格式化数字

## Parameters

### value

`number`

要格式化的数字

### locale

`string` = `'zh-CN'`

地区设置

### options

`NumberFormatOptions` = `{}`

格式化选项

## Returns

`string`

格式化后的数字字符串

## Example

```ts
formatNumber(1234.56) // '1,234.56'
```
