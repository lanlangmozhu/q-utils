[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / presentValue

# Function: presentValue()

> **presentValue**(`futureValue`, `rate`, `time`): `number`

Defined in: [number/finance.ts:55](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/finance.ts#L55)

计算现值

## Parameters

### futureValue

`number`

未来值

### rate

`number`

年利率

### time

`number`

时间（年）

## Returns

`number`

现值

## Example

```ts
presentValue(1050, 0.05, 1) // 1000
```
