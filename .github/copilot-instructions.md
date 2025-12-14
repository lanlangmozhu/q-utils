# qh5-utils 项目 AI 编码指南

本文档为 AI 编码代理提供项目特定的上下文和约定，帮助快速理解代码库结构和开发模式。

## 项目架构

### 模块化设计
- **模块组织**：按功能分类组织代码，每个模块位于 `src/[module]/` 目录下
- **模块结构**：每个模块包含：
  - `index.ts` - 模块入口，通过 `export *` 导出子模块
  - 功能文件（如 `basic.ts`, `transform.ts`, `validate.ts`）- 按功能分类的实现文件
  - `__tests__/` - 测试文件目录
  - `README.md` - 模块文档
- **导出方式**：主入口 `src/index.ts` 使用命名空间方式导出，避免命名冲突
  ```typescript
  // 命名空间导入（推荐）
  import { string, array, func } from 'qh5-utils';
  string.capitalize('hello');
  
  // 按需导入
  import { capitalize } from 'qh5-utils/string';
  ```

### 关键文件
- `src/index.ts` - 主入口，导出所有命名空间
- `rollup.config.mjs` - 构建配置，生成 CJS/ESM/UMD 三种格式
- `tsconfig.json` - TypeScript 配置，严格模式，目标 ES2022
- `jest.config.js` - 测试配置，使用 ts-jest 和 jsdom 环境

## 开发流程

### 构建和测试
- **包管理器**：使用 `pnpm`（不是 npm 或 yarn）
- **构建命令**：`pnpm build` - 使用 Rollup 打包，生成到 `dist/` 目录
- **测试命令**：`pnpm test` - 运行 Jest 测试，测试文件位于 `src/**/__tests__/*.test.ts`
- **开发模式**：`pnpm dev` - 监听模式构建
- **代码检查**：`pnpm lint` - ESLint 检查

### 测试约定
- 测试文件命名：`*.test.ts`（不是 `.spec.ts`）
- 测试位置：与源代码同目录下的 `__tests__/` 文件夹
- 测试环境：使用 `jsdom` 环境（支持 DOM API）

## 代码约定

### 函数注释规范
每个函数必须包含完整的 JSDoc 注释（使用中文）：
```typescript
/**
 * 功能描述
 * @param param - 参数说明
 * @returns 返回值说明
 * @example
 * ```typescript
 * functionName('example')
 * // 返回结果
 * ```
 */
```

### 文件组织模式
模块内按功能分类组织文件，遵循以下原则：
- **文件大小标准**：理想范围 100-300 行，每个文件 5-15 个函数
- **功能相关性**：相关功能应放在同一文件
- **命名规范**：
  - `basic.ts` - 基础操作（包含基础功能、统计、去重等简单功能）
  - `transform.ts` - 转换操作
  - `validate.ts` - 验证操作
  - `format.ts` - 格式化操作
  - `search.ts` - 搜索替换操作
  - `compare.ts` - 比较操作（包含验证相关功能）
  - `range.ts` - 范围处理（包含动画计算等）
- **避免过度拆分**：小于 100 行且少于 5 个函数的文件应合并到相关文件
- **避免过度集中**：大于 400 行或超过 25 个函数的文件应拆分为多个文件

### 命名冲突处理
当不同模块存在同名函数时（如 `once` 在 `function` 和 `dom` 模块中），使用命名空间方式区分：
```typescript
import { func, dom } from 'qh5-utils';
func.once(() => {});  // 函数模块的 once
dom.once(element, 'click', handler);  // DOM 模块的 once
```

### 类型安全
- 使用 TypeScript 严格模式
- 所有函数必须有完整的类型定义
- 支持泛型，提供类型推导
- 处理 `null` 和 `undefined` 的情况

### 无外部依赖
- **重要**：项目不引用任何第三方库，保持独立性
- 仅使用 TypeScript 标准库和浏览器原生 API
- 所有功能都自行实现

## 特殊模式

### 模块导出模式
模块的 `index.ts` 通过 `export *` 导出子模块：
```typescript
// src/array/index.ts
// 基础数组操作（包含：基础操作、去重、统计）
export * from './basic';
// 数组比较和验证
export * from './compare';
// 数组转换
export * from './transform';
```

**注意**：已合并的文件不再单独导出，例如：
- `array/stats.ts` 和 `array/unique.ts` 已合并到 `array/basic.ts`
- `string/stats.ts` 和 `string/split.ts` 已合并到 `string/basic.ts`
- `number/radix.ts` 和 `number/performance.ts` 已合并到 `number/basic.ts`
- `number/animation.ts` 已合并到 `number/range.ts`

### 主入口导出模式
主入口使用命名空间导出：
```typescript
// src/index.ts
import * as array from './array';
import * as string from './string';
export { array, string, ... };
export default { array, string, ... };
```

