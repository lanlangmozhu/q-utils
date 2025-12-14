[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / jsonp

# Function: jsonp()

> **jsonp**\<`T`\>(`url`, `options`): `Promise`\<`T`\>

Defined in: [network/jsonp.ts:27](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/jsonp.ts#L27)

发送JSONP请求，用于跨域获取数据

## Type Parameters

### T

`T` = `any`

## Parameters

### url

`string`

请求URL

### options

配置选项

#### callbackParam?

`string`

回调参数名，默认为'callback'

#### callbackName?

`string`

自定义回调函数名，默认为自动生成

#### timeout?

`number`

超时时间（毫秒），默认为10000ms

## Returns

`Promise`\<`T`\>

返回Promise，resolve为响应数据，超时或错误则reject

## Example

```ts
// 基本用法
jsonp('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// 自定义参数
jsonp('https://api.example.com/data', {
  callbackParam: 'jsonpCallback',
  timeout: 5000
})
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
