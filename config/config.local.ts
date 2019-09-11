import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  // 配置数据库
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'echidb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
  };

  return config;
};
