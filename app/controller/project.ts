import { Controller } from 'egg';

export default class ProjectController extends Controller {
  // 创建课程
  public async create() {
    const {
      ctx
    } = this;
    // const project = {
    //   time: new Date().getTime(),
    //   coachName: 'Jack',
    //   coachAvatar: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg',
    //   price: '310.00',
    //   memberPrice: '240.00',
    //   duration: 30,
    //   startTime: 1553999400000,
    //   endtime: 1554001200000,
    //   isHot: false,
    //   leftSeat: 0
    // }
    const project = ctx.request.body;
    return await ctx.service.project.create(project);
  }

  // 创建课程
  public async getProject() {
    const {
      ctx
    } = this;
    return await ctx.service.project.getProject();
  }
}
