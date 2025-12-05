[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [string](../README.md) / isPhone

# Function: isPhone()

> **isPhone**(`str`): `boolean`

Defined in: [string/validate.ts:103](https://github.com/lanlangmozhu/q-utils/blob/main/src/string/validate.ts#L103)

是否为手机号

## Parameters

### str

要验证的字符串

`string` | `null` | `undefined`

## Returns

`boolean`

是否为手机号

## Example

```ts
isPhone('13812345678'); // true
isPhone('138-1234-5678'); // true
isPhone('invalid-phone'); // false
```
