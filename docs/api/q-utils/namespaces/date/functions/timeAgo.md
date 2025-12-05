[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [date](../README.md) / timeAgo

# Function: timeAgo()

> **timeAgo**(`date`): `string`

Defined in: [date/format.ts:35](https://github.com/lanlangmozhu/q-utils/blob/main/src/date/format.ts#L35)

获取相对时间描述

## Parameters

### date

`Date`

要计算的日期

## Returns

`string`

相对时间描述

## Example

```ts
timeAgo(new Date(Date.now() - 3600000)) // '1小时前'
```
