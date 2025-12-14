[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [date](../README.md) / endOfDay

# Function: endOfDay()

> **endOfDay**(`date`): `Date`

Defined in: [date/time.ts:23](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/date/time.ts#L23)

获取日期的结束时间（23:59:59）

## Parameters

### date

`Date`

日期对象

## Returns

`Date`

结束时间

## Example

```ts
endOfDay(new Date('2024-03-20 14:30:00')) // 2024-03-20 23:59:59
```
