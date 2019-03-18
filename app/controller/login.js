'use strict';

const Controller = require('egg').Controller;
function TestPhone(phone) {
  let reg = /^((13[0-9])|(15[^4])|(166)|(17[0-8])|(18[0-9])|(19[8-9])|(14[5|7]))\d{8}$/;
  return reg.test(phone);
}
class LoginController extends Controller {
  async getCode() {
    const {
      ctx
    } = this;
    let {
      phone
    } = ctx.params;
    let result = {
      code: 0,
      message: '请求成功',
      data: '1234'
    };
    if (!phone) {
      result['code'] = 500001;
      result['message'] = '请输入您的手机号码';
      result['data'] = null;
    }
    if (!TestPhone(phone)) {
      result['code'] = 500001;
      result['message'] = '您的号码输入错误';
      result['data'] = null;
    }
    // const phone = await this.service.user.find(ctx.params.phone);

    ctx.body = result;
  }
}

module.exports = LoginController;