### 空值处理
函数应优雅处理 `null` 和 `undefined`，通常返回安全的默认值：
```typescript
export function isEmpty(str: string | null | undefined): boolean {
  return str === null || str === undefined || str.trim().length === 0;
}
```

## 文档维护

### 文档更新要求
修改代码时需同步更新：
1. 函数 JSDoc 注释
2. 模块 `README.md`
3. `docs/USAGE.md` 和 `docs/SUMMARY.md`
4. 主 `README.md`（如涉及新功能）

### 文档位置
- 模块文档：`src/[module]/README.md`
- 项目文档：`docs/` 目录
- 使用示例：`examples/index.html`

## 构建输出

### 输出格式
Rollup 生成三种格式：
- `dist/index.js` - CommonJS
- `dist/index.esm.js` - ES Module
- `dist/index.umd.js` - UMD（浏览器全局变量 `qh5-Utils`）
- `dist/index.d.ts` - TypeScript 类型定义
- `dist/types/` - 详细的类型定义文件

### 类型定义
- 使用 `rollup-plugin-dts` 生成类型定义
- 类型文件包含 source map（`.d.ts.map`）

## 常见任务

### 添加新函数
1. 在对应模块的功能文件中实现函数
2. 添加完整的 JSDoc 注释（中文）
3. 在模块的 `index.ts` 中导出（如果不在已导出的文件中）
4. 编写测试文件 `__tests__/*.test.ts`
5. 更新模块 `README.md`
6. 运行 `pnpm test` 确保测试通过

### 添加新模块
1. 创建 `src/[module]/` 目录
2. 创建功能实现文件
3. 创建 `index.ts` 导出所有函数
4. 创建 `__tests__/` 目录和测试文件
5. 创建 `README.md` 文档
6. 在 `src/index.ts` 中添加命名空间导出

### 修复测试
1. 运行 `pnpm test` 查看失败测试
2. 检查测试文件位置和命名是否正确
3. 确保测试环境配置正确（jsdom 用于 DOM 相关测试）
4. 检查函数实现是否符合测试预期

## 文档管理规范

### 文档文件管理
- **不要随意创建新的 MD 文件**
- 已完成的工作文档应合并到 `PROJECT_UPDATES.md`
- 待完成的任务应添加到 `TODO.md`
- 规则和要求应添加到 `.cursorrules` 和 `.github/copilot-instructions.md`

### 保留的核心文档
- `README.md` - 项目说明
- `CHANGELOG.md` - 功能更新记录
- `CONTRIBUTING.md` - 贡献指南
- `PUBLISHING.md` - 发布指南
- `TODO.md` - 待办任务清单
- `PROJECT_UPDATES.md` - 项目更新记录（包含所有已完成的工作）

### 文档更新要求
当更新源代码时，必须同步更新以下文档：
1. 对应功能测试用例（`src/[module]/__tests__/`）
2. 对应功能的文档（`src/[module]/README.md`）
3. 使用示例（`examples/index.html`）
4. 功能导出说明
5. README.md
6. 使用指南（`docs/USAGE.md`）
7. 项目总结（`docs/SUMMARY.md`）

## 代码风格规范

### 代码导出规范
- **允许混用** `export function` 和 `export const`（箭头函数）
- `export function` 适用于需要函数提升、调试友好性或常规逻辑的场景
- `export const`（箭头函数）适用于需要词法 this 绑定、防止重新赋值或模块化导出的场景
- 生成器函数使用 `export function*`
- 异步函数使用 `export async function`
- 类定义使用 `export class`

### 文件命名规范
- **功能分类命名**：当函数数量 > 5 时使用（如 `basic.ts`, `transform.ts`, `validate.ts`）
- **具体功能命名**：当函数数量 ≤ 5 时使用（如 `hexToRgb.ts`, `rgbToHex.ts`, `adjustColor.ts`）
- **描述性命名**：用于特定领域（如 `browser.ts`, `device.ts`）

### 文件大小标准
- **理想范围**：100-300 行
- **函数数量**：每个文件 5-15 个函数
- **避免过度拆分**：小于 100 行且少于 5 个函数的文件应合并到相关文件
- **避免过度集中**：大于 400 行或超过 25 个函数的文件应拆分为多个文件

## 注意事项

- **包管理器**：始终使用 `pnpm`，不要使用 `npm` 或 `yarn`
- **无依赖**：不要添加任何 `npm` 包依赖，所有功能自行实现
- **类型安全**：所有代码必须有完整的 TypeScript 类型
- **中文注释**：所有注释和文档使用中文
- **测试覆盖**：新功能必须包含对应的单元测试
- **命名空间**：使用命名空间导出避免命名冲突，不要直接导出同名函数
- **文档管理**：不要随意创建新的 MD 文件，遵循文档管理规范

