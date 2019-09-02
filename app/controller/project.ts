import { Controller } from 'egg';

export default class ProjectController extends Controller {
  // 创建课程
  public async create() {
    const {
      ctx,
    } = this;
    const project = ctx.request.body;
    return await ctx.service.project.create(project);
  }

  // 创建课程
  public async getProject() {
    const {
      ctx,
    } = this;
    return await ctx.service.project.getProject();
  }
}
