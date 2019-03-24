/**
 * 校验方法
 * 定义规则,统一以大驼峰且Test开头
 */

// 18位 校验身份证
export function TestIdCode(idCode) {
    let code = idCode;
    //身份证号合法性验证
    //支持15位和18位身份证号
    //支持地址编码、出生日期、校验位验证
    let city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江 ',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外 '
    };
    let row = {
        'pass': true,
        'msg': '验证成功'
    };
    if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)) {
        row = {
            'pass': false,
            'msg': '身份证号格式错误'
        };
    } else if (!city[code.substr(0, 2)]) {
        row = {
            'pass': false,
            'msg': '身份证号地址编码错误'
        };
    } else {
        //18位身份证需要验证最后一位校验位
        if (code.length === 18) {
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            let sum = 0;
            let ai = 0;
            let wi = 0;
            for (let i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            let parityString = parity[sum % 11];
            let codeString = code[17].toUpperCase();
            if (parityString.toString() !== codeString.toString()) {
                row = {
                    'pass': false,
                    'msg': '身份证号校验错误'
                };
            }
        }
    }
    return row.pass;
}

// 校验手机
export function TestPhone(phone) {
    let reg = /^((13[0-9])|(15[^4])|(166)|(17[0-8])|(18[0-9])|(19[8-9])|(14[5|7]))\d{8}$/;
    return reg.test(phone);
}

// 校验邮箱
export function TestEmail(email) {
    let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    return reg.test(email);
}

// 校验整数
export function TestInt(num, zero?: Boolean, negative?: Boolean) {
    //zero 是否包含0，negative是否包含负整数
    let reg;
    if (zero) {
        if (negative)  {
            reg = /^(((\-|\+)?([1-9]\d*))|0)$/;
        }else  {
            reg = /^((\+?([1-9]\d*))|0)$/;
        }
    }else {
        if (negative)  {
            reg = /^(\-|\+)?[1-9][0-9]*$/;
        }else  {
            reg = /^\+?[1-9][0-9]*$/;
        }
    }
    return reg.test(num);
}

//校验数值保留小数后一位
export function TestDecimal(num) {
    let reg = /^(([1-9]{1}\d*)|([0]{1}))(\.(\d){1})$/;
    return reg.test(num);
}

//校验数值保留小数后至少n位，最多m位
export function TestDecimalFn(num, n, m) {
    let reg = new RegExp('^(\\-|\\+)?(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){' + n + ',' + m + '})$');
    return reg.test(num);
}