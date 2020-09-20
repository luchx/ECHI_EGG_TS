import {
  EggAppConfig,
  EggAppInfo,
  PowerPartial,
} from 'egg';

// for config.{env}.ts
export type DefaultConfig = EggAppConfig & IBizConfig;

// app special config scheme
export interface IBizConfig {
  sourceUrl: string;
  apiPrefix: string;
  sequelize: {
    dialect: string;
    database: string;
    host: string;
    port: number;
    username: string;
    password: string;
  };
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<DefaultConfig>;

  // 配置静态文件请求
  config.static = {
    prefix: '/',
  };

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553354059355_2088';

  // add your egg config in here
  config.middleware = [];

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  config.apiPrefix = '/api';

  // 配置页面渲染引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // 配置表单校验错误处理
  config.validatePlus = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.status = 400;
        ctx.body = {
          code: 400,
          error: errors,
          timestamp: +new Date(),
          message: "参数错误",
        };
      }
    },
  };

  // 配置跨域
  config.security = {
    csrf: {
      enable: false,
      // ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: ["http://localhost:9000"],
  };

  config.cors = {
    origin: 'http://localhost:9000',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // the return config will combines to EggAppConfig
  return config;
};
