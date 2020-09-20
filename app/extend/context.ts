import { Context } from 'egg';

/**
 * 成功返回请求体信息
 *
 * @export
 * @param {*} message
 * @param {*} [data=null]
 * @param {number} [status=0]
 */
export function success(this: Context, message, data = null) {
    this.body = {
        code: 0,
        result: data,
        timestamp: +new Date(),
        message: message,
    };
    this.status = 200;
}

/**
 * 失败返回请求体信息
 *
 * @export
 * @param {*} message
 * @param {*} [data=null]
 * @param {number} [status]
 */
export function fail(this: Context, message, data = null) {
    this.body = {
        code: 500,
        result: data,
        timestamp: +new Date(),
        message: message,
    };
}
