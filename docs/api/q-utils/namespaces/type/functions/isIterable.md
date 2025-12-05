[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isIterable

# Function: isIterable()

> **isIterable**(`value`): `value is Iterable<unknown, any, any>`

Defined in: [type/advanced.ts:117](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/advanced.ts#L117)

检查值是否为可迭代对象

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Iterable<unknown, any, any>`

是否为可迭代对象

## Example

```ts
isIterable([]) // true
isIterable('') // true
isIterable(new Set()) // true
isIterable({}) // false
```
