[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / ping

# Function: ping()

> **ping**(`url`, `options`): `Promise`\<`number`\>

Defined in: [network/ping.ts:28](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/ping.ts#L28)

检测URL的可用性和响应时间

## Parameters

### url

`string`

要检测的URL

### options

配置选项

#### timeout?

`number`

超时时间（毫秒），默认为5000ms

#### method?

`"HEAD"` \| `"GET"`

使用的HTTP方法，默认为'HEAD'

## Returns

`Promise`\<`number`\>

返回Promise，resolve为响应时间（毫秒），失败则reject

## Example

```ts
// 基本用法
ping('https://example.com')
  .then(time => console.log(`响应时间: ${time}ms`))
  .catch(error => console.error('Ping失败:', error));

// 设置更短的超时
ping('https://example.com', { timeout: 2000 })
  .then(time => console.log(`响应时间: ${time}ms`))
  .catch(error => console.error('Ping失败:', error));

// 使用GET方法代替HEAD
ping('https://example.com', { method: 'GET' })
  .then(time => console.log(`响应时间: ${time}ms`))
  .catch(error => console.error('Ping失败:', error));
```
