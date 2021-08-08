import { BASE_GRAPH_API } from '../src/constant/http';
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */

const serveUrlMap = {
  dev: BASE_GRAPH_API,
};

const { REACT_APP_ENV } = process.env;

export default {
  proxy: {
    '/api': {
      target: serveUrlMap[REACT_APP_ENV as string],
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
