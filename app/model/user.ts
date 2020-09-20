/*
 * @Author: Echi
 * @Date: 2019-03-24
 * 会员表
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;

  const User = app.model.define('db_user', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    username: {
      type: STRING(60),
      defaultValue: '',
      allowNull: false,
      unique: true,
      comment: '用户名称',
    },

    password: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
      comment: '用户密码',
    },

    description: {
      type: TEXT,
      defaultValue: '',
      comment: "用户描述"
    },

    phone: {
      type: STRING(20),
      allowNull: false,
      comment: '手机号码',
    },

    sex: {
      type: INTEGER,
      defaultValue: 2,
      comment: '性别',
    },

    avatar: {
      type: TEXT,
      defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg',
      comment: '用户头像',
    },
  }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      charset: 'utf8mb4',
    });

  return User;
};
