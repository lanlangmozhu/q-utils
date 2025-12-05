[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [date](../README.md) / convertTimeZone

# Function: convertTimeZone()

> **convertTimeZone**(`date`, `fromZone`, `toZone`): `Date`

Defined in: [date/timezone.ts:10](https://github.com/lanlangmozhu/q-utils/blob/main/src/date/timezone.ts#L10)

转换时区

## Parameters

### date

`Date`

要转换的日期

### fromZone

`string`

源时区

### toZone

`string`

目标时区

## Returns

`Date`

转换后的日期

## Example

```ts
convertTimeZone(new Date(), 'UTC', 'Asia/Shanghai')
```
