/*
 * @Author: Echi
 * @Date: 2019-03-24
 * 会员表
 */
import { Application } from 'egg';
import { MEDIUMINT, STRING, TINYINT, DATE } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;
  const tablePrefix = sequelize.options['tablePrefix'];

  const Member = sequelize.define(tablePrefix + 'member', {
    id: {
      type: MEDIUMINT(8).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    username: {
      type: STRING(60),
      defaultValue: '',
      allowNull: false,
      unique: true,
      comment: '用户名称'
    },

    password: {
      type: STRING(32),
      allowNull: false,
      defaultValue: '',
      comment: '用户密码'
    },

    nickname: {
      type: STRING(60),
      allowNull: false,
      comment: '昵称'
    },

    phone: {
      type: STRING(20),
      allowNull: false,
      comment: '手机号码'
    },

    gender: {
      type: TINYINT(1).UNSIGNED,
      defaultValue: 2,
      comment: '性别'
    },

    gender_display: {
      type: STRING(10),
      defaultValue: '未知',
      comment: '性别'
    },

    birthday: {
      type: DATE,
      comment: '生日'
    },

    shoe_size: {
      type: TINYINT(100).UNSIGNED,
      comment: '鞋码'
    },

    seat_height: {
      type: TINYINT(10).UNSIGNED,
      comment: '座椅高度'
    },

    avatar: {
      type: STRING(255),
      defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg',
      comment: '用户头像'
    },
  }, {
      timestamps: true,
      underscored: true,  // 将驼峰式解析为下划线连接
      paranoid: true,
      freezeTableName: true,
      charset: 'utf8mb4',
      initialAutoIncrement: '14',
    });

  return Member;
};
