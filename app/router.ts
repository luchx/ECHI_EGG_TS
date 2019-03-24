import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const apiPrefix = app.config.apiPrefix;
  
  router.get('/', controller.home.index);
  router.get(apiPrefix + '/member/getCode', controller.member.getCode);
  router.post(apiPrefix + '/member/login', controller.member.login);
  // router.get('/api/member/getInfo/:memberId', controller.member.getInfo);
};
