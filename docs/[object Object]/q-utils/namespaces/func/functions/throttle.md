[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [func](../README.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`func`, `wait`, `options`): (`this`, ...`args`) => `ReturnType`\<`T`\> \| `undefined`

Defined in: [function/throttle.ts:26](https://github.com/lanlangmozhu/q-utils/blob/main/src/function/throttle.ts#L26)

创建一个节流函数，限制函数在指定的时间内只能被调用一次
常用于处理频繁触发的事件，如滚动事件、鼠标移动等

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

要节流的函数

### wait

`number` = `300`

等待时间（毫秒）

### options

配置选项

#### leading?

`boolean`

是否在开始时立即执行一次，默认为true

#### trailing?

`boolean`

是否在结束时再执行一次，默认为true

## Returns

节流处理后的函数

> (`this`, ...`args`): `ReturnType`\<`T`\> \| `undefined`

### Parameters

#### this

`ThisParameterType`\<`T`\>

#### args

...`Parameters`\<`T`\>

### Returns

`ReturnType`\<`T`\> \| `undefined`

## Example

```ts
// 基本用法，每200ms最多执行一次
const throttledScroll = throttle(() => {
  console.log('处理滚动事件');
}, 200);

// 在滚动事件中使用
window.addEventListener('scroll', throttledScroll);

// 自定义选项：开始时不执行，结束时执行一次
const customThrottle = throttle(() => {
  console.log('自定义节流');
}, 300, { leading: false, trailing: true });
```
