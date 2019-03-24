import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  // 数据库配置
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'echidb',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',

    tablePrefix: 'echi_',
  };

  return config;
};
