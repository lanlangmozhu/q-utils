[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / request

# Function: request()

> **request**\<`T`\>(`url`, `options`): `Promise`\<`T`\>

Defined in: [network/request.ts:33](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/request.ts#L33)

通用请求函数，支持GET和POST等常见请求方法

## Type Parameters

### T

`T` = `any`

## Parameters

### url

`string`

请求URL

### options

请求配置选项

#### method?

`string`

请求方法，默认为'GET'

#### headers?

`Record`\<`string`, `string`\>

请求头

#### data?

`any`

请求数据，用于POST、PUT等方法

#### timeout?

`number`

超时时间（毫秒）

#### credentials?

`RequestCredentials`

是否携带凭证，默认为'same-origin'

## Returns

`Promise`\<`T`\>

返回Promise，resolve为响应数据，reject为错误信息

## Example

```ts
// 基本GET请求
request('https://api.example.com/users')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST请求发送JSON数据
request('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  data: { name: 'John', age: 30 }
}).then(response => console.log(response));

// 设置超时
request('https://api.example.com/users', { timeout: 5000 })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
