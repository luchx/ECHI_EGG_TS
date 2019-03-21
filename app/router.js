'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(app.oAuth2Server);
  router.get('/', controller.client.index);
  router.get('/api/member/getCode', controller.member.getCode);
  router.post('/api/member/register', controller.member.register);
};
