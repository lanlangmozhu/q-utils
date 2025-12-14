# Tree Shaking

qh5-utils 支持 Tree Shaking，你可以按需导入函数，只打包使用到的代码。

## 按需导入

qh5-utils 支持按需导入，可以只导入需要的函数，支持 Tree Shaking，减小打包体积。

## 基本用法

```typescript
// 从特定模块导入函数
import { capitalize } from 'qh5-utils/string';
import { unique } from 'qh5-utils/array';
import { deepClone } from 'qh5-utils/object';

// 使用
const capitalized = capitalize('hello world');
const uniqueArray = unique([1, 2, 2, 3]);
const cloned = deepClone({ a: 1 });
```

## 支持的模块路径

qh5-utils 支持以下模块路径：

- `qh5-utils/string` - 字符串相关函数
- `qh5-utils/array` - 数组相关函数
- `qh5-utils/object` - 对象相关函数
- `qh5-utils/number` - 数字相关函数
- `qh5-utils/date` - 日期相关函数
- `qh5-utils/function` - 函数相关工具

## Tree Shaking

按需导入支持 Tree Shaking，未使用的函数会被自动移除，减小打包体积。

### 示例

```typescript
// 只导入需要的函数
import { capitalize, trim } from 'qh5-utils/string';
import { unique, flatten } from 'qh5-utils/array';

// 使用
const result1 = capitalize('hello');
const result2 = unique([1, 2, 2, 3]);

// 未使用的 trim 和 flatten 函数不会被打包
```

### 打包体积对比

使用按需导入可以显著减小打包体积：

```typescript
// ❌ 命名空间导入（会导入整个模块）
import { string } from 'qh5-utils';
string.capitalize('hello');

// ✅ 按需导入（只导入需要的函数）
import { capitalize } from 'qh5-utils/string';
capitalize('hello');
```

## 使用场景

### 1. 只需要少量函数

当你只需要使用少量函数时，按需导入更合适：

```typescript
// 只需要一个函数
import { debounce } from 'qh5-utils/function';

const debouncedFn = debounce(() => {
  console.log('执行');
}, 300);
```

### 2. 对打包体积敏感

在需要严格控制打包体积的项目中，按需导入是更好的选择：

```typescript
// 只导入需要的函数
import { formatDate } from 'qh5-utils/date';
import { deepClone } from 'qh5-utils/object';
```

### 3. 与构建工具配合

现代构建工具（如 Vite、Webpack、Rollup）都支持 Tree Shaking：

```typescript
// webpack.config.js / vite.config.js
// Tree Shaking 会自动移除未使用的代码
import { capitalize } from 'qh5-utils/string';
```

## 与命名空间导入对比

### 命名空间导入

```typescript
import { string, array } from 'qh5-utils';

string.capitalize('hello');
array.unique([1, 2, 2, 3]);
```

**优点**:
- 代码组织清晰
- 避免命名冲突
- 良好的代码提示

**缺点**:
- 会导入整个模块（即使只使用一个函数）

### 按需导入

```typescript
import { capitalize } from 'qh5-utils/string';
import { unique } from 'qh5-utils/array';

capitalize('hello');
unique([1, 2, 2, 3]);
```

**优点**:
- 打包体积更小
- 只导入需要的函数
- 支持 Tree Shaking

**缺点**:
- 可能导入多个函数时代码较长

## 最佳实践

1. **少量函数使用按需导入**: 当只需要 1-2 个函数时，使用按需导入
2. **多个函数使用命名空间**: 当需要使用多个函数时，使用命名空间导入更清晰
3. **混合使用**: 可以根据实际情况混合使用两种方式

```typescript
// 混合使用
import { string, array } from 'qh5-utils';  // 使用多个函数
import { debounce } from 'qh5-utils/function';  // 只使用一个函数

string.capitalize('hello');
array.unique([1, 2, 2, 3]);
const debounced = debounce(() => {}, 300);
```

## 注意事项

1. **确保构建工具支持 Tree Shaking**: 确保你的构建工具（Webpack、Vite、Rollup 等）支持 Tree Shaking
2. **使用 ES Module**: 按需导入需要 ES Module 支持
3. **检查打包结果**: 使用打包分析工具检查实际打包体积

### 从子模块导入

```typescript
// 只导入需要的函数
import { capitalize } from 'qh5-utils/string';
import { first } from 'qh5-utils/array';
import { deepClone } from 'qh5-utils/object';

// 使用
const capitalized = capitalize('hello');
const firstItem = first([1, 2, 3]);
const cloned = deepClone({ a: 1 });
```

### 从主模块导入

```typescript
// 从主模块按需导入
import { string, array } from 'qh5-utils';

// 使用
const capitalized = string.capitalize('hello');
const first = array.first([1, 2, 3]);
```

## 构建工具配置

### Vite

Vite 默认支持 Tree Shaking，无需额外配置。

### Webpack

Webpack 4+ 默认支持 Tree Shaking，确保：

1. 使用 ES Module 导入
2. 在 `package.json` 中设置 `"sideEffects": false`

```json
{
  "sideEffects": false
}
```

### Rollup

Rollup 默认支持 Tree Shaking，无需额外配置。

## 验证 Tree Shaking

使用构建工具的分析工具来验证 Tree Shaking 是否生效：

### Vite

```bash
npm run build -- --mode analyze
```

### Webpack

使用 `webpack-bundle-analyzer` 分析打包结果。

## 最佳实践

1. **优先使用按需导入**: 只导入需要的函数，减小打包体积
2. **避免导入整个模块**: 不要使用 `import *` 导入整个模块
3. **使用命名空间导入**: 当需要多个函数时，使用命名空间导入更清晰

