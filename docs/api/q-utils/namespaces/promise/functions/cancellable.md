[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [promise](../README.md) / cancellable

# Function: cancellable()

> **cancellable**\<`T`\>(): \[`Promise`\<`T`\>, (`reason?`) => `void`\]

Defined in: [promise/advanced.ts:50](https://github.com/lanlangmozhu/q-utils/blob/main/src/promise/advanced.ts#L50)

创建可取消的 Promise

## Type Parameters

### T

`T`

## Returns

\[`Promise`\<`T`\>, (`reason?`) => `void`\]

可取消的 Promise 和取消函数

## Example

```ts
const [promise, cancel] = cancellable();
promise.then(() => console.log('完成'));
cancel();
```
