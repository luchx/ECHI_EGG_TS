/*
 * @Author: Echi
 * @Date: 2019-03-24
 * token
 */
import {
  Application
} from 'egg';
import {
  STRING, DATE
} from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;
  const tablePrefix = sequelize.options['tablePrefix'];

  const RefreshToken = sequelize.define(tablePrefix + 'refreshToken', {
    refreshToken: { type: STRING, unique: true },
    refreshTokenExpiresAt: DATE,
    scope: STRING,
    clientId: STRING,
    userId: { type: STRING, allowNull: false }
  }, {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      freezeTableName: true
    });

  return RefreshToken;
};