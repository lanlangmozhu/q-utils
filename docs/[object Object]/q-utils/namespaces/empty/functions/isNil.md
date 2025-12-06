[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [empty](../README.md) / isNil

# Function: isNil()

> **isNil**(`value`): value is null \| undefined

Defined in: [empty/basic.ts:17](https://github.com/lanlangmozhu/q-utils/blob/main/src/empty/basic.ts#L17)

检查值是否为 null 或 undefined

## Parameters

### value

`unknown`

要检查的值

## Returns

value is null \| undefined

是否为 null 或 undefined

## Example

```ts
isNil(null) // true
isNil(undefined) // true
isNil('') // false
isNil(0) // false
isNil(false) // false
```
