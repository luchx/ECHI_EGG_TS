import {
  Controller
} from 'egg';

export default class MemberController extends Controller {
  public async getCode() {
    const {
      ctx
    } = this;
    // const rule = {
    //   id: [{
    //       required: true
    //     },
    //     {
    //       type: 'number',
    //       message: 'id 必须为数字'
    //     }
    //   ],
    //   password: [{
    //       required: true
    //     },
    //     {
    //       type: 'string',
    //       message: 'password 必须为字符串'
    //     }
    //   ]
    // }
    // let queryRule = {
    //   username: 123456,
    //   password: 'abcdefg'
    // }

    // const validateResult = await ctx.validate(rule, queryRule);
    // if (!validateResult) {
    //   return;
    // }
    ctx.success('请求成功', '1234');
  }
}