import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const apiPrefix = app.config.apiPrefix;
  
  router.get('/', controller.home.index);
  router.get(apiPrefix + '/member/getTime', controller.member.getTime);
  router.get(apiPrefix + '/member/getCode', controller.member.getCode);
  router.post(apiPrefix + '/member/login', controller.member.login);
  router.get(apiPrefix + '/member/getInfo/:memberId', controller.member.getInfo);
  router.put(apiPrefix + '/member/modify', controller.member.modify);

  router.post(apiPrefix + '/project/create', controller.project.create);
  router.get(apiPrefix + '/project/getProject', controller.project.getProject);
};
