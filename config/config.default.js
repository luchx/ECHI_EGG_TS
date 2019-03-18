/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552805891255_3427';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".tpl": "nunjucks"
    }
  };

  config.cors = {
    allowMethods: "GET,HEAD,PUT,OPTIONS,POST,DELETE,PATCH"
  };

  config.oAuth2Server = {
    grants: ["password"],
    expires: 60
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
