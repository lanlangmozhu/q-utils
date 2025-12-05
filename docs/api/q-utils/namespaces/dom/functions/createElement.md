[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [dom](../README.md) / createElement

# Function: createElement()

> **createElement**\<`K`\>(`tag`, `attributes?`, `children?`): `HTMLElementTagNameMap`\[`K`\]

Defined in: [dom/element.ts:8](https://github.com/lanlangmozhu/q-utils/blob/main/src/dom/element.ts#L8)

创建元素

## Type Parameters

### K

`K` *extends* keyof `HTMLElementTagNameMap`

## Parameters

### tag

`K`

标签名

### attributes?

`Record`\<`string`, `string`\>

属性对象

### children?

(`string` \| `HTMLElement`)[]

子元素数组

## Returns

`HTMLElementTagNameMap`\[`K`\]

创建的元素
