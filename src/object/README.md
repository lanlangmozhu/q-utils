# Object 工具函数

## 目录结构

```typescript
src/object/
├── index.ts         // 导出所有功能
├── deepClone.ts     // 深拷贝
├── deepMerge.ts     // 深合并
├── getValueByPath.ts // 路径获取值
├── isEqual.ts       // 对象比较
├── omit.ts          // 排除属性
├── pick.ts          // 选择属性
└── setValueByPath.ts // 路径设置值
```

## 功能说明

### 深拷贝 (deepClone.ts)
- `deepClone`: 深拷贝对象
- `cloneWith`: 自定义深拷贝
- `cloneDeep`: 深拷贝（支持循环引用）

### 深合并 (deepMerge.ts)
- `deepMerge`: 深合并对象
- `mergeWith`: 自定义合并
- `mergeDeep`: 深合并（支持循环引用）

### 路径获取值 (getValueByPath.ts)
- `getValueByPath`: 通过路径获取值
- `get`: 安全获取值
- `getIn`: 获取嵌套值

### 对象比较 (isEqual.ts)
- `isEqual`: 深度比较对象
- `isEqualWith`: 自定义比较
- `isShallowEqual`: 浅比较

### 属性操作 (omit.ts, pick.ts)
- `omit`: 排除指定属性
- `pick`: 选择指定属性
- `omitBy`: 按条件排除属性
- `pickBy`: 按条件选择属性

### 路径设置值 (setValueByPath.ts)
- `setValueByPath`: 通过路径设置值
- `set`: 安全设置值
- `setIn`: 设置嵌套值

## 使用示例

```typescript
import { deepClone, deepMerge, getValueByPath, isEqual } from '@qh5-utils/object';

// 深拷贝
const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);

// 深合并
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 } };
const merged = deepMerge(obj1, obj2);

// 路径获取值
const data = { user: { profile: { name: 'John' } } };
const name = getValueByPath(data, 'user.profile.name');

// 对象比较
const obj3 = { a: 1, b: { c: 2 } };
const obj4 = { a: 1, b: { c: 2 } };
const equal = isEqual(obj3, obj4);
```

## 注意事项

1. 深拷贝和深合并操作可能会影响性能，建议谨慎使用
2. 路径操作支持点号表示法和数组表示法
3. 对象比较支持自定义比较函数
4. 属性操作支持条件过滤

## 更新记录

- 2024-03-21: 重构目录结构，优化功能分类
- 2024-03-19: 添加路径操作相关方法
- 2024-03-18: 添加属性操作相关方法 