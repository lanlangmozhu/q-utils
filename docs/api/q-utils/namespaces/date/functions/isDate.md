[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [date](../README.md) / isDate

# Function: isDate()

> **isDate**(`date`): `boolean`

Defined in: [date/basic.ts:9](https://github.com/lanlangmozhu/q-utils/blob/main/src/date/basic.ts#L9)

判断是否为有效的日期对象

## Parameters

### date

`any`

要检查的值

## Returns

`boolean`

是否为有效的日期对象

## Example

```ts
isDate(new Date()) // true
isDate('2024-03-20') // false
```
