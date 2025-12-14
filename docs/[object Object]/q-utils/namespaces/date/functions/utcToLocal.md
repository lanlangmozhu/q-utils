[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [date](../README.md) / utcToLocal

# Function: utcToLocal()

> **utcToLocal**(`date`): `Date`

Defined in: [date/timezone.ts:46](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/date/timezone.ts#L46)

UTC时间转本地时间

## Parameters

### date

`Date`

UTC时间

## Returns

`Date`

本地时间

## Example

```ts
utcToLocal(new Date('2024-03-20T00:00:00Z')) // 2024-03-20 08:00:00
```
