[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [browser](../README.md) / getBrowserInfo

# Function: getBrowserInfo()

> **getBrowserInfo**(): [`BrowserInfo`](../interfaces/BrowserInfo.md)

Defined in: [browser/browser.ts:31](https://github.com/lanlangmozhu/q-utils/blob/main/src/browser/browser.ts#L31)

获取当前浏览器的详细信息

## Returns

[`BrowserInfo`](../interfaces/BrowserInfo.md)

浏览器名称、版本和移动浏览器标志

## Example

```ts
const browser = getBrowserInfo();
console.log(`浏览器: ${browser.name} ${browser.version}`);
if (browser.isMobile) {
  console.log('这是移动浏览器');
}
```
