[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [empty](../README.md) / isEmptyDate

# Function: isEmptyDate()

> **isEmptyDate**(`value`): `value is Date`

Defined in: [empty/specific.ts:47](https://github.com/lanlangmozhu/q-utils/blob/main/src/empty/specific.ts#L47)

检查值是否为空 Date

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Date`

是否为空 Date

## Example

```ts
isEmptyDate(new Date('')) // true
isEmptyDate(new Date()) // false
```
