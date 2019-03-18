'use strict';

const Controller = require('egg').Controller;

class MemberController extends Controller {
  async getCode() {
    const { ctx } = this;
    const query = ctx.query;
    console.log(query);
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: {}
    };
  }
}

module.exports = MemberController;
