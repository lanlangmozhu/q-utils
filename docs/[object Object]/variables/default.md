[**qh5-utils v1.0.0**](../README.md)

***

[qh5-utils](../README.md) / default

# Variable: default

> `const` **default**: `object`

Defined in: [index.ts:57](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/index.ts#L57)

## Type Declaration

### array

> **array**: [`array`](../qh5-utils/namespaces/array/README.md)

### browser

> **browser**: [`browser`](../qh5-utils/namespaces/browser/README.md)

### color

> **color**: [`color`](../qh5-utils/namespaces/color/README.md)

### date

> **date**: [`date`](../qh5-utils/namespaces/date/README.md)

### dom

> **dom**: [`dom`](../qh5-utils/namespaces/dom/README.md)

### file

> **file**: [`file`](../qh5-utils/namespaces/file/README.md)

### func

> **func**: [`func`](../qh5-utils/namespaces/func/README.md)

### network

> **network**: [`network`](../qh5-utils/namespaces/network/README.md)

### number

> **number**: [`number`](../qh5-utils/namespaces/number/README.md)

### object

> **object**: [`object`](../qh5-utils/namespaces/object/README.md)

### storage

> **storage**: [`storage`](../qh5-utils/namespaces/storage/README.md)

### string

> **string**: [`string`](../qh5-utils/namespaces/string/README.md)

### type

> **type**: [`type`](../qh5-utils/namespaces/type/README.md)

### empty

> **empty**: [`empty`](../qh5-utils/namespaces/empty/README.md)

### boolean

> **boolean**: [`boolean`](../qh5-utils/namespaces/boolean/README.md)

将值转换为布尔值

#### Param

要转换的值

#### Returns

布尔值

#### Example

```ts
toBoolean('true') // true
toBoolean('false') // false
toBoolean(1) // true
toBoolean(0) // false
toBoolean(null) // false
toBoolean(undefined) // false
```

### promise

> **promise**: [`promise`](../qh5-utils/namespaces/promise/README.md)

### regexp

> **regexp**: [`regexp`](../qh5-utils/namespaces/regexp/README.md)

### error

> **error**: [`error`](../qh5-utils/namespaces/error/README.md)

### symbol

> **symbol**: [`symbol`](../qh5-utils/namespaces/symbol/README.md)

创建唯一的 Symbol

#### Param

Symbol 描述

#### Returns

唯一的 Symbol

#### Example

```ts
createSymbol('test') // Symbol('test')
```

### bigint

> **bigint**: [`bigint`](../qh5-utils/namespaces/bigint/README.md)
