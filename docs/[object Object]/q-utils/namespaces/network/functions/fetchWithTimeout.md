[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / fetchWithTimeout

# Function: fetchWithTimeout()

> **fetchWithTimeout**(`url`, `options`, `timeout`): `Promise`\<`Response`\>

Defined in: [network/fetchWithTimeout.ts:34](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/fetchWithTimeout.ts#L34)

带超时功能的fetch函数

## Parameters

### url

`string`

请求的URL

### options

`RequestInit` = `{}`

fetch选项

### timeout

`number` = `10000`

超时时间（毫秒），默认为10000ms

## Returns

`Promise`\<`Response`\>

返回Promise，resolve为Response对象，超时则reject

## Example

```ts
// 基本用法
fetchWithTimeout('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// 自定义超时时间
fetchWithTimeout('https://api.example.com/data', {}, 5000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// 发送POST请求
fetchWithTimeout('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', age: 30 })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
