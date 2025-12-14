[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [color](../README.md) / rgbToHex

# Function: rgbToHex()

> **rgbToHex**(`r`, `g?`, `b?`, `options?`): `string`

Defined in: [color/rgbToHex.ts:29](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/color/rgbToHex.ts#L29)

将RGB颜色值转换为十六进制颜色代码

## Parameters

### r

红色通道值（0-255）或包含RGB值的对象或数组

`number` | `number`[] | \{ `r`: `number`; `g`: `number`; `b`: `number`; \}

### g?

`number`

绿色通道值（0-255），如果第一个参数是对象或数组则忽略

### b?

`number`

蓝色通道值（0-255），如果第一个参数是对象或数组则忽略

### options?

配置选项

#### prefix?

`boolean`

是否包含#前缀，默认为true

#### alpha?

`number`

alpha通道值（0-1），用于生成RGBA颜色

## Returns

`string`

十六进制颜色代码

## Example

```ts
// 基本用法
rgbToHex(255, 0, 0); // 返回: "#ff0000"

// 不带#前缀
rgbToHex(255, 0, 0, { prefix: false }); // 返回: "ff0000"

// 使用对象
rgbToHex({ r: 255, g: 0, b: 0 }); // 返回: "#ff0000"

// 使用数组
rgbToHex([255, 0, 0]); // 返回: "#ff0000"

// 包含alpha通道
rgbToHex(255, 0, 0, { alpha: 0.5 }); // 返回: "#ff0000" (alpha值在十六进制表示中被忽略)
```
