[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isUndefined

# Function: isUndefined()

> **isUndefined**(`value`): `value is undefined`

Defined in: [type/basic.ts:96](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/basic.ts#L96)

检查值是否为 undefined

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is undefined`

是否为 undefined

## Example

```ts
isUndefined(undefined) // true
isUndefined(null) // false
isUndefined('') // false
```
