import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Q-Utils',
  description: '一个功能丰富的前端工具函数库，提供了日常开发中常用的各类实用工具函数',
  base: '/q-utils/',
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'utils, javascript, typescript, frontend, tools' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '示例', link: '/examples/' },
      { text: 'GitHub', link: 'https://github.com/lanlangmozhu/q-utils' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装', link: '/guide/installation' },
          ],
        },
        {
          text: '使用指南',
          items: [
            { text: '命名空间导入', link: '/guide/namespace-import' },
            { text: '按需导入', link: '/guide/tree-shaking' },
            { text: '类型支持', link: '/guide/types' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API 文档',
          items: [
            { text: '概览', link: '/api/' },
            { text: '数组 (Array)', link: '/api/array' },
            { text: '字符串 (String)', link: '/api/string' },
            { text: '对象 (Object)', link: '/api/object' },
            { text: '数字 (Number)', link: '/api/number' },
            { text: '日期 (Date)', link: '/api/date' },
            { text: '函数 (Function)', link: '/api/function' },
            { text: '浏览器 (Browser)', link: '/api/browser' },
            { text: '颜色 (Color)', link: '/api/color' },
            { text: 'DOM', link: '/api/dom' },
            { text: '文件 (File)', link: '/api/file' },
            { text: '网络 (Network)', link: '/api/network' },
            { text: '存储 (Storage)', link: '/api/storage' },
            { text: '类型检测 (Type)', link: '/api/type' },
            { text: '空值检测 (Empty)', link: '/api/empty' },
            { text: '布尔值 (Boolean)', link: '/api/boolean' },
            { text: 'Promise', link: '/api/promise' },
            { text: '正则表达式 (RegExp)', link: '/api/regexp' },
            { text: '错误处理 (Error)', link: '/api/error' },
            { text: 'Symbol', link: '/api/symbol' },
            { text: 'BigInt', link: '/api/bigint' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lanlangmozhu/q-utils' },
    ],

    footer: {
      message: '基于 MIT 协议发布',
      copyright: 'Copyright © 2024 Q-Utils Team',
    },

    search: {
      provider: 'local',
    },
  },
});

