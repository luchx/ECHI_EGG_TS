'use strict';

const Controller = require('egg').Controller;
let { TestPhone } = require('../utils/validator');
class LoginController extends Controller {
  async getCode() {
    const {
      ctx
    } = this;
    let {
      phone
    } = ctx.query;
    let result = {
      code: 0,
      message: '请求成功',
      data: '1234'
    };
    if (!phone) {
      result['code'] = 500001;
      result['message'] = '请输入您的手机号码';
      result['data'] = null;
    }else if (!TestPhone(phone)) {
      result['code'] = 500002;
      result['message'] = '您的号码输入错误';
      result['data'] = null;
    }
    // const phone = await this.service.user.find(ctx.params.phone);

    ctx.body = result;
  }
}

module.exports = LoginController;
