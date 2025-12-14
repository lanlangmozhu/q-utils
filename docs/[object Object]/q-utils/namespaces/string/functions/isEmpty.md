[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / isEmpty

# Function: isEmpty()

> **isEmpty**(`str`): `boolean`

Defined in: [string/basic.ts:18](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/basic.ts#L18)

判断字符串是否为空

## Parameters

### str

要检查的字符串

`string` | `null` | `undefined`

## Returns

`boolean`

是否为空

## Example

```ts
isEmpty(''); // true
isEmpty(' '); // false
isEmpty(null); // true
isEmpty(undefined); // true
```
