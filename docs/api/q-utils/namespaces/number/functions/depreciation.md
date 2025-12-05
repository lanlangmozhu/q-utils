[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / depreciation

# Function: depreciation()

> **depreciation**(`cost`, `salvage`, `life`, `period`, `method`): `number`

Defined in: [number/finance.ts:196](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/finance.ts#L196)

计算折旧

## Parameters

### cost

`number`

资产原值

### salvage

`number`

残值

### life

`number`

使用年限

### period

`number`

计算期数

### method

折旧方法，默认为'straight'

`"straight"` | `"declining"`

## Returns

`number`

折旧金额

## Example

```ts
depreciation(10000, 1000, 5, 1) // 1800
depreciation(10000, 1000, 5, 1, 'declining') // 2000
```
