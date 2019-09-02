/*
 * @Author: Echi
 * @Date: 2019-03-24
 * 会员表
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, STRING, TEXT, DATE } = app.Sequelize;

  const Member = app.model.define('echi_member', {
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
      comment: '用户名称'
    },

    password: {
      type: STRING(100),
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
      type: INTEGER,
      defaultValue: 2,
      comment: '性别'
    },

    genderDisplay: {
      type: STRING(10),
      defaultValue: '未知',
      comment: '性别'
    },

    birthday: {
      type: DATE,
      comment: '生日'
    },

    shoeSize: {
      type: INTEGER,
      comment: '鞋码'
    },

    seatHeight: {
      type: INTEGER,
      comment: '座椅高度'
    },

    avatar: {
      type: TEXT,
      defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg',
      comment: '用户头像'
    },
  }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      charset: 'utf8mb4'
    });

  return Member;
};
