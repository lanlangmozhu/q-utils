[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [date](../README.md) / getWorkingDays

# Function: getWorkingDays()

> **getWorkingDays**(`startDate`, `endDate`): `number`

Defined in: [date/statistics.ts:9](https://github.com/lanlangmozhu/q-utils/blob/main/src/date/statistics.ts#L9)

计算工作日数量

## Parameters

### startDate

`Date`

开始日期

### endDate

`Date`

结束日期

## Returns

`number`

工作日数量

## Example

```ts
getWorkingDays(new Date('2024-03-20'), new Date('2024-03-25')) // 4
```
