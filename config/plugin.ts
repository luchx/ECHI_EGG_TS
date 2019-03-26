import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  oAuth2Server: {
    enable: true,
    package: 'egg-oauth2-server',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  validatePlus: {
    enable: true,
    package: 'egg-validate-plus',
  },
  cors: {
    enable: true,
    package: "egg-cors"
  }
};

export default plugin;
