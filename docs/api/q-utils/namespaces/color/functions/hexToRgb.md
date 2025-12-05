[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [color](../README.md) / hexToRgb

# Function: hexToRgb()

> **hexToRgb**(`hex`, `options`): `string` \| `number`[] \| \{ `r`: `number`; `g`: `number`; `b`: `number`; `a?`: `number`; \} \| `null`

Defined in: [color/hexToRgb.ts:30](https://github.com/lanlangmozhu/q-utils/blob/main/src/color/hexToRgb.ts#L30)

将十六进制颜色代码转换为RGB颜色值

## Parameters

### hex

`string`

十六进制颜色代码，支持3位(#RGB)和6位(#RRGGBB)格式，可选带#前缀

### options

配置选项

#### alpha?

`number`

是否返回包含alpha通道的RGBA值，默认为false

#### format?

`"string"` \| `"object"` \| `"array"`

返回格式，可以是'object'、'array'或'string'，默认为'object'

## Returns

`string` \| `number`[] \| \{ `r`: `number`; `g`: `number`; `b`: `number`; `a?`: `number`; \} \| `null`

转换后的RGB颜色值，格式由options.format决定

## Example

```ts
// 基本用法
hexToRgb('#ff0000'); // 返回: { r: 255, g: 0, b: 0 }

// 缩写形式
hexToRgb('#f00'); // 返回: { r: 255, g: 0, b: 0 }

// 不带#前缀
hexToRgb('ff0000'); // 返回: { r: 255, g: 0, b: 0 }

// 返回数组格式
hexToRgb('#ff0000', { format: 'array' }); // 返回: [255, 0, 0]

// 返回字符串格式
hexToRgb('#ff0000', { format: 'string' }); // 返回: "rgb(255, 0, 0)"

// 包含alpha值
hexToRgb('#ff0000', { alpha: 0.5, format: 'string' }); // 返回: "rgba(255, 0, 0, 0.5)"
```
