# 安装

## 使用包管理器安装

### npm

```bash
npm install q-utils
```

### pnpm

```bash
pnpm add q-utils
```

### yarn

```bash
yarn add q-utils
```

## 在项目中使用

### TypeScript / JavaScript (ES Module)

```typescript
import { string, array } from 'q-utils';
```

### CommonJS

```javascript
const { string, array } = require('q-utils');
```

### 浏览器 (UMD)

```html
<script src="https://unpkg.com/q-utils/dist/index.umd.js"></script>
<script>
  // 使用全局变量 QUtils
  const result = QUtils.string.capitalize('hello');
</script>
```

### 浏览器 (ES Module)

```html
<script type="module">
  import { string } from 'https://unpkg.com/q-utils/dist/index.esm.js';
  const result = string.capitalize('hello');
</script>
```

## 类型定义

Q-Utils 内置了完整的 TypeScript 类型定义，无需额外安装 `@types/q-utils`。

## 版本要求

- Node.js >= 12.0.0
- 现代浏览器（支持 ES2022）

