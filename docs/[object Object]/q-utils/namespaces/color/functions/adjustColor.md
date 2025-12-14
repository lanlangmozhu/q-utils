[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [color](../README.md) / adjustColor

# Function: adjustColor()

> **adjustColor**(`color`, `adjustments`): `string` \| \{ `r`: `number`; `g`: `number`; `b`: `number`; `a?`: `number`; \}

Defined in: [color/adjustColor.ts:31](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/color/adjustColor.ts#L31)

调整颜色的亮度、饱和度或色调

## Parameters

### color

要调整的颜色，可以是十六进制或RGB格式

`string` | \{ `r`: `number`; `g`: `number`; `b`: `number`; `a?`: `number`; \}

### adjustments

调整选项

#### lightness?

`number`

亮度调整值，范围为-1到1，0表示不变

#### saturation?

`number`

饱和度调整值，范围为-1到1，0表示不变

#### hue?

`number`

色调调整值，范围为-360到360，0表示不变

#### alpha?

`number`

alpha通道值，范围为0到1

## Returns

`string` \| \{ `r`: `number`; `g`: `number`; `b`: `number`; `a?`: `number`; \}

调整后的颜色（与输入格式相同）

## Example

```ts
// 调整亮度
adjustColor('#ff0000', { lightness: 0.2 }); // 返回: "#ff3333" (变亮)
adjustColor('#ff0000', { lightness: -0.2 }); // 返回: "#cc0000" (变暗)

// 调整饱和度
adjustColor('#ff0000', { saturation: -0.5 }); // 返回: "#bf4040" (降低饱和度)

// 调整色调
adjustColor('#ff0000', { hue: 60 }); // 返回: "#ffff00" (红色 -> 黄色)
adjustColor('#ff0000', { hue: 120 }); // 返回: "#00ff00" (红色 -> 绿色)

// 组合调整
adjustColor('#ff0000', { lightness: 0.1, saturation: -0.2, hue: 30 }); // 返回混合调整后的颜色

// 使用RGB对象
adjustColor({ r: 255, g: 0, b: 0 }, { lightness: 0.2 }); // 返回: { r: 255, g: 51, b: 51 }
```
