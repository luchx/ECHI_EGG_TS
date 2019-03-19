'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(app.oAuth2Server);
  router.get('/', controller.client.index);
  router.get('/api/user/getCode', controller.user.getCode);
  router.post('/api/user/register', controller.user.register);
};
