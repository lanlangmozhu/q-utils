[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / clamp

# Function: clamp()

> **clamp**(`value`, `min`, `max`): `number`

Defined in: [number/range.ts:17](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/range.ts#L17)

将数字限制在指定范围内

## Parameters

### value

`number`

要限制的数字

### min

`number`

最小值

### max

`number`

最大值

## Returns

`number`

限制后的数字

## Example

```ts
clamp(5, 0, 10) // 5
clamp(-1, 0, 10) // 0
clamp(11, 0, 10) // 10
```
