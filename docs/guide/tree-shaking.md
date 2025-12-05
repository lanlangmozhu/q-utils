# Tree Shaking

Q-Utils 支持 Tree Shaking，你可以按需导入函数，只打包使用到的代码。

## 按需导入

### 从子模块导入

```typescript
// 只导入需要的函数
import { capitalize } from 'q-utils/string';
import { first } from 'q-utils/array';
import { deepClone } from 'q-utils/object';

// 使用
const capitalized = capitalize('hello');
const firstItem = first([1, 2, 3]);
const cloned = deepClone({ a: 1 });
```

### 从主模块导入

```typescript
// 从主模块按需导入
import { string, array } from 'q-utils';

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

