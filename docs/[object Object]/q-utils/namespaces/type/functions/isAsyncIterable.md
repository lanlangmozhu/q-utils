[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [type](../README.md) / isAsyncIterable

# Function: isAsyncIterable()

> **isAsyncIterable**(`value`): `value is AsyncIterable<unknown, any, any>`

Defined in: [type/advanced.ts:134](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/type/advanced.ts#L134)

检查值是否为异步可迭代对象

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is AsyncIterable<unknown, any, any>`

是否为异步可迭代对象

## Example

```ts
isAsyncIterable({
  async *[Symbol.asyncIterator]() {
    yield 1;
  }
}) // true
isAsyncIterable([]) // false
```
