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
        message,
        data,
        status: true,
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
        message,
        data,
        status: false,
    };
}
