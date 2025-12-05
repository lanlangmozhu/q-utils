[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [func](../README.md) / curry

# Function: curry()

> **curry**\<`T`\>(`func`, `arity`): (...`args`) => `any`

Defined in: [function/curry.ts:25](https://github.com/lanlangmozhu/q-utils/blob/main/src/function/curry.ts#L25)

函数柯里化，将接受多个参数的函数转换为接受单个参数的函数序列

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

要柯里化的函数

### arity

`number` = `func.length`

可选的参数数量，默认为函数的参数长度

## Returns

柯里化后的函数

> (...`args`): `any`

### Parameters

#### args

...`any`[]

### Returns

`any`

## Example

```ts
// 基本用法
const add = (a: number, b: number, c: number) => a + b + c;
const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // 返回 6
curriedAdd(1, 2)(3); // 也返回 6
curriedAdd(1)(2, 3); // 也返回 6
curriedAdd(1, 2, 3); // 也返回 6

// 指定参数数量
const multiply = (...args: number[]) => args.reduce((a, b) => a * b, 1);
const curriedMultiply = curry(multiply, 3);

curriedMultiply(2)(3)(4); // 返回 24
```
