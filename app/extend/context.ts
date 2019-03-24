import { Context } from 'egg';

/**
 * 成功返回请求体信息
 *
 * @export
 * @param {*} message
 * @param {*} [data=null]
 * @param {number} [code=0]
 */
export function success(this: Context, message, data = null) {
    this.body = {
        message,
        data,
        code: 0
    };
    this.status = 200;
}

/**
 * 失败返回请求体信息
 *
 * @export
 * @param {*} message
 * @param {*} [data=null]
 * @param {number} [code]
 */
export function fail(this: Context, message, code, data = null) {
    this.body = {
        message,
        data,
        code
    };
}
