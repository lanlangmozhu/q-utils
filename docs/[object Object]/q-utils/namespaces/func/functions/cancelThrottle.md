[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [func](../README.md) / cancelThrottle

# Function: cancelThrottle()

> **cancelThrottle**(`throttledFn`): `void`

Defined in: [function/throttle.ts:88](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/function/throttle.ts#L88)

取消节流函数的执行

## Parameters

### throttledFn

`Function`

通过throttle创建的节流函数

## Returns

`void`

## Example

```ts
const throttledFn = throttle(() => console.log('Throttled'), 300);

// 取消定时器，阻止尾部函数执行
cancelThrottle(throttledFn);
```
