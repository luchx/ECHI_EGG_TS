'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.client.index);
  router.get('/api/login/getCode/:phone', controller.login.getCode);
};
