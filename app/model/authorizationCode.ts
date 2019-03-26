/*
 * @Author: Echi
 * @Date: 2019-03-24
 * token
 */
import {
  Application
} from 'egg';
import {
  STRING,
  DATE,
  INTEGER
} from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;
  const tablePrefix = sequelize.options['tablePrefix'];

  const AuthorizationCode = sequelize.define(tablePrefix + 'authorization_code', {
    code: STRING,
    expiresAt: DATE,
    redirectUri: STRING,
    scope: STRING,
    clientId: STRING,
    userId: { type: INTEGER, allowNull: false }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true
  });

  return AuthorizationCode;
};
