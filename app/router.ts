import { Application } from 'egg';

export default (app: Application) => {
  const { controller, config } = app;
  const { apiPrefix } = config;

  app.get('/', controller.home.index);
  app.get(apiPrefix + '/member/getTime', controller.member.getTime);
  app.get(apiPrefix + '/member/getCode', controller.member.getCode);
  app.post(apiPrefix + '/member/login', controller.member.login);
  app.get(apiPrefix + '/member/getInfo/:memberId', controller.member.getInfo);
  app.put(apiPrefix + '/member/modify', controller.member.modify);

  app.post(apiPrefix + '/project/create', controller.project.create);
  app.get(apiPrefix + '/project/getProject', controller.project.getProject);
};
