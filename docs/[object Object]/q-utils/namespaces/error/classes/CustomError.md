[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [error](../README.md) / CustomError

# Class: CustomError

Defined in: [error/create.ts:15](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/create.ts#L15)

创建自定义错误类

## Param

错误名称

## Param

错误信息

## Param

错误代码

## Example

```ts
createError('ValidationError', 'Invalid input', 'E001')
```

## Extends

- `Error`

## Constructors

### Constructor

> **new CustomError**(`name`, `message`, `code?`): `CustomError`

Defined in: [error/create.ts:16](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/create.ts#L16)

#### Parameters

##### name

`string`

##### message

`string`

##### code?

`string`

#### Returns

`CustomError`

#### Overrides

`Error.constructor`

## Properties

### code?

> `optional` **code**: `string`

Defined in: [error/create.ts:19](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/error/create.ts#L19)
