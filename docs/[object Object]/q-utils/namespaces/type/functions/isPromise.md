[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isPromise

# Function: isPromise()

> **isPromise**(`value`): `value is Promise<unknown>`

Defined in: [type/advanced.ts:15](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/advanced.ts#L15)

检查值是否为 Promise

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is Promise<unknown>`

是否为 Promise

## Example

```ts
isPromise(Promise.resolve()) // true
isPromise(new Promise(() => {})) // true
isPromise({}) // false
```
