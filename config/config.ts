// https://umijs.org/config/
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  antd: {},
  mock: false,
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    [
      'babel-plugin-import',
      { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false },
      'lodash',
    ],
  ],
  request: false,
  crossorigin: true,
  dva: false,
  locale: { antd: true },
  layout: {
    // https://umijs.org/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  webpack5: {},
  exportStatic: {},
  chainWebpack(config) {
    config.plugin('dayjs').use(AntdDayjsWebpackPlugin);
    return config;
  },
  // Configure external
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },

  // Introduce scripts from external libraries
  // Distinguish development and production, use different products
  // https://www.jsdelivr.com/
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
        'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js',
        'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js',
      ]
      : [
        'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js',
        'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js',
      ],
});
