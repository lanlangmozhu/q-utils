[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [date](../README.md) / solarToLunar

# Function: solarToLunar()

> **solarToLunar**(`date`): `LunarDate`

Defined in: [date/lunar.ts:16](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/date/lunar.ts#L16)

公历转农历

## Parameters

### date

`Date`

公历日期

## Returns

`LunarDate`

农历日期信息

## Example

```ts
solarToLunar(new Date('2024-03-20')) // { year: 2024, month: 2, day: 11, leap: false }
```
