[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [object](../README.md) / DeepMergeOptions

# Interface: DeepMergeOptions

Defined in: [object/deepMerge.ts:4](https://github.com/lanlangmozhu/q-utils/blob/main/src/object/deepMerge.ts#L4)

深度合并对象的选项接口

## Properties

### arrayMode?

> `optional` **arrayMode**: `"replace"` \| `"concat"` \| `"merge"`

Defined in: [object/deepMerge.ts:11](https://github.com/lanlangmozhu/q-utils/blob/main/src/object/deepMerge.ts#L11)

数组合并模式
- 'replace': 替换模式（默认）
- 'concat': 连接模式
- 'merge': 合并模式

***

### clone?

> `optional` **clone**: `boolean`

Defined in: [object/deepMerge.ts:15](https://github.com/lanlangmozhu/q-utils/blob/main/src/object/deepMerge.ts#L15)

是否克隆源对象

***

### customMerge()?

> `optional` **customMerge**: (`key`, `target`, `source`) => `any`

Defined in: [object/deepMerge.ts:19](https://github.com/lanlangmozhu/q-utils/blob/main/src/object/deepMerge.ts#L19)

自定义合并函数

#### Parameters

##### key

`string`

##### target

`any`

##### source

`any`

#### Returns

`any`
