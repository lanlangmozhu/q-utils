# Q-Utils 文档

欢迎使用 Q-Utils 文档！这里提供了完整的使用指南和 API 参考。

## 文档导航

### 核心内容
- [项目总结](./SUMMARY.md) - 项目概述、已实现功能和扩展方向
- [使用指南](./USAGE.md) - 详细的使用说明和示例
- [项目结构](#项目结构) - 代码组织和文件结构说明

## 项目结构

Q-Utils 采用模块化设计，每个功能模块都包含完整的实现、测试和文档：

```
src/
├── array/                 # 数组相关工具函数
│   ├── __tests__/        # 数组模块测试文件
│   ├── README.md         # 数组模块详细文档
│   ├── basic.ts          # 基础数组操作
│   ├── compare.ts        # 数组比较操作
│   ├── group.ts          # 数组分组操作
│   ├── operation.ts      # 数组操作工具
│   ├── random.ts         # 数组随机操作
│   ├── sort.ts           # 数组排序操作
│   ├── stats.ts          # 数组统计操作
│   ├── transform.ts      # 数组转换操作
│   ├── tree.ts           # 树形数组操作
│   ├── unique.ts         # 数组去重操作
│   ├── validate.ts       # 数组验证操作
│   └── index.ts          # 数组模块入口
├── string/                # 字符串相关工具函数
│   ├── __tests__/        # 字符串模块测试文件
│   ├── README.md         # 字符串模块详细文档
│   ├── basic.ts          # 基础字符串操作
│   ├── compare.ts        # 字符串比较操作
│   ├── encode.ts         # 字符串编码操作
│   ├── format.ts         # 字符串格式化
│   ├── search.ts         # 字符串搜索替换
│   ├── split.ts          # 字符串分割合并
│   ├── stats.ts          # 字符串统计操作
│   ├── substring.ts      # 字符串截取操作
│   ├── transform.ts      # 字符串转换操作
│   ├── uuid.ts           # UUID生成工具
│   ├── validate.ts       # 字符串验证操作
│   └── index.ts          # 字符串模块入口
├── number/                # 数字相关工具函数
│   ├── __tests__/        # 数字模块测试文件
│   ├── README.md         # 数字模块详细文档
│   ├── analysis.ts       # 数据分析工具
│   ├── animation.ts      # 数字动画工具
│   ├── basic.ts          # 基础数字操作
│   ├── finance.ts        # 金融计算工具
│   ├── format.ts         # 数字格式化
│   ├── math.ts           # 数学计算工具
│   ├── performance.ts    # 性能优化工具
│   ├── radix.ts          # 进制转换工具
│   ├── random.ts         # 随机数生成
│   ├── range.ts          # 数字范围工具
│   ├── special.ts        # 特殊数字处理
│   ├── statistics.ts     # 统计计算工具
│   ├── unit.ts           # 单位转换工具
│   └── index.ts          # 数字模块入口
├── date/                  # 日期相关工具函数
│   ├── __tests__/        # 日期模块测试文件
│   ├── README.md         # 日期模块详细文档
│   ├── basic.ts          # 基础日期操作
│   ├── calculation.ts    # 日期计算工具
│   ├── calendar.ts       # 日历工具
│   ├── format.ts         # 日期格式化
│   ├── lunar.ts          # 农历工具
│   ├── range.ts          # 日期范围工具
│   ├── special.ts        # 特殊日期处理
│   ├── statistics.ts     # 日期统计工具
│   ├── time.ts           # 时间工具
│   ├── timezone.ts       # 时区工具
│   └── index.ts          # 日期模块入口
├── object/                # 对象相关工具函数
│   ├── __tests__/        # 对象模块测试文件
│   ├── README.md         # 对象模块详细文档
│   ├── deepClone.ts      # 深拷贝工具
│   ├── deepMerge.ts      # 深合并工具
│   ├── getValueByPath.ts # 路径获取值
│   ├── isEqual.ts        # 对象相等比较
│   ├── omit.ts           # 对象属性排除
│   ├── pick.ts           # 对象属性选择
│   ├── setValueByPath.ts # 路径设置值
│   └── index.ts          # 对象模块入口
├── dom/                   # DOM操作相关工具函数
│   ├── __tests__/        # DOM模块测试文件
│   ├── README.md         # DOM模块详细文档
│   ├── animation.ts      # DOM动画工具
│   ├── basic.ts          # 基础DOM操作
│   ├── element.ts        # 元素操作工具
│   ├── event.ts          # 事件处理工具
│   ├── form.ts           # 表单操作工具
│   ├── position.ts       # 位置计算工具
│   └── utils.ts          # DOM工具函数
├── function/              # 函数相关工具函数
│   ├── __tests__/        # 函数模块测试文件
│   ├── README.md         # 函数模块详细文档
│   ├── compose.ts        # 函数组合工具
│   ├── curry.ts          # 函数柯里化
│   ├── debounce.ts       # 防抖函数
│   ├── memoize.ts        # 函数记忆化
│   ├── once.ts           # 一次性函数
│   ├── pipe.ts           # 函数管道
│   ├── sleep.ts          # 延迟执行
│   ├── throttle.ts       # 节流函数
│   └── index.ts          # 函数模块入口
├── network/               # 网络操作相关工具函数
│   ├── __tests__/        # 网络模块测试文件
│   ├── README.md         # 网络模块详细文档
│   ├── downloadFile.ts   # 文件下载工具
│   ├── fetchWithTimeout.ts # 超时请求工具
│   ├── jsonp.ts          # JSONP请求工具
│   ├── ping.ts           # 网络连通性检测
│   ├── request.ts        # 通用请求工具
│   ├── url.ts            # URL处理工具
│   └── index.ts          # 网络模块入口
├── storage/               # 存储管理相关工具函数
│   ├── __tests__/        # 存储模块测试文件
│   ├── README.md         # 存储模块详细文档
│   ├── cookie.ts         # Cookie管理工具
│   ├── localStorage.ts   # localStorage工具
│   ├── sessionStorage.ts # sessionStorage工具
│   └── index.ts          # 存储模块入口
├── browser/               # 浏览器相关工具函数
│   ├── __tests__/        # 浏览器模块测试文件
│   ├── README.md         # 浏览器模块详细文档
│   ├── browser.ts        # 浏览器检测工具
│   ├── device.ts         # 设备检测工具
│   └── index.ts          # 浏览器模块入口
├── file/                  # 文件操作相关工具函数
│   ├── __tests__/        # 文件模块测试文件
│   ├── README.md         # 文件模块详细文档
│   ├── base64ToFile.ts   # Base64转文件
│   ├── fileToBase64.ts   # 文件转Base64
│   ├── getFileExtension.ts # 获取文件扩展名
│   ├── getFileSize.ts    # 获取文件大小
│   ├── isValidFileType.ts # 验证文件类型
│   ├── readFile.ts       # 读取文件内容
│   ├── saveFile.ts       # 保存文件
│   └── index.ts          # 文件模块入口
├── color/                 # 颜色相关工具函数
│   ├── __tests__/        # 颜色模块测试文件
│   ├── README.md         # 颜色模块详细文档
│   ├── adjustColor.ts    # 颜色调整工具
│   ├── hexToRgb.ts       # 十六进制转RGB
│   ├── rgbToHex.ts       # RGB转十六进制
│   └── index.ts          # 颜色模块入口
├── bigint/                # 大整数相关工具函数
│   ├── __tests__/        # 大整数模块测试文件
│   ├── README.md         # 大整数模块详细文档
│   └── index.ts          # 大整数模块入口
├── boolean/               # 布尔值相关工具函数
│   ├── __tests__/        # 布尔值模块测试文件
│   ├── README.md         # 布尔值模块详细文档
│   └── index.ts          # 布尔值模块入口
├── empty/                 # 空值相关工具函数
│   ├── __tests__/        # 空值模块测试文件
│   ├── README.md         # 空值模块详细文档
│   └── index.ts          # 空值模块入口
├── error/                 # 错误处理相关工具函数
│   ├── __tests__/        # 错误处理模块测试文件
│   ├── README.md         # 错误处理模块详细文档
│   └── index.ts          # 错误处理模块入口
├── promise/               # Promise相关工具函数
│   ├── __tests__/        # Promise模块测试文件
│   ├── README.md         # Promise模块详细文档
│   └── index.ts          # Promise模块入口
├── regexp/                # 正则表达式相关工具函数
│   ├── __tests__/        # 正则表达式模块测试文件
│   ├── README.md         # 正则表达式模块详细文档
│   └── index.ts          # 正则表达式模块入口
├── symbol/                # Symbol相关工具函数
│   ├── __tests__/        # Symbol模块测试文件
│   ├── README.md         # Symbol模块详细文档
│   └── index.ts          # Symbol模块入口
├── type/                  # 类型检测相关工具函数
│   ├── __tests__/        # 类型检测模块测试文件
│   ├── README.md         # 类型检测模块详细文档
│   └── index.ts          # 类型检测模块入口
└── index.ts               # 主入口文件
```

### 模块化设计优势

- **就近原则**：每个模块的测试和文档都放在对应的源代码目录下
- **易于维护**：修改代码时，相关的测试和文档就在同一目录
- **清晰结构**：每个模块都是完整的、自包含的功能单元
- **便于扩展**：新增模块时，只需在对应目录下创建相关文件

### 开发相关
- [贡献指南](../CONTRIBUTING.md) - 如何参与项目开发
- [发布指南](../PUBLISHING.md) - 如何发布新版本

## 快速入门

### 安装

```bash
# 使用 npm
npm install q-utils

# 使用 yarn
yarn add q-utils

# 使用 pnpm
pnpm add q-utils
```

### 基础使用

```typescript
// 导入整个库
import * as qUtils from 'q-utils';

// 按需导入特定功能
import { capitalize } from 'q-utils/string';
import { unique } from 'q-utils/array';
import { isMobile } from 'q-utils/utils';

// 使用示例
capitalize('hello world');  // 'Hello world'
unique([1, 2, 2, 3]);      // [1, 2, 3]
if (isMobile()) {
  // 展示移动版内容
}
```

查看 [使用指南](./usage.md) 获取更多详细示例。 