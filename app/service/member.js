const Service = require('egg').Service;
const dayjs = require('dayjs');

class MemberService extends Service {
    async find(phone) {
        let result = await this.app.mysql.get('e_member', {
            phone
        });
        return result
    }

    async create(phone, password) {
        let result = await this.app.mysql.insert('e_member', {
            phone,
            password,
            register_time: dayjs().format('YYYY-MM-DD HH:mm:ss')
        });
        return result
    }
}

module.exports = MemberService;