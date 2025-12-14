[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [date](../README.md) / getDatesBetween

# Function: getDatesBetween()

> **getDatesBetween**(`startDate`, `endDate`): `Date`[]

Defined in: [date/statistics.ts:33](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/date/statistics.ts#L33)

获取两个日期之间的所有日期

## Parameters

### startDate

`Date`

开始日期

### endDate

`Date`

结束日期

## Returns

`Date`[]

日期数组

## Example

```ts
getDatesBetween(new Date('2024-03-20'), new Date('2024-03-22'))
// [2024-03-20, 2024-03-21, 2024-03-22]
```
