'use strict';

const Controller = require('egg').Controller;
var crypto = require('crypto');

class MemberController extends Controller {
  // 获取用户验证码
  async getCode() {
    const {
      ctx
    } = this;
    let {
      phone
    } = ctx.query;
    const validateResult = await ctx.validate('member.getCode', {
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
    const validateResult = await ctx.validate('member.register', {
      phone,
      code
    });
    if (!validateResult) {
      return;
    }
    const Md5Pass = crypto.createHash('md5').update(code).digest('hex');
    let member = await ctx.service.member.findByPhone(phone);
    if (!member) {
      member = await ctx.service.member.create(phone, Md5Pass);
    }
    ctx.returnBody('请求成功', {id: member.id});
  }

  // 获取用户信息
  async getInfo() {
    const {
      ctx
    } = this;
    let {
      memberId
    } = ctx.params;
    let member = await ctx.service.member.findById(memberId);
    ctx.returnBody('请求成功', {
      member
    });
  }
}

module.exports = MemberController;