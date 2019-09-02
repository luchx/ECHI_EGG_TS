import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  
  router.get('/', controller.home.index);
  router.get('/member/getTime', controller.member.getTime);
  router.get('/member/getCode', controller.member.getCode);
  router.post('/member/login', controller.member.login);
  router.get('/member/getInfo/:memberId', controller.member.getInfo);
  router.put('/member/modify', controller.member.modify);

  router.post('/project/create', controller.project.create);
  router.get('/project/getProject', controller.project.getProject);
};
