[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [promise](../README.md) / wrap

# Function: wrap()

> **wrap**\<`T`\>(`promise`): `Promise`\<\[`Error` \| `null`, `T` \| `null`\]\>

Defined in: [promise/advanced.ts:17](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/promise/advanced.ts#L17)

包装 Promise

## Type Parameters

### T

`T`

## Parameters

### promise

`Promise`\<`T`\>

Promise 对象

## Returns

`Promise`\<\[`Error` \| `null`, `T` \| `null`\]\>

包装后的 Promise

## Example

```ts
wrap(Promise.resolve(1))
  .then(([error, result]) => {
    if (error) console.error(error);
    else console.log(result);
  })
```
