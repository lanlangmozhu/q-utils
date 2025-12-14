[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [promise](../README.md) / wrapAsync

# Function: wrapAsync()

> **wrapAsync**\<`T`\>(`fn`): (...`args`) => `Promise`\<\[`Error` \| `null`, `ReturnType`\<`T`\> \| `null`\]\>

Defined in: [promise/advanced.ts:36](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/promise/advanced.ts#L36)

包装异步函数

## Type Parameters

### T

`T` *extends* (...`args`) => `Promise`\<`any`\>

## Parameters

### fn

`T`

异步函数

## Returns

包装后的函数

> (...`args`): `Promise`\<\[`Error` \| `null`, `ReturnType`\<`T`\> \| `null`\]\>

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`Promise`\<\[`Error` \| `null`, `ReturnType`\<`T`\> \| `null`\]\>

## Example

```ts
const wrappedFn = wrapAsync(async () => {
  const response = await fetch('https://api.example.com');
  return response.json();
});
const [error, result] = await wrappedFn();
```
