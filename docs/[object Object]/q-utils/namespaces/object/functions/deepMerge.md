[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [object](../README.md) / deepMerge

# Function: deepMerge()

> **deepMerge**\<`T`\>(`target?`, `source?`, ...`rest?`): `T`

Defined in: [object/deepMerge.ts:108](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/object/deepMerge.ts#L108)

深度合并对象

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

## Parameters

### target?

目标对象

`T` | `Record`\<`string`, `any`\>

### source?

源对象

`Record`\<`string`, `any`\> | `Partial`\<`T`\>

### rest?

...(`Record`\<`string`, `any`\> \| `Partial`\<`T`\> \| [`DeepMergeOptions`](../interfaces/DeepMergeOptions.md))[]

其他对象和选项

## Returns

`T`

合并后的对象
