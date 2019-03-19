const Service = require('egg').Service;

class UserService extends Service {
    async find(phone) {
        let result = await this.app.mysql.get('e_user', {
            phone
        });
        return result
    }

    async create(phone, password) {
        let result = await this.app.mysql.insert('e_user', {
            phone,
            password
        });
        return result
    }
}

module.exports = UserService;