[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [promise](../README.md) / cancellableAsync

# Function: cancellableAsync()

> **cancellableAsync**\<`T`\>(`fn`): () => \[`Promise`\<`T`\>, (`reason?`) => `void`\]

Defined in: [promise/advanced.ts:74](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/promise/advanced.ts#L74)

创建可取消的异步函数

## Type Parameters

### T

`T`

## Parameters

### fn

() => `Promise`\<`T`\>

异步函数

## Returns

可取消的异步函数

> (): \[`Promise`\<`T`\>, (`reason?`) => `void`\]

### Returns

\[`Promise`\<`T`\>, (`reason?`) => `void`\]

## Example

```ts
const cancellableFetch = cancellableAsync(async () => {
  const response = await fetch('https://api.example.com');
  return response.json();
});
const [promise, cancel] = cancellableFetch();
promise.then(result => console.log(result));
cancel();
```
