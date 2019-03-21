const Service = require('egg').Service;

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
            password
        });
        return result
    }
}

module.exports = MemberService;