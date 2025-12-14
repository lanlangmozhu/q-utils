[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isDate

# Function: isDate()

> **isDate**(`value`): `value is Date`

Defined in: [type/object.ts:66](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/object.ts#L66)

检查值是否为日期对象

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Date`

是否为日期对象

## Example

```ts
isDate(new Date()) // true
isDate('2024-03-18') // false
```
