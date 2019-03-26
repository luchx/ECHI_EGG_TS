import {
  EggAppConfig,
  EggAppInfo,
  PowerPartial
} from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial < EggAppConfig & IBizConfig > ;

// app special config scheme
export interface IBizConfig {
  sourceUrl: string;
  apiPrefix: string;
  sequelize: {
    dialect: string;
    database: string;
    host: string;
    port: string;
    username: string;
    password: string;
    // 数据库表名前缀
    tablePrefix: string;
  };
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial < EggAppConfig > & IBizConfig;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553354059355_2088';

  // add your egg config in here
  config.middleware = [];

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // 配置数据库
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'echidb',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',

    tablePrefix: 'echi_',
  };

  config.view = {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.html': 'nunjucks',
      },
    },

    // 配置表单校验错误处理
    config.validatePlus = {
      resolveError(ctx, errors) {
        if (errors.length) {
          ctx.status = 400;
          ctx.body = {
            status: false,
            error: errors,
            message: '参数错误',
          };
        }
      }
    };

  config.apiPrefix = '/api';

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: ['http://localhost:3001']
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
  };
};