import {
  Service
} from 'egg';

/**
 * AccessToken Service
 */
export default class AccessToken extends Service {
  /**
   * 获取token
   * 
   * @param {string} bearerToken
   * @returns
   * @memberof AccessToken
   */
  public async getAccessToken(bearerToken: any) {
    const {
      ctx
    } = this;
    return await ctx.model.AccessToken.findOne({
      where: {
        accessToken: bearerToken
      }
    });
  }

  /**
   * 保存token
   *
   * @param {*} token
   * @param {*} client
   * @param {*} user
   * @returns
   * @memberof AccessToken
   */
  public async saveAccessToken(token, client, user) {
    const {
      ctx
    } = this;
    return await ctx.model.AccessToken.create({
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresAt,
      clientId: client.id,
      userId: user.id,
      scope: token.scope || ''
    })
  }

}