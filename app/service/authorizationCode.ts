import {
  Service
} from 'egg';

/**
 * AuthorizationCode Service
 */
export default class AuthorizationCode extends Service {
  public async saveAuthorizationCode(code, client, user) {
    const {
      ctx
    } = this;
    return await ctx.model.AuthorizationCode.create({
      code: code.authorizationCode,
      expiresAt: code.expiresAt,
      redirectUri: code.redirectUri,
      scope: code.scope || '',
      clientId: client.id,
      userId: user.id
    })
  }

  public async queryAuthorizationCode(params) {
    const {
      ctx
    } = this;
    return await ctx.model.AuthorizationCode.findOne({
      where: params
    })
  }

  public async delAuthorizationCode (code) {
    const {
      ctx
    } = this;
    return await ctx.model.AuthorizationCode.destroy({
      where: {
        code: code
      }
    })
  }

}