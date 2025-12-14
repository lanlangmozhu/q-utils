[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / lerp

# Function: lerp()

> **lerp**(`start`, `end`, `t`): `number`

Defined in: [number/range.ts:66](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/range.ts#L66)

线性插值计算

## Parameters

### start

`number`

起始值

### end

`number`

结束值

### t

`number`

插值因子（0-1）

## Returns

`number`

插值结果

## Example

```ts
lerp(0, 100, 0.5) // 50
lerp(0, 100, 0) // 0
lerp(0, 100, 1) // 100
```
