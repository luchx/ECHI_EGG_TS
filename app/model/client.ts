/*
 * @Author: Echi
 * @Date: 2019-03-24
 * token
 */
import {
  Application
} from 'egg';
import {
  STRING
} from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;
  const tablePrefix = sequelize.options['tablePrefix'];

  const Client = sequelize.define(tablePrefix + 'client', {
    clientId: {type: STRING, unique: true},
    clientSecret: STRING, 
    redirectUri: STRING,
    grants: STRING
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    freezeTableName: true
  });

  return Client;
};
