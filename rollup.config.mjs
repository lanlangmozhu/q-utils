import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { dts } from 'rollup-plugin-dts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkgContent = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default [
  // 普通打包配置
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkgContent.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkgContent.module,
        format: 'es',
        sourcemap: true,
      },
      {
        file: pkgContent.unpkg,
        format: 'umd',
        name: 'QH5Utils',
        sourcemap: true,
      },
      {
        file: 'dist/index.iife.js',
        format: 'iife',
        name: 'QH5Utils',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: resolve(__dirname, 'tsconfig.json'),
        clean: true,
        cacheRoot: false,
        // 禁用类型定义生成，只生成 JS 代码，类型定义由 rollup-plugin-dts 单独生成
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
            emitDeclarationOnly: false,
            noEmit: false,
          },
        },
      }),
      commonjs(),
      nodeResolve(),
      terser({
        compress: {
          drop_console: true, // 移除所有 console 调用
          drop_debugger: true, // 移除 debugger 语句
        },
      }),
    ],
  },
  // 类型定义文件打包配置
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      dts({
        // 移除注释以减小文件大小（可选，如果保留注释则注释掉）
        // removeComments: false,
        // 不生成 source map
        compilerOptions: {
          declarationMap: false,
        },
      }),
    ],
  },
]; 