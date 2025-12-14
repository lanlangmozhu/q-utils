#!/usr/bin/env node

/**
 * 从 TypeDoc 生成的文档创建 VitePress API 页面
 * 每个命名空间生成一个页面，如 api/array.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TYPEDOC_OUTPUT = path.resolve(__dirname, '../api/qh5-utils/namespaces');
const OUTPUT_DIR = path.resolve(__dirname, '../api');
// 从 docs/scripts/ 到项目根目录的 src/，或者从项目根目录直接找 src/
// 优先使用相对于脚本文件的路径，如果不存在则尝试从当前工作目录查找
let SOURCE_DIR = path.resolve(__dirname, '../../src');
if (!fs.existsSync(SOURCE_DIR)) {
  // 如果相对路径不存在，尝试从当前工作目录查找
  SOURCE_DIR = path.resolve(process.cwd(), 'src');
  // 如果还是不存在，尝试从 docs 目录向上查找
  if (!fs.existsSync(SOURCE_DIR)) {
    SOURCE_DIR = path.resolve(__dirname, '../../../src');
  }
}

/**
 * 解析函数文档
 */
function parseFunctionDoc(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  const result = {
    name: '',
    description: '',
    signature: '',
    parameters: [],
    returnType: '',
    returnDescription: '',
    example: '',
    sourcePath: '',
    sourceLine: 0
  };

  let currentSection = '';
  let exampleCode = '';
  let inExample = false;
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 提取函数名
    if (line.startsWith('# Function: ')) {
      result.name = line.replace('# Function: ', '').replace('()', '').trim();
    }

    // 提取签名（在 > ** 行中）
    // 格式：> **first**\<`T`\>(`arr`): `T` \| `undefined`
    if (line.startsWith('> **')) {
      // 提取函数名
      const nameMatch = line.match(/\*\*([^*]+)\*\*/);
      if (nameMatch) {
        const funcName = nameMatch[1].trim();
        
        // 提取泛型参数
        const genericMatch = line.match(/\\<`([^`]+)`\\>/);
        const generic = genericMatch ? `<${genericMatch[1]}>` : '';
        
        // 提取参数部分
        const paramMatch = line.match(/\\\(`([^`]+)`\\\)/);
        const paramName = paramMatch ? paramMatch[1] : '';
        
        // 提取返回类型
        const returnMatch = line.match(/: `([^`]+)`/);
        const returnType = returnMatch ? returnMatch[1].replace(/\\\|/g, '|') : 'void';
        
        // 构建完整签名
        if (paramName) {
          // 需要从参数部分获取类型
          result.signature = `function ${funcName}${generic}(${paramName}): ${returnType}`;
        } else {
          result.signature = `function ${funcName}${generic}(): ${returnType}`;
        }
      }
    }

    // 提取源代码路径和行号
    if (line.includes('Defined in:')) {
      const match = line.match(/\[([^\]]+):(\d+)\]/);
      if (match) {
        result.sourcePath = match[1];
        result.sourceLine = parseInt(match[2], 10);
      }
      continue;
    }

    if (line.trim() && 
        !line.startsWith('#') && 
        !line.startsWith('>') && 
        !line.startsWith('`') && 
        !line.startsWith('##') && 
        !line.startsWith('***') &&
        !line.startsWith('[') &&
        !inExample && 
        !result.description &&
        line.trim().length > 0 &&
        !line.includes('qh5-utils') &&
        !line.includes('README.md')) {
      result.description = line.trim();
    }

    // 提取参数
    if (line.trim() === '## Parameters') {
      currentSection = 'parameters';
      continue;
    }

    if (currentSection === 'parameters' && line.startsWith('### ')) {
      const paramName = line.replace('### ', '').trim();
      let paramType = '';
      let paramDesc = '';

      // 读取参数类型和描述
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim();
        if (nextLine.startsWith('### ') || nextLine.startsWith('## ')) {
          i = j - 1;
          break;
        }
        if (nextLine.startsWith('`') && !paramType) {
          paramType = nextLine.replace(/`/g, '').trim();
        } else if (nextLine && 
                   !nextLine.startsWith('`') && 
                   !nextLine.startsWith('##') && 
                   paramType && 
                   !paramDesc &&
                   nextLine.length > 0) {
          paramDesc = nextLine;
        }
      }

      if (paramName) {
        result.parameters.push({
          name: paramName,
          type: paramType || 'any',
          description: paramDesc || ''
        });
      }
    }

    // 提取返回值
    if (line.trim() === '## Returns') {
      currentSection = 'returns';
      continue;
    }

    if (currentSection === 'returns') {
      if (line.trim().startsWith('`') && !result.returnType) {
        result.returnType = line.trim().replace(/`/g, '').replace(/\\\|/g, '|').trim();
      } else if (line.trim() && 
                 !line.trim().startsWith('`') && 
                 !line.trim().startsWith('##') && 
                 result.returnType && 
                 !result.returnDescription &&
                 !line.trim().startsWith('[') &&
                 line.trim().length > 0) {
        result.returnDescription = line.trim();
      }
    }

    // 提取示例
    if (line.trim() === '## Example') {
      inExample = true;
      continue;
    }

    if (inExample) {
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        if (!inCodeBlock) {
          inExample = false;
        }
        continue;
      }
      
      if (inCodeBlock && !line.trim().startsWith('```')) {
        exampleCode += line + '\n';
      }
    }
  }

  result.example = exampleCode.trim();

  // 如果没有签名，从函数名和参数构建
  if (!result.signature && result.name) {
    const params = result.parameters.map(p => `${p.name}: ${p.type}`).join(', ');
    const generic = result.parameters.some(p => p.type.includes('T')) ? '<T>' : '';
    result.signature = `function ${result.name}${generic}(${params}): ${result.returnType || 'void'}`;
  }

  // 更新签名中的参数类型（从 parameters 中获取）
  if (result.signature && result.parameters.length > 0) {
    const params = result.parameters.map(p => `${p.name}: ${p.type}`).join(', ');
    const genericMatch = result.signature.match(/<[^>]+>/);
    const generic = genericMatch ? genericMatch[0] : '';
    const returnType = result.returnType || 'void';
    result.signature = `function ${result.name}${generic}(${params}): ${returnType}`;
  }

  return result;
}

/**
 * 使用 TypeScript AST 从源代码文件中提取函数实现（包括注释）
 */
function extractSourceCode(sourcePath, lineNumber, functionName) {
  try {
    const fullPath = path.join(SOURCE_DIR, sourcePath);
    if (!fs.existsSync(fullPath)) {
      return '';
    }
    
    const content = fs.readFileSync(fullPath, 'utf-8');
    const sourceFile = ts.createSourceFile(
      fullPath,
      content,
      ts.ScriptTarget.Latest,
      true
    );
    
    let targetNode = null;
    let jsdocComment = '';
    
    // 遍历 AST 查找目标函数
    function visit(node) {
      // 检查是否是目标函数
      if (ts.isFunctionDeclaration(node) || ts.isVariableStatement(node)) {
        let nodeName = '';
        let nodeLine = 0;
        let isExport = false;
        
        // 处理函数声明
        if (ts.isFunctionDeclaration(node)) {
          nodeName = node.name?.getText(sourceFile) || '';
          nodeLine = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;
          isExport = ts.getModifiers(node)?.some(m => m.kind === ts.SyntaxKind.ExportKeyword) || false;
        }
        // 处理变量声明（export const functionName = ...）
        else if (ts.isVariableStatement(node)) {
          const isExportVar = ts.getModifiers(node)?.some(m => m.kind === ts.SyntaxKind.ExportKeyword) || false;
          if (isExportVar && node.declarationList.declarations.length > 0) {
            const declaration = node.declarationList.declarations[0];
            nodeName = declaration.name.getText(sourceFile);
            nodeLine = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;
            isExport = isExportVar;
          }
        }
        
        // 检查是否是目标函数（行号匹配或名称匹配）
        if (isExport && nodeName === functionName && 
            (Math.abs(nodeLine - lineNumber) <= 5 || !targetNode)) {
          targetNode = node;
          
          // 查找 JSDoc 注释
          const fullText = sourceFile.getFullText();
          const nodeStart = node.getFullStart();
          const nodePos = node.getStart();
          
          // 在节点前查找注释
          const beforeNode = fullText.substring(nodeStart, nodePos);
          const jsdocMatch = beforeNode.match(/\/\*\*[\s\S]*?\*\//);
          if (jsdocMatch) {
            jsdocComment = jsdocMatch[0];
          }
        }
      }
      
      ts.forEachChild(node, visit);
    }
    
    visit(sourceFile);
    
    if (!targetNode) {
      // 如果 AST 解析失败，回退到原来的方法
      return extractSourceCodeFallback(sourcePath, lineNumber, functionName, content);
    }
    
    // 提取完整的函数代码（包括注释）
    const fullText = sourceFile.getFullText();
    const nodeStart = targetNode.getFullStart(); // 包括前导注释
    const nodePos = targetNode.getStart(); // 函数定义开始位置
    const nodeEnd = targetNode.getEnd(); // 函数结束位置
    
    // 提取函数前的注释（排除文件级别的 @packageDocumentation）
    const beforeNode = fullText.substring(nodeStart, nodePos);
    const jsdocMatch = beforeNode.match(/\/\*\*[\s\S]*?\*\//);
    
    // 如果找到 JSDoc 注释，检查是否包含 @packageDocumentation
    let start = nodeStart;
    if (jsdocMatch) {
      const jsdocText = jsdocMatch[0];
      // 如果包含 @packageDocumentation，跳过这个注释，查找下一个
      if (jsdocText.includes('@packageDocumentation')) {
        // 从注释后开始
        start = nodeStart + jsdocMatch.index + jsdocMatch[0].length;
        // 查找下一个 JSDoc 注释
        const afterPackageDoc = fullText.substring(start, nodePos);
        const nextJsdocMatch = afterPackageDoc.match(/\/\*\*[\s\S]*?\*\//);
        if (nextJsdocMatch) {
          start = nodeStart + jsdocMatch.index + jsdocMatch[0].length + nextJsdocMatch.index;
        } else {
          // 如果没有下一个注释，从函数定义开始
          start = nodePos;
        }
      }
    }
    
    return fullText.substring(start, nodeEnd).trim();
  } catch (error) {
    console.warn(`AST 提取失败，使用回退方法 ${sourcePath}:${lineNumber}:`, error.message);
    // 如果 AST 解析失败，回退到原来的方法
    return extractSourceCodeFallback(sourcePath, lineNumber, functionName);
  }
}

/**
 * 回退方法：使用原来的字符串匹配方式提取代码
 */
function extractSourceCodeFallback(sourcePath, lineNumber, functionName, content = null) {
  try {
    const fullPath = path.join(SOURCE_DIR, sourcePath);
    if (!fs.existsSync(fullPath)) {
      return '';
    }
    
    if (!content) {
      content = fs.readFileSync(fullPath, 'utf-8');
    }
    
    const lines = content.split('\n');
    
    // 从指定行号向前查找函数开始（查找 JSDoc 注释和函数定义）
    let startLine = Math.max(0, lineNumber - 50); // 向前查找最多50行
    let foundStart = false;
    let commentStart = -1;
    
    // 向前查找函数定义的开始位置
    for (let i = lineNumber - 1; i >= startLine; i--) {
      const line = lines[i];
      
      // 查找函数定义（export const/function functionName）
      if (line.includes(`export`) && 
          (line.includes(`const ${functionName}`) || 
           line.includes(`function ${functionName}`) ||
           line.includes(`${functionName} =`))) {
        foundStart = true;
        // 继续向前查找 JSDoc 注释
        for (let j = i - 1; j >= 0; j--) {
          const prevLine = lines[j].trim();
          if (prevLine.startsWith('/**')) {
            commentStart = j;
            break;
          }
          if (prevLine && !prevLine.startsWith('*') && !prevLine.startsWith('//')) {
            break;
          }
        }
        startLine = commentStart >= 0 ? commentStart : i;
        break;
      }
    }
    
    if (!foundStart) {
      // 如果没找到，从指定行号向前查找最近的函数
      for (let i = lineNumber - 1; i >= Math.max(0, lineNumber - 20); i--) {
        const line = lines[i];
        if (line.includes(functionName) && (line.includes('export') || line.includes('='))) {
          startLine = i;
          foundStart = true;
          // 查找注释
          for (let j = i - 1; j >= Math.max(0, i - 30); j--) {
            if (lines[j].trim().startsWith('/**')) {
              startLine = j;
              break;
            }
          }
          break;
        }
      }
    }
    
    // 查找函数结束位置
    let endLine = lineNumber;
    let braceCount = 0;
    let foundBrace = false;
    let foundArrow = false;
    
    // 先检查是否是箭头函数（在同一行）
    const functionLine = lines[lineNumber - 1];
    if (functionLine && functionLine.includes('=>')) {
      foundArrow = true;
      // 箭头函数，查找分号
      for (let i = lineNumber - 1; i < Math.min(lines.length, lineNumber + 10); i++) {
        const line = lines[i];
        if (line.trim().endsWith(';')) {
          endLine = i + 1;
          return lines.slice(startLine, endLine).join('\n');
        }
      }
    }
    
    // 查找大括号函数
    for (let i = startLine; i < lines.length && i < lineNumber + 200; i++) {
      const line = lines[i];
      
      // 计算大括号
      for (const char of line) {
        if (char === '{') {
          braceCount++;
          foundBrace = true;
        } else if (char === '}') {
          braceCount--;
          if (foundBrace && braceCount === 0) {
            endLine = i + 1;
            return lines.slice(startLine, endLine).join('\n');
          }
        }
      }
      
      // 如果没有大括号，查找分号（可能是箭头函数在多行）
      if (!foundBrace && i >= lineNumber - 1) {
        if (line.trim().endsWith(';') && !line.trim().startsWith('//')) {
          endLine = i + 1;
          break;
        }
      }
    }
    
    // 如果没找到结束位置，至少包含到指定行号+1
    if (endLine <= startLine || endLine === lineNumber) {
      endLine = Math.min(lines.length, lineNumber + 1);
    }
    
    return lines.slice(startLine, endLine).join('\n');
  } catch (error) {
    console.error(`提取源代码失败 ${sourcePath}:${lineNumber}:`, error);
    return '';
  }
}

/**
 * 生成命名空间页面
 */
function generateNamespacePage(namespace, functions) {
  const namespaceNames = {
    array: '数组 (Array)',
    string: '字符串 (String)',
    object: '对象 (Object)',
    number: '数字 (Number)',
    date: '日期 (Date)',
    func: '函数 (Function)',
    promise: 'Promise',
    browser: '浏览器 (Browser)',
    dom: 'DOM',
    file: '文件 (File)',
    network: '网络 (Network)',
    storage: '存储 (Storage)',
    type: '类型检测 (Type)',
    empty: '空值检测 (Empty)',
    boolean: '布尔值 (Boolean)',
    regexp: '正则表达式 (RegExp)',
    error: '错误处理 (Error)',
    symbol: 'Symbol',
    bigint: 'BigInt',
    color: '颜色 (Color)'
  };

  const displayName = namespaceNames[namespace] || namespace;

  const functionComponents = functions.map(fn => {
    // 将参数转换为 JSON 字符串
    const paramsJson = JSON.stringify(fn.parameters || []).replace(/"/g, '&quot;');

    const exampleCode = fn.example 
      ? fn.example.replace(/"/g, '&quot;').replace(/\n/g, '\\n').replace(/'/g, "\\'")
      : '';

    // 只有当有示例时才添加这些属性
    const exampleAttributes = fn.example 
      ? `  example-code="${exampleCode}"\n  example-text="使用示例:"`
      : '';

    const sourceCode = fn.sourceCode
      ? fn.sourceCode.replace(/"/g, '&quot;').replace(/\n/g, '\\n').replace(/'/g, "\\'")
      : '';

    const sourceCodeText = fn.sourceCode ? `  source-code="${sourceCode}"` : '';

    // 转义签名中的特殊字符
    const signature = (fn.signature || '').replace(/"/g, '&quot;').replace(/'/g, "\\'").replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // 构建属性列表，只包含非空属性
    const attributes = [
      `  function-name="${fn.name}"`,
      `  description="${(fn.description || '').replace(/"/g, '&quot;').replace(/'/g, "\\'")}"`,
      `  type-code="${signature}"`,
      `  parameters="${paramsJson}"`,
      `  return-type="${(fn.returnType || '').replace(/"/g, '&quot;').replace(/'/g, "\\'").replace(/</g, '&lt;').replace(/>/g, '&gt;')}"`,
      `  return-description="${(fn.returnDescription || '').replace(/"/g, '&quot;').replace(/'/g, "\\'")}"`,
      `  module="${namespace}"`,
      sourceCodeText,
      exampleAttributes
    ].filter(attr => attr && attr.trim() !== '').join('\n');

    return `<FunctionDoc
${attributes}
/>`;
  }).join('\n\n');

  return `---
title: ${displayName}
---

<script setup>
import FunctionDoc from '@theme/components/FunctionDoc.vue'
</script>

# ${displayName}

${displayName} 模块提供了以下函数：

${functionComponents}
`;
}

/**
 * 处理命名空间
 */
function processNamespace(namespace) {
  const namespacePath = path.join(TYPEDOC_OUTPUT, namespace);
  const functionsPath = path.join(namespacePath, 'functions');

  if (!fs.existsSync(functionsPath)) {
    console.log(`跳过 ${namespace}：没有 functions 目录`);
    return;
  }

  // 读取所有函数文件
  const functionFiles = fs.readdirSync(functionsPath)
    .filter(file => file.endsWith('.md') && file !== 'README.md')
    .sort();

  console.log(`处理 ${namespace}，找到 ${functionFiles.length} 个函数`);

  const functions = [];
  for (const file of functionFiles) {
    const filePath = path.join(functionsPath, file);
    const data = parseFunctionDoc(filePath);
    
    if (!data.name) {
      console.warn(`警告：无法解析 ${file}`);
      continue;
    }

    // 提取源代码
    if (data.sourcePath && data.sourceLine) {
      data.sourceCode = extractSourceCode(data.sourcePath, data.sourceLine, data.name);
    }

    functions.push(data);
  }

  // 生成页面
  const pageContent = generateNamespacePage(namespace, functions);
  const outputFile = path.join(OUTPUT_DIR, `${namespace}.md`);
  
  fs.writeFileSync(outputFile, pageContent, 'utf-8');
  console.log(`  ✓ 生成 ${namespace}.md (${functions.length} 个函数)`);
}

/**
 * 主函数
 */
function main() {
  if (!fs.existsSync(TYPEDOC_OUTPUT)) {
    console.error(`错误：TypeDoc 输出目录不存在 ${TYPEDOC_OUTPUT}`);
    console.error('请先运行: pnpm run generate-api');
    process.exit(1);
  }

  const namespaces = fs.readdirSync(TYPEDOC_OUTPUT)
    .filter(item => {
      const itemPath = path.join(TYPEDOC_OUTPUT, item);
      return fs.statSync(itemPath).isDirectory();
    })
    .sort();

  console.log(`找到 ${namespaces.length} 个命名空间\n`);

  for (const namespace of namespaces) {
    processNamespace(namespace);
  }

  console.log('\n✅ API 页面生成完成！');
}

main();
