# 安装

## 使用包管理器安装

### npm

```bash
npm install qh5-utils
```

### pnpm

```bash
pnpm add qh5-utils
```

### yarn

```bash
yarn add qh5-utils
```

## 在项目中使用

### TypeScript / JavaScript (ES Module)

```typescript
import { string, array } from 'qh5-utils';
```

### CommonJS

```javascript
const { string, array } = require('qh5-utils');
```

### 浏览器 (UMD)

```html
<script src="https://unpkg.com/qh5-utils/dist/index.umd.js"></script>
<script>
  // 使用全局变量 qh5-Utils
  const result = qh5-Utils.string.capitalize('hello');
</script>
```

### 浏览器 (ES Module)

```html
<script type="module">
  import { string } from 'https://unpkg.com/qh5-utils/dist/index.esm.js';
  const result = string.capitalize('hello');
</script>
```

## 类型定义

qh5-utils 内置了完整的 TypeScript 类型定义，无需额外安装 `@types/qh5-utils`。

## 版本要求

- Node.js >= 12.0.0
- 现代浏览器（支持 ES2022）

