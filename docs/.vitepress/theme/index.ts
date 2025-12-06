import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import FunctionDoc from './components/FunctionDoc.vue';
import 'highlight.js/styles/github-dark.css';
import './custom.css';
import './components/FunctionDoc.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FunctionDoc', FunctionDoc);
  },
} satisfies Theme;

