import {
  Service
} from 'egg';

/**
 * Client Service
 */
export default class Client extends Service {
  public async getClient(clientId, clientSecret) {
    const {
      ctx
    } = this;
    let params = {
      clientId: clientId
    }
    if (clientSecret) {
      params['clientSecret'] = clientSecret
    }
    const client = await ctx.model.Client.findOne({
      where: params
    })
    return client
  }

  public async queryClient(params) {
    const {
      ctx
    } = this;
    return await ctx.model.Client.findOne({
      where: params,
      attributes: {
        exclude: ['clientSecret']
      }
    })
  }

  public async add(fields) {
    const {
      ctx
    } = this;
    return await ctx.model.Client.create(fields);
  }

}