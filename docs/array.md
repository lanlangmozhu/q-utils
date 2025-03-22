# Array 工具函数

## 目录结构

```typescript
src/array/
├── index.ts      // 导出所有功能
├── basic.ts      // 基础操作（查找、过滤、映射等）
├── compare.ts    // 数组比较
├── group.ts      // 数组分组
├── operation.ts  // 数组操作（合并、分割等）
├── random.ts     // 随机操作
├── sort.ts       // 排序相关
├── stats.ts      // 统计相关
├── tree.ts       // 树形结构操作
├── transform.ts  // 数组转换
├── unique.ts     // 去重相关
└── validate.ts   // 验证相关
```

## 功能说明

### 基础操作 (basic.ts)
- `find`: 查找数组中的元素
- `filter`: 过滤数组元素
- `map`: 映射数组元素
- `reduce`: 归并数组元素
- `forEach`: 遍历数组元素

### 数组比较 (compare.ts)
- `isEqual`: 判断两个数组是否相等
- `includes`: 判断数组是否包含指定元素
- `intersection`: 获取数组交集
- `union`: 获取数组并集
- `difference`: 获取数组差集

### 数组分组 (group.ts)
- `groupBy`: 按指定条件分组
- `chunk`: 将数组分割成指定大小的块
- `partition`: 将数组分割成两部分

### 数组操作 (operation.ts)
- `concat`: 合并数组
- `slice`: 截取数组
- `splice`: 修改数组
- `flatten`: 扁平化数组
- `compact`: 移除空值

### 随机操作 (random.ts)
- `shuffle`: 随机打乱数组
- `sample`: 随机获取数组元素
- `sampleSize`: 随机获取指定数量的数组元素

### 排序相关 (sort.ts)
- `sort`: 数组排序
- `sortBy`: 按指定条件排序
- `reverse`: 数组反转

### 统计相关 (stats.ts)
- `sum`: 数组求和
- `average`: 数组平均值
- `max`: 数组最大值
- `min`: 数组最小值
- `count`: 数组元素计数

### 树形结构操作 (tree.ts)
- `treeify`: 数组转树形结构
- `flattenTree`: 树形结构转数组
- `findInTree`: 在树中查找节点
- `mapTree`: 映射树节点

### 数组转换 (transform.ts)
- `toObject`: 数组转对象
- `toMap`: 数组转Map
- `toSet`: 数组转Set
- `toString`: 数组转字符串

### 去重相关 (unique.ts)
- `unique`: 数组去重
- `uniqueBy`: 按指定条件去重
- `uniqueWith`: 使用自定义比较函数去重

### 验证相关 (validate.ts)
- `isEmpty`: 判断数组是否为空
- `isArray`: 判断是否为数组
- `hasDuplicates`: 判断是否有重复元素
- `isSorted`: 判断是否已排序

## 使用示例

```typescript
import { find, groupBy, unique, treeify } from '@q-utils/array';

// 查找元素
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];
const user = find(users, user => user.id === 1);

// 数组分组
const numbers = [1, 2, 3, 4, 5, 6];
const groups = groupBy(numbers, num => num % 2 === 0 ? 'even' : 'odd');

// 数组去重
const duplicates = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = unique(duplicates);

// 数组转树
const flatData = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 }
];
const tree = treeify(flatData);
```

## 注意事项

1. 所有方法都是纯函数，不会修改原数组
2. 部分方法支持链式调用
3. 树形结构操作需要数据包含 id 和 parentId 字段
4. 性能考虑：大数据量时建议使用迭代器方法

## 更新记录

- 2024-03-21: 重构目录结构，优化功能分类
- 2024-03-20: 添加树形结构操作相关方法
- 2024-03-19: 添加统计和验证相关方法