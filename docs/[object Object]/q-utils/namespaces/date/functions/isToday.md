[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [date](../README.md) / isToday

# Function: isToday()

> **isToday**(`date`): `boolean`

Defined in: [date/basic.ts:21](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/date/basic.ts#L21)

判断日期是否为今天

## Parameters

### date

`Date`

要检查的日期

## Returns

`boolean`

是否为今天

## Example

```ts
isToday(new Date()) // true
isToday(new Date('2024-03-19')) // false
```
