import {
  Service
} from 'egg';

/**
 * RefreshToken Service
 */
export default class RefreshToken extends Service {
  public async saveRefreshToken(token, client, user) {
    const {
      ctx
    } = this;
    await ctx.model.RefreshToken.create({
      refreshToken: token.refreshToken,
      refreshTokenExpiresAt: token.refreshTokenExpiresAt,
      clientId: client.id,
      userId: user.id,
      scope: token.scope || ''
    })
  }

  public async delRefreshToken(token) {
    const {
      ctx
    } = this;
    return await ctx.model.RefreshToken.destroy({
      where: {
        refreshToken: token.refreshToken
      }
    })
  }

  public async queryRefreshToken(refreshToken) {
    const {
      ctx
    } = this;
    return await ctx.model.RefreshToken.findOne({
      where: {
        refreshToken: refreshToken
      }
    })
  }


}