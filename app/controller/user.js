'use strict';

const Controller = require('egg').Controller;
var crypto = require('crypto');

class UserController extends Controller {
  // 获取用户验证码
  async getCode() {
    const {
      ctx
    } = this;
    let {
      phone
    } = ctx.query;
    const validateResult = await ctx.validate('user.getCode', {
      phone
    });
    if (!validateResult) {
      return;
    }
    ctx.returnBody('请求成功', '1234');
  }

  // 注册用户
  async register() {
    const {
      ctx
    } = this;
    let {
      phone,
      code
    } = ctx.request.body;
    const validateResult = await ctx.validate('user.register', {
      phone,
      code
    });
    if (!validateResult) {
      return;
    }
    const Md5Pass = crypto.createHash('md5').update(code).digest('hex');
    let user = await ctx.service.user.find(phone);
    if (!user) {
      user = await ctx.service.user.create(phone, Md5Pass);
    }
    ctx.returnBody('请求成功');
  }
}

module.exports = UserController;