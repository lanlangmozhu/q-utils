[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [empty](../README.md) / isEmpty

# Function: isEmpty()

> **isEmpty**(`value`): `boolean`

Defined in: [empty/basic.ts:33](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/empty/basic.ts#L33)

检查值是否为空（null、undefined、空字符串、空数组、空对象）

## Parameters

### value

`unknown`

要检查的值

## Returns

`boolean`

是否为空

## Example

```ts
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty('') // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty(0) // false
isEmpty('0') // false
```
