'use strict';

let {
    TestPhone
} = require('../../utils/validator');

const rule = {
    phone: [{
            required: true,
            message: '手机号码不能为空'
        },
        {
            validator: (rule, value, callback) => {
                if (!value || TestPhone(value)) {
                    callback();
                } else {
                    callback('请输入正确的手机号码');
                }
            }
        }
    ],
    code: [{
        required: true,
        message: '验证码不能为空'
    }],
};

module.exports = rule;