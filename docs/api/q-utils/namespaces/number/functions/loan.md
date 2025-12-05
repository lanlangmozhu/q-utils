[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / loan

# Function: loan()

> **loan**(`principal`, `annualRate`, `months`): `number`

Defined in: [number/finance.ts:159](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/finance.ts#L159)

计算贷款月供

## Parameters

### principal

`number`

贷款金额

### annualRate

`number`

年利率

### months

`number`

贷款期限（月）

## Returns

`number`

月供金额

## Example

```ts
loan(100000, 0.05, 12) // 8560.75
```
