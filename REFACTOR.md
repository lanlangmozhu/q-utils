# Q-Utils 重构说明

## 重构概述

在这次重构中，我们对 Q-Utils 工具函数库的结构进行了优化，主要目的是提高代码的组织性和可维护性。我们将原来集中在 `utils` 目录下的功能按照其功能类别分散到各个专门的目录中，使得每个目录专注于一个特定的功能领域。

## 重构详情

### 代码组织变更

1. **剪贴板相关操作**：从 `utils` 移动到 `dom` 目录
   - `copyToClipboard.ts` 移动到 `src/dom/copyToClipboard.ts`

2. **浏览器和设备检测**：创建专门的 `browser` 目录
   - `browser.ts` 移动到 `src/browser/browser.ts`
   - `device.ts` 移动到 `src/browser/device.ts`

3. **存储管理功能**：创建专门的 `storage` 目录
   - `localStorage.ts` 移动到 `src/storage/localStorage.ts`
   - `sessionStorage.ts` 移动到 `src/storage/sessionStorage.ts`
   - `cookie.ts` 移动到 `src/storage/cookie.ts`

4. **UUID生成功能**：移动到字符串操作目录
   - `uuid.ts` 移动到 `src/string/uuid.ts`

5. **URL操作功能**：移动到网络操作目录
   - `url.ts` 移动到 `src/network/url.ts`

6. **类型检测功能**：保留在 `utils` 目录中
   - `type.ts` 保留在 `src/utils/type.ts`

### 命名冲突解决

由于各个模块间存在同名函数，为了避免命名冲突，我们采取了命名空间策略：

1. 在主入口文件 `index.ts` 中，我们使用命名空间方式导出所有模块：
   ```typescript
   // 导入并创建命名空间
   import * as functionUtils from './function';
   import * as domUtils from './dom';
   
   export const func = functionUtils;
   export const dom = domUtils;
   ```

2. 用户可以通过命名空间明确访问不同模块中的同名函数：
   ```typescript
   import { func, dom } from 'q-utils';
   
   // 使用函数模块中的 once
   const initOnce = func.once(() => console.log('只执行一次'));
   
   // 使用DOM模块中的 once
   dom.once(button, 'click', handleClick);
   ```

3. 我们**不再**直接导出所有函数（这会导致命名冲突），只使用命名空间方式导出，这样既避免了冲突，又使API更加清晰：
   ```typescript
   // 原来的做法（放弃了）
   // export * from './function';
   // export * from './dom';
   
   // 现在只使用命名空间导出
   export const func = functionUtils;
   export const dom = domUtils;
   ```

## 导入方式变更

用户现在可以使用以下方式导入功能：

```typescript
// 导入整个库
import * as qUtils from 'q-utils';
qUtils.string.capitalize('hello'); // 'Hello'

// 使用命名空间方式访问（推荐）
import { func, dom, string } from 'q-utils';
const initOnce = func.once(() => console.log('只执行一次'));
dom.once(button, 'click', handleClick);
string.trim(' hello ');

// 按功能类别直接导入（需从特定模块路径导入）
import { trim, capitalize } from 'q-utils/string';
import { request, fetchWithTimeout } from 'q-utils/network';
import { isMobile, isTablet } from 'q-utils/browser';
```

## 好处

1. **更好的代码组织**：每个目录专注于单一功能领域，使代码更易于浏览和理解
2. **更清晰的职责划分**：明确每个模块的功能边界
3. **更方便的按需导入**：用户可以只导入所需的功能模块，减少不必要的代码引入
4. **避免命名冲突**：通过命名空间方式提供明确的访问路径，避免函数名冲突
5. **更好的可维护性**：功能分散化后，修改某一功能不会影响到其他不相关的功能
6. **简洁的 API**：相比之前的方案，API 更加简洁直观

## 后续工作

1. 为每个新的目录更新和补充单元测试
2. 优化文档，更新API参考
3. 考虑将未来功能按照相同的模式组织和分类 