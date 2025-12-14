[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [date](../README.md) / getDateRangeIntersection

# Function: getDateRangeIntersection()

> **getDateRangeIntersection**(`range1`, `range2`): \[`Date`, `Date`\] \| `null`

Defined in: [date/range.ts:26](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/date/range.ts#L26)

计算两个日期范围的交集

## Parameters

### range1

\[`Date`, `Date`\]

第一个日期范围

### range2

\[`Date`, `Date`\]

第二个日期范围

## Returns

\[`Date`, `Date`\] \| `null`

交集范围或null

## Example

```ts
getDateRangeIntersection(
  [new Date('2024-03-19'), new Date('2024-03-21')],
  [new Date('2024-03-20'), new Date('2024-03-22')]
) // [2024-03-20, 2024-03-21]
```
