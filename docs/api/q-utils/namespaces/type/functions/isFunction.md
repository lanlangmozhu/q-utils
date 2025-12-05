[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [type](../README.md) / isFunction

# Function: isFunction()

> **isFunction**(`value`): `value is (args: unknown[]) => unknown`

Defined in: [type/object.ts:56](https://github.com/lanlangmozhu/q-utils/blob/main/src/type/object.ts#L56)

检查值是否为函数

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is (args: unknown[]) => unknown`

是否为函数

## Example

```ts
isFunction(() => {}) // true
isFunction(function() {}) // true
isFunction({}) // false
```
