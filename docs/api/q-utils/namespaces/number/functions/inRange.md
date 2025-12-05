[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / inRange

# Function: inRange()

> **inRange**(`value`, `min`, `max`, `inclusive`): `boolean`

Defined in: [number/range.ts:46](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/range.ts#L46)

检查数字是否在指定范围内

## Parameters

### value

`number`

要检查的数字

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

`boolean`

是否在范围内

## Example

```ts
inRange(5, 1, 10) // true
inRange(5, 1, 5, false) // false
inRange(5, 1, 5, true) // true
```
