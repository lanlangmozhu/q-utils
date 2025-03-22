#!/usr/bin/env node

/**
 * Q-Utils 项目初始化脚本
 * 该脚本帮助新用户快速设置开发环境和创建基本的目录结构
 */

import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { execSync } from 'child_process';
import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件所在目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

// 颜色输出辅助函数
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

const log = {
  info: (message) => console.log(`${colors.cyan}${message}${colors.reset}`),
  success: (message) => console.log(`${colors.green}✓ ${message}${colors.reset}`),
  warning: (message) => console.log(`${colors.yellow}⚠ ${message}${colors.reset}`),
  error: (message) => console.log(`${colors.red}✗ ${message}${colors.reset}`),
  title: (message) => console.log(`\n${colors.bright}${colors.cyan}${message}${colors.reset}\n`)
};

// 创建目录结构
function createDirectoryStructure() {
  log.title('创建目录结构...');

  const directories = [
    'src/string',
    'src/array',
    'src/object',
    'src/number',
    'src/date',
    'src/function',
    'src/browser',
    'src/utils',
    'test/string',
    'test/array',
    'test/object',
    'test/number',
    'test/date',
    'test/function',
    'test/browser',
    'test/utils',
    'examples',
    'docs',
    'dist'
  ];

  let created = 0;
  directories.forEach(dir => {
    const dirPath = join(rootDir, dir);
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
      log.success(`创建目录: ${dir}`);
      created++;
    } else {
      log.info(`目录已存在: ${dir}`);
    }
  });

  if (created > 0) {
    log.success(`成功创建 ${created} 个目录`);
  } else {
    log.info('所有目录已存在');
  }
}

// 检查并安装依赖
function checkAndInstallDependencies() {
  log.title('检查并安装依赖...');

  try {
    // 检查 package.json 是否存在
    const packageJsonPath = join(rootDir, 'package.json');
    if (!existsSync(packageJsonPath)) {
      log.error('package.json 文件不存在，请先初始化项目！');
      process.exit(1);
    }

    // 检查是否已安装依赖
    if (!existsSync(join(rootDir, 'node_modules'))) {
      log.info('正在安装依赖，这可能需要几分钟...');
      execSync('pnpm install', { stdio: 'inherit', cwd: rootDir });
      log.success('依赖安装完成');
    } else {
      log.info('依赖已安装');
    }
  } catch (error) {
    log.error(`安装依赖时出错: ${error.message}`);
    process.exit(1);
  }
}

// 创建示例模板文件
function createTemplateFiles() {
  log.title('创建示例模板文件...');

  const templates = [
    {
      path: 'src/string/template.ts',
      content: `/**
 * 字符串工具函数模板
 * 
 * @param str - 输入字符串
 * @returns 处理后的字符串
 * @example
 * \`\`\`ts
 * stringFunction('hello'); // 返回 'HELLO'
 * \`\`\`
 */
export function stringFunction(str: string): string {
  // 实现你的函数逻辑
  return str.toUpperCase();
}
`
    },
    {
      path: 'test/string/template.test.ts',
      content: `import { stringFunction } from '../../src/string/template';

describe('stringFunction', () => {
  test('应该将字符串转换为大写', () => {
    expect(stringFunction('hello')).toBe('HELLO');
    expect(stringFunction('world')).toBe('WORLD');
  });

  test('应该处理空字符串', () => {
    expect(stringFunction('')).toBe('');
  });
});
`
    }
  ];

  let created = 0;
  templates.forEach(({ path, content }) => {
    const filePath = join(rootDir, path);
    if (!existsSync(filePath)) {
      writeFileSync(filePath, content, 'utf8');
      log.success(`创建文件: ${path}`);
      created++;
    } else {
      log.info(`文件已存在: ${path}`);
    }
  });

  if (created > 0) {
    log.success(`成功创建 ${created} 个模板文件`);
  } else {
    log.info('所有模板文件已存在');
  }
}

// 运行测试
function runTests() {
  log.title('运行测试...');

  try {
    log.info('执行测试...');
    execSync('pnpm test', { stdio: 'inherit', cwd: rootDir });
    log.success('测试通过');
  } catch (error) {
    log.warning('测试未通过，请检查测试结果');
  }
}

// 打印使用说明
function printUsageGuide() {
  log.title('开始使用 Q-Utils');

  console.log(`
${colors.bright}可用命令:${colors.reset}

  ${colors.cyan}pnpm dev${colors.reset}       - 开发模式运行，自动监听文件变化
  ${colors.cyan}pnpm build${colors.reset}     - 构建生产版本
  ${colors.cyan}pnpm test${colors.reset}      - 运行单元测试
  ${colors.cyan}pnpm docs${colors.reset}      - 生成文档

${colors.bright}开发新功能:${colors.reset}

  1. 在对应目录(如 src/string/)创建新文件
  2. 实现功能并添加完整的 JSDoc 注释
  3. 在对应的 index.ts 中导出函数
  4. 编写单元测试
  5. 运行 ${colors.cyan}pnpm test${colors.reset} 验证功能

${colors.bright}项目文档:${colors.reset}

  - 查看 ${colors.cyan}README.md${colors.reset} 获取项目概览
  - 查看 ${colors.cyan}docs/USAGE.md${colors.reset} 获取详细使用指南
  - 查看 ${colors.cyan}CONTRIBUTING.md${colors.reset} 了解如何贡献代码

祝你开发愉快！
`);
}

// 主函数
function init() {
  log.title('欢迎使用 Q-Utils 项目初始化脚本');

  createDirectoryStructure();
  checkAndInstallDependencies();
  createTemplateFiles();
  runTests();
  printUsageGuide();
}

// 执行初始化
init(); 