[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [symbol](../README.md) / getSymbolKey

# Function: getSymbolKey()

> **getSymbolKey**(`sym`): `string` \| `undefined`

Defined in: [symbol/index.ts:43](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/symbol/index.ts#L43)

获取 Symbol 的键名

## Parameters

### sym

`symbol`

Symbol 对象

## Returns

`string` \| `undefined`

Symbol 键名

## Example

```ts
getSymbolKey(Symbol.for('test')) // 'test'
```
