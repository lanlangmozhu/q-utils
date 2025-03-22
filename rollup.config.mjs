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
        name: 'QUtils',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: resolve(__dirname, 'tsconfig.json'),
        clean: true,
        cacheRoot: false,
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationDir: './dist/types',
            emitDeclarationOnly: false,
            noEmit: false,
          },
        },
      }),
      commonjs(),
      nodeResolve(),
      terser(),
    ],
  },
  // 类型定义文件打包配置
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]; 