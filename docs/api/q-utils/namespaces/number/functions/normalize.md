[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / normalize

# Function: normalize()

> **normalize**(`value`, `min`, `max`, `targetMin`, `targetMax`): `number`

Defined in: [number/range.ts:86](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/range.ts#L86)

将数字归一化到指定范围

## Parameters

### value

`number`

要归一化的数字

### min

`number`

最小值

### max

`number`

最大值

### targetMin

`number` = `0`

目标最小值，默认为0

### targetMax

`number` = `1`

目标最大值，默认为1

## Returns

`number`

归一化后的数字

## Example

```ts
normalize(5, 0, 10) // 0.5
normalize(5, 0, 10, 0, 100) // 50
```
