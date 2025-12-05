[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [func](../README.md) / cancelDebounce

# Function: cancelDebounce()

> **cancelDebounce**(`debouncedFn`): `void`

Defined in: [function/debounce.ts:74](https://github.com/lanlangmozhu/q-utils/blob/main/src/function/debounce.ts#L74)

取消防抖函数的执行

## Parameters

### debouncedFn

`Function`

通过debounce创建的防抖函数

## Returns

`void`

## Example

```ts
const debouncedFn = debounce(() => console.log('Debounced'), 300);

// 取消定时器，阻止函数执行
cancelDebounce(debouncedFn);
```
