[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [boolean](../README.md) / toBoolean

# Function: toBoolean()

> **toBoolean**(`value`): `boolean`

Defined in: [boolean/index.ts:18](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/boolean/index.ts#L18)

将值转换为布尔值

## Parameters

### value

`unknown`

要转换的值

## Returns

`boolean`

布尔值

## Example

```ts
toBoolean('true') // true
toBoolean('false') // false
toBoolean(1) // true
toBoolean(0) // false
toBoolean(null) // false
toBoolean(undefined) // false
```
