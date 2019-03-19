'use strict';

module.exports = {
    returnBody(message, data = null, code = 0) {
        this.body = {
            message,
            data,
            code
        };
    },
};