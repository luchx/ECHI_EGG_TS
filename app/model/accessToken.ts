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
  DATE
} from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;
  const tablePrefix = sequelize.options['tablePrefix'];

  const AccessToken = sequelize.define(tablePrefix + 'accessToken', {
    accessToken: { type: STRING, unique: true },
    accessTokenExpiresAt: DATE,
    scope: STRING,
    clientId: STRING,
    userId: { type: STRING, allowNull: false }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true
  });

  return AccessToken;
};
