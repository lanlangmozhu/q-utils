# Q-Utils 示例文件

本目录包含 Q-Utils 工具库的使用示例。

## 运行示例

由于浏览器的 CORS 安全策略，直接打开 HTML 文件（`file://` 协议）无法加载 ES 模块。有两种方式运行示例：

### 方式一：使用本地服务器（推荐）

```bash
# 启动本地服务器
pnpm serve:examples

# 或使用 Node.js
node examples/server.js
```

然后在浏览器中访问：
- 示例首页：http://localhost:3000/examples/index.html
- 数组示例：http://localhost:3000/examples/array.html

### 方式二：直接打开 HTML 文件

示例文件已使用 UMD 版本，可以直接在浏览器中打开：

```bash
# 直接打开文件
open examples/index.html
open examples/array.html
```

## 示例文件说明

- `index.html` - 综合示例，展示各个模块的主要功能
- `array.html` - 数组工具函数详细示例
- `string.html` - 字符串工具函数详细示例（待创建）
- `number.html` - 数字工具函数详细示例（待创建）
- `object.html` - 对象工具函数详细示例（待创建）
- `date.html` - 日期工具函数详细示例（待创建）
- `function.html` - 函数工具函数详细示例（待创建）
- `dom.html` - DOM 工具函数详细示例（待创建）
- `storage.html` - 存储工具函数详细示例（待创建）
- `network.html` - 网络工具函数详细示例（待创建）
- `browser.html` - 浏览器工具函数详细示例（待创建）
- `file.html` - 文件工具函数详细示例（待创建）
- `color.html` - 颜色工具函数详细示例（待创建）
- `type.html` - 类型检测工具函数详细示例（待创建）
- `empty.html` - 空值检测工具函数详细示例（待创建）
- `regexp.html` - 正则表达式工具函数详细示例（待创建）
- `promise.html` - Promise 工具函数详细示例（待创建）
- `error.html` - 错误处理工具函数详细示例（待创建）
- `symbol.html` - Symbol 工具函数详细示例（待创建）
- `bigint.html` - BigInt 工具函数详细示例（待创建）
- `boolean.html` - 布尔值工具函数详细示例（待创建）

## 注意事项

1. 所有示例文件使用 UMD 版本（`dist/index.umd.js`），可以直接在浏览器中打开
2. 如果需要使用 ES 模块版本，必须通过 HTTP 服务器运行
3. 确保在运行示例前已执行 `pnpm build` 构建项目

