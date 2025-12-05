[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / loanInterest

# Function: loanInterest()

> **loanInterest**(`principal`, `rate`, `months`): `number`

Defined in: [number/finance.ts:176](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/finance.ts#L176)

计算贷款总利息

## Parameters

### principal

`number`

贷款金额

### rate

`number`

年利率

### months

`number`

贷款期限（月）

## Returns

`number`

总利息

## Example

```ts
loanInterest(100000, 0.05, 12) // 2729
```
