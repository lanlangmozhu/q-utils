[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [string](../README.md) / randomId

# Function: randomId()

> **randomId**(`length`, `options`): `string`

Defined in: [string/uuid.ts:94](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/string/uuid.ts#L94)

生成指定长度的随机字符串ID

## Parameters

### length

`number` = `8`

ID的长度，默认为8

### options

配置选项

#### prefix?

`string`

ID的前缀

#### charset?

`string`

使用的字符集，默认为字母和数字

## Returns

`string`

生成的随机ID

## Example

```ts
// 生成默认长度(8)的随机ID
randomId(); // 例如: 'a1b2c3d4'

// 生成指定长度的随机ID
randomId(16); // 例如: 'a1b2c3d4e5f6g7h8'

// 带前缀的随机ID
randomId(8, { prefix: 'user_' }); // 例如: 'user_a1b2c3d4'

// 使用自定义字符集
randomId(8, { charset: '0123456789' }); // 例如: '12345678'
```
