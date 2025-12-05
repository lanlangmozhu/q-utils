[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [date](../README.md) / isBefore

# Function: isBefore()

> **isBefore**(`date`, `compareDate`): `boolean`

Defined in: [date/basic.ts:36](https://github.com/lanlangmozhu/q-utils/blob/main/src/date/basic.ts#L36)

判断日期是否在指定日期之前

## Parameters

### date

`Date`

要检查的日期

### compareDate

`Date`

比较的日期

## Returns

`boolean`

是否在指定日期之前

## Example

```ts
isBefore(new Date('2024-03-19'), new Date('2024-03-20')) // true
```
