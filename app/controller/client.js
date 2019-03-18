"use strict";

module.exports = app => {
  class ClientController extends app.Controller {
    async index() {
      const {
        ctx
      } = this;
      const data = {
        name: 'egg'
      };
      await ctx.render('public/index.html', data);
    }
  }
  return ClientController;
};
