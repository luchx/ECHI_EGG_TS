import {
  Controller,
} from 'egg';

export default class userController extends Controller {

  // 获取当前日期的时间戳
  public async getTime() {
    this.ctx.success(null, new Date().getTime());
  }

  /**
   * 获取验证码
   *
   * @query {string} phone
   * @returns
   * @userof userController
   */
  public async getCode() {
    const {
      ctx,
    } = this;
    const {
      phone,
    } = ctx.query;
    return await ctx.service.user.getCode(phone);
  }

  /**
   * 登录
   *
   * @requestBody {string} phone
   * @requestBody {string} code
   * @returns
   * @userof userController
   */
  public async login() {
    const {
      ctx,
    } = this;
    const {
      phone,
      code,
    } = ctx.request.body;
    return await ctx.service.user.login(phone, code);
  }

  /**
   * 获取用户信息
   *
   * @params {string} userId
   * @returns
   * @userof userController
   */
  public async getInfo() {
    const {
      ctx,
    } = this;
    const {
      userId,
    } = ctx.params;
    return await ctx.service.user.getInfo(userId);
  }

  /**
   * 修改用户信息
   *
   * @params {string} userId
   * @returns
   * @userof userController
   */
  public async modify() {
    const {
      ctx,
    } = this;
    const {
      id,
    } = ctx.request.body;
    return await ctx.service.user.modify({ id }, ctx.request.body);
  }

}
