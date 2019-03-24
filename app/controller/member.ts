import {
  Controller
} from 'egg';

export default class MemberController extends Controller {

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
}