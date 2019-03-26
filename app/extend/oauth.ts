class OAuth {
  constructor(public ctx: any) {
    this.ctx = ctx
  }
  async getClient(_clientId: any, _clientSecret: any) {
    try {
      console.log('getClient invoked.......')
      // const client = await this.ctx.model.Client.getClient(clientId, clientSecret);
      // if (!client) return false
      // return {
      //   id: client.clientId,
      //   redirectUris: client.redirectUri.split(','),
      //   grants: client.grants.split(',')
      // }
    } catch (err) {
      return false
    }
  }
  async getUser(_username: any, _password: any) {
    try {
      console.log('getUser invoked.......')
      // const user = await this.ctx.model.User.getUser(username, password)
      // return user
    } catch (err) {
      return false
    }
  }
  async getAccessToken(bearerToken: any) {
    try {
      const token = await this.ctx.model.AccessToken.getAccessToken(bearerToken)
      if (!token) return
      // return {
      //   accessToken: token.accessToken,
      //   accessTokenExpiresAt: token.accessTokenExpiresAt,
      //   scope: token.scope,
      //   client: {
      //     id: token.clientId
      //   },
      //   user: {
      //     id: token.userId
      //   }
      // }
    } catch (err) {
      return false
    }
  }
  async saveToken(token: { accessToken: any; accessTokenExpiresAt: any; refreshToken: any; refreshTokenExpiresAt: any; }, client: { id: any; }, user: any) {
    try {
      await this.ctx.model.AccessToken.saveAccessToken(token, client, user);
      await this.ctx.model.RefreshToken.saveRefreshToken(token, client, user);
      // return {
      //   accessToken: token.accessToken,
      //   accessTokenExpiresAt: token.accessTokenExpiresAt,
      //   refreshToken: token.refreshToken,
      //   refreshTokenExpiresAt: token.refreshTokenExpiresAt,
      //   client: {
      //     id: client.id
      //   },
      //   user: user
      // }
    } catch (err) {
      return false
    }
  }
  async revokeToken(token: any) {
    try {
      return await this.ctx.model.RefreshToken.delRefreshToken(token)
    } catch (err) {
      return false
    }
  }
  async getAuthorizationCode(authorizationCode: any) {
    try {
      console.log('authorizationCode: ', authorizationCode)
      const authCode = await this.ctx.model.AuthorizationCode.queryAuthorizationCode({
        code: authorizationCode
      })
      if (!authCode) return
      // const user = await this.ctx.model.User.queryUser({
      //   id: authCode.userId
      // })
      // if (!user) return
      // return {
      //   code: authCode.code,
      //   expiresAt: authCode.expiresAt,
      //   redirectUri: authCode.redirectUri,
      //   scope: authCode.scope,
      //   client: {
      //     id: authCode.clientId
      //   },
      //   user: user
      // }
    } catch (err) {
      return false
    }
  }
  async saveAuthorizationCode(code: { authorizationCode: any; expiresAt: any; redirectUri: any; scope: any; }, client: { id: any; }, user: { id: any; }) {
    try {
      await this.ctx.model.AuthorizationCode.saveAuthorizationCode(code, client, user)
      // return {
      //   authorizationCode: code.authorizationCode,
      //   expiresAt: code.expiresAt,
      //   redirectUri: code.redirectUri,
      //   scope: code.scope,
      //   client: {
      //     id: client.id
      //   },
      //   user: {
      //     id: user.id
      //   }
      // }
    } catch (err) {
      return false
    }
  }
  async revokeAuthorizationCode(_code: any) {
    try {
      return await this.ctx.model.AuthorizationCode.delAuthorizationCode
    } catch (err) {
      return false
    }
  }

  async getRefreshToken(refreshToken: any) {
    try {
      const refToken = await this.ctx.model.RefreshToken.queryRefreshToken(refreshToken)
      if (!refToken) return
      // const user = await this.ctx.model.User.queryUser({
      //   id: refToken.userId
      // })
      // if (!user) return
      // return {
      //   refreshToken: refToken.refreshToken,
      //   refreshTokenExpiresAt: refToken.refreshTokenExpiresAt,
      //   scope: refToken.scope,
      //   client: {
      //     id: refToken.clientId
      //   }, // with 'id' property
      //   user: user
      // }
    } catch (err) {
      return false
    }
  }
}