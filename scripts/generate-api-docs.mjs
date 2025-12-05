import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

/**
 * 生成 API 文档并转换为 VitePress 格式
 */
function generateApiDocs() {
  console.log('📚 开始生成 API 文档...');

  try {
    // 1. 运行 TypeDoc 生成文档
    console.log('1. 运行 TypeDoc...');
    execSync('pnpm docs:generate', { 
      cwd: rootDir, 
      stdio: 'inherit' 
    });

    // 2. 检查生成的文档目录
    const apiDir = join(rootDir, 'docs', 'api');
    if (!existsSync(apiDir)) {
      console.error('❌ API 文档目录不存在，请检查 TypeDoc 配置');
      process.exit(1);
    }

    console.log('✅ API 文档生成完成！');
    console.log(`📁 文档位置: ${apiDir}`);
    console.log('\n💡 提示: 现在可以运行 `pnpm docs:dev` 查看文档网站');

  } catch (error) {
    console.error('❌ 生成 API 文档失败:', error.message);
    process.exit(1);
  }
}

// 执行
generateApiDocs();

