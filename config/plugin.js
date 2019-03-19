'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: "egg-view-nunjucks"
  },
  validatePlus: {
    enable: true,
    package: "egg-validate-plus"
  },
  mysql: {
    enable: true,
    package: "egg-mysql"
  },
  cors: {
    enable: true,
    package: "egg-cors"
  },
  oAuth2Server: {
    enable: true,
    package: "egg-oauth2-server"
  }
};
