[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isNull

# Function: isNull()

> **isNull**(`value`): `value is null`

Defined in: [type/basic.ts:107](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/basic.ts#L107)

检查值是否为 null

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is null`

是否为 null

## Example

```ts
isNull(null) // true
isNull(undefined) // false
isNull('') // false
```
