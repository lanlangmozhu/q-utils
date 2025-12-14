[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [date](../README.md) / isAfter

# Function: isAfter()

> **isAfter**(`date`, `compareDate`): `boolean`

Defined in: [date/basic.ts:48](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/date/basic.ts#L48)

判断日期是否在指定日期之后

## Parameters

### date

`Date`

要检查的日期

### compareDate

`Date`

比较的日期

## Returns

`boolean`

是否在指定日期之后

## Example

```ts
isAfter(new Date('2024-03-20'), new Date('2024-03-19')) // true
```
