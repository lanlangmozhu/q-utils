[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [network](../README.md) / getFileNameFromURL

# Function: getFileNameFromURL()

> **getFileNameFromURL**(`url`): `string`

Defined in: [network/url.ts:189](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/network/url.ts#L189)

从 URL 中提取文件名

## Parameters

### url

`string`

要处理的 URL

## Returns

`string`

URL 中的文件名

## Example

```ts
console.log(getFileNameFromURL('https://example.com/documents/report.pdf')); 
// 'report.pdf'

console.log(getFileNameFromURL('https://example.com/images/photo.jpg?size=large')); 
// 'photo.jpg'
```
