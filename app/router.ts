import { Application } from 'egg';

export default (app: Application) => {
  const { controller, config } = app;
  const { apiPrefix } = config;

  app.get('/', controller.home.index);
  app.get(apiPrefix + '/user/getVerify', controller.user.getCode);
  app.post(apiPrefix + '/user/login', controller.user.login);
};
