import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, logger } = app;
  const apiPrefix = app.config.apiPrefix;
  logger.info('========>',apiPrefix)

  router.get('/', controller.home.index);
  router.get(apiPrefix + '/member/getCode', controller.member.getCode);
  // router.post('/api/member/register', controller.member.register);
  // router.get('/api/member/getInfo/:memberId', controller.member.getInfo);
};
