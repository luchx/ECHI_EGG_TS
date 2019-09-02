import {
  Service
} from 'egg';

/**
 * Member Service
 */
export default class Project extends Service {
  /**
   * 添加课程表
   * 
   * @param {object} data
   * @returns
   * @memberof Member
   */
  public async create(data) {
    const {
      ctx
    } = this;
    const result = await ctx.model.project.create(data);
    console.log(result)
    ctx.success('修改成功', result);
  }

  /**
   * 获取课程表
   * 
   * @returns
   * @memberof Member
   */
  public async getProject() {
    const {
      ctx
    } = this;
    const result = await ctx.model.project.findAll();
    ctx.success(null, result);
  }
}