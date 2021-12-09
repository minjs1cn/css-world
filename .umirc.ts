import { defineConfig } from 'dumi';
import pkg from './package.json';

export default defineConfig({
  title: 'css world',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/' + pkg.name,
  publicPath: '/' + pkg.name + '/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  analytics: {
    baidu: '',
  },
});
