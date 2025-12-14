[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / tax

# Function: tax()

> **tax**(`amount`, `taxRate`): `number`

Defined in: [number/finance.ts:134](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/finance.ts#L134)

计算税额

## Parameters

### amount

`number`

金额

### taxRate

`number`

税率（0-1）

## Returns

`number`

税额

## Example

```ts
tax(1000, 0.1) // 100
tax(1000, 0.2) // 200
```
