'use strict';

module.exports = () => {
  const model = {};
  model.getClient = (clientId, clientSecret, callback) => {};
  model.grantTypeAllowed = (clientId, grantType, callback) => {};
  model.getUser = (username, password, callback) => {};
  model.saveAccessToken = (accessToken, clientId, expires, user, callback) => {};
  model.getAccessToken = (bearerToken, callback) => {};
  return model;
};