/*
 * @Author: Echi
 * @Date: 2019-03-24
 * 会员表
 */
import { Application } from 'egg';
import { MEDIUMINT, STRING, TINYINT, INTEGER } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;

  const Member = sequelize.define('user', {
    id: {
      type: MEDIUMINT(8).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    username: {
      type: STRING(60),
      allowNull: false,
      defaultValue: '',
      unique: true,
    },

    password: {
      type: STRING(32),
      allowNull: false,
      defaultValue: '',
    },

    gender: {
      type: TINYINT(1).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },

    birthday: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },

    register_time: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },

    last_login_time: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },

    last_login_ip: {
      type: STRING(15),
      allowNull: false,
      defaultValue: '',
    },

    user_level_id: {
      type: TINYINT(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },

    nickname: {
      type: STRING(60),
      allowNull: false,
    },

    mobile: {
      type: STRING(20),
      allowNull: false,
    },

    register_ip: {
      type: STRING(45),
      allowNull: false,
      defaultValue: '',
    },

    avatar: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },

    weixin_openid: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
    },
  }, {
      timestamps: false,
      charset: 'utf8mb4',
      initialAutoIncrement: '14',
    });

  return Member;
};
