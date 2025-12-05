[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [date](../README.md) / formatDate

# Function: formatDate()

> **formatDate**(`date`, `format`): `string`

Defined in: [date/format.ts:9](https://github.com/lanlangmozhu/q-utils/blob/main/src/date/format.ts#L9)

格式化日期

## Parameters

### date

`Date`

要格式化的日期

### format

`string` = `'YYYY-MM-DD'`

格式化模式

## Returns

`string`

格式化后的日期字符串

## Example

```ts
formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss') // '2024-03-20 14:30:00'
```
