[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / isNotEmpty

# Function: isNotEmpty()

> **isNotEmpty**(`str`): `boolean`

Defined in: [string/basic.ts:33](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/basic.ts#L33)

判断字符串是否非空

## Parameters

### str

要检查的字符串

`string` | `null` | `undefined`

## Returns

`boolean`

是否非空

## Example

```ts
isNotEmpty(''); // false
isNotEmpty(' '); // true
isNotEmpty('hello'); // true
```
