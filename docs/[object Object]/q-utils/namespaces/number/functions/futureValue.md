[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / futureValue

# Function: futureValue()

> **futureValue**(`presentValue`, `rate`, `time`): `number`

Defined in: [number/finance.ts:72](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/finance.ts#L72)

计算未来值

## Parameters

### presentValue

`number`

现值

### rate

`number`

年利率

### time

`number`

时间（年）

## Returns

`number`

未来值

## Example

```ts
futureValue(1000, 0.05, 1) // 1050
```
