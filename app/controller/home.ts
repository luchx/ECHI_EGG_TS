import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const serviceRes = await this.ctx.service.test.index();
    const result = await this.app.model.Member.findAll();
    console.log(result);
    this.ctx.body = 'hi, egg' + serviceRes;
  }
}
