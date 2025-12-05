[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isSet

# Function: isSet()

> **isSet**(`value`): `value is Set<unknown>`

Defined in: [type/advanced.ts:83](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/advanced.ts#L83)

检查值是否为 Set 对象

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Set<unknown>`

是否为 Set 对象

## Example

```ts
isSet(new Set()) // true
isSet([]) // false
```
