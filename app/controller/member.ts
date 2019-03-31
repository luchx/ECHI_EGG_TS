import {
  Controller
} from 'egg';

export default class MemberController extends Controller {

  // 获取当前日期的时间戳 
  public async getTime() {
    this.ctx.success(null, new Date().getTime());
  }

  /**
   * 获取验证码
   *
   * @query {string} phone
   * @returns
   * @memberof MemberController
   */
  public async getCode() {
    const {
      ctx
    } = this;
    const {
      phone
    } = ctx.query;
    return await ctx.service.member.getCode(phone);
  }

  /**
   * 登录
   *
   * @requestBody {string} phone
   * @requestBody {string} code
   * @returns
   * @memberof MemberController
   */
  public async login() {
    const {
      ctx
    } = this;
    const {
      phone,
      code
    } = ctx.request.body;
    return await ctx.service.member.login(phone, code);
  }

  /**
   * 获取用户信息
   * 
   * @params {string} memberId
   * @returns
   * @memberof MemberController
   */
  public async getInfo() {
    const {
      ctx
    } = this;
    const {
      memberId
    } = ctx.params;
    return await ctx.service.member.getInfo(memberId);
  }

  /**
   * 修改用户信息
   * 
   * @params {string} memberId
   * @returns
   * @memberof MemberController
   */
  public async modify() {
    const {
      ctx
    } = this;
    const {
      id
    } = ctx.request.body;
    return await ctx.service.member.modify({ id }, ctx.request.body);
  }

}