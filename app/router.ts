import { Application } from 'egg';

export default (app: Application) => {
  const { controller } = app;

  app.get('/', controller.home.index);
  app.get('/member/getTime', controller.member.getTime);
  app.get('/member/getCode', controller.member.getCode);
  app.post('/member/login', controller.member.login);
  app.get('/member/getInfo/:memberId', controller.member.getInfo);
  app.put('/member/modify', controller.member.modify);

  app.post('/project/create', controller.project.create);
  app.get('/project/getProject', controller.project.getProject);
};
