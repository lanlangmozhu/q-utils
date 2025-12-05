[**q-utils v1.0.0**](../README.md)

***

[q-utils](../README.md) / default

# Variable: default

> `const` **default**: `object`

Defined in: [index.ts:57](https://github.com/lanlangmozhu/q-utils/blob/main/src/index.ts#L57)

## Type Declaration

### array

> **array**: [`array`](../q-utils/namespaces/array/README.md)

### browser

> **browser**: [`browser`](../q-utils/namespaces/browser/README.md)

### color

> **color**: [`color`](../q-utils/namespaces/color/README.md)

### date

> **date**: [`date`](../q-utils/namespaces/date/README.md)

### dom

> **dom**: [`dom`](../q-utils/namespaces/dom/README.md)

### file

> **file**: [`file`](../q-utils/namespaces/file/README.md)

### func

> **func**: [`func`](../q-utils/namespaces/func/README.md)

### network

> **network**: [`network`](../q-utils/namespaces/network/README.md)

### number

> **number**: [`number`](../q-utils/namespaces/number/README.md)

### object

> **object**: [`object`](../q-utils/namespaces/object/README.md)

### storage

> **storage**: [`storage`](../q-utils/namespaces/storage/README.md)

### string

> **string**: [`string`](../q-utils/namespaces/string/README.md)

### type

> **type**: [`type`](../q-utils/namespaces/type/README.md)

### empty

> **empty**: [`empty`](../q-utils/namespaces/empty/README.md)

### boolean

> **boolean**: [`boolean`](../q-utils/namespaces/boolean/README.md)

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

> **promise**: [`promise`](../q-utils/namespaces/promise/README.md)

### regexp

> **regexp**: [`regexp`](../q-utils/namespaces/regexp/README.md)

### error

> **error**: [`error`](../q-utils/namespaces/error/README.md)

### symbol

> **symbol**: [`symbol`](../q-utils/namespaces/symbol/README.md)

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

> **bigint**: [`bigint`](../q-utils/namespaces/bigint/README.md)
