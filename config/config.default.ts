import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & IBizConfig>;

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
  const config = {} as PowerPartial<EggAppConfig> & IBizConfig;

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

  // 配置表单校验错误处理
  config.validatePlus = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.status = 400;
        ctx.body = {
          code: 400,
          error: errors,
          message: '参数错误',
        };
      }
    }
  };

  config.apiPrefix = '/api';

  // the return config will combines to EggAppConfig
  return {
    ...config,
  };
};
