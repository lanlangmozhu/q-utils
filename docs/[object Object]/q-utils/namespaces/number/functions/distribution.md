[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / distribution

# Function: distribution()

> **distribution**(`values`, `bins`): `Record`\<`string`, `number`\>

Defined in: [number/analysis.ts:122](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/analysis.ts#L122)

计算分布

## Parameters

### values

数值数组

`number`[] | `null` | `undefined`

### bins

区间数

`number` | `null` | `undefined`

## Returns

`Record`\<`string`, `number`\>

分布对象

## Example

```ts
distribution([1, 2, 2, 3, 3, 3, 4, 4, 5], 3) // { "1-2": 3, "2-3": 3, "3-4": 3 }
```
