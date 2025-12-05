[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [date](../README.md) / isDateInRange

# Function: isDateInRange()

> **isDateInRange**(`date`, `startDate`, `endDate`): `boolean`

Defined in: [date/range.ts:10](https://github.com/lanlangmozhu/q-utils/blob/main/src/date/range.ts#L10)

判断日期是否在指定范围内

## Parameters

### date

`Date`

要检查的日期

### startDate

`Date`

范围开始日期

### endDate

`Date`

范围结束日期

## Returns

`boolean`

是否在范围内

## Example

```ts
isDateInRange(new Date('2024-03-20'), new Date('2024-03-19'), new Date('2024-03-21')) // true
```
