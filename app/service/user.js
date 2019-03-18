const Service = require('egg').Service;

class UserService extends Service {
    async find(phone) {
        const post = await this.app.mysql.get('e_user', {
            phone
        });
        console.log(post)
        return {
            post
        }
    }
}

module.exports = UserService;