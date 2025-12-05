[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [empty](../README.md) / isEmptyAsyncIterator

# Function: isEmptyAsyncIterator()

> **isEmptyAsyncIterator**(`value`): `Promise`\<`boolean`\>

Defined in: [empty/collections.ts:78](https://github.com/lanlangmozhu/q-utils/blob/main/src/empty/collections.ts#L78)

检查值是否为空异步迭代器

## Parameters

### value

`unknown`

要检查的值

## Returns

`Promise`\<`boolean`\>

是否为空异步迭代器

## Example

```ts
isEmptyAsyncIterator({
  async *[Symbol.asyncIterator]() {}
}[Symbol.asyncIterator]()) // true
isEmptyAsyncIterator({
  async *[Symbol.asyncIterator]() { yield 1; }
}[Symbol.asyncIterator]()) // false
```
