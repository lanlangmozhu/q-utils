[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / random

# Function: random()

> **random**(`min`, `max`, `inclusive`): `number`

Defined in: [number/random.ts:15](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/random.ts#L15)

生成指定范围内的随机数

## Parameters

### min

`number`

最小值

### max

`number`

最大值

### inclusive

`boolean` = `true`

是否包含边界值，默认为 true

## Returns

`number`

随机数

## Example

```ts
random(1, 10) // 1-10 之间的随机数
random(1, 10, false) // 2-9 之间的随机数
```
