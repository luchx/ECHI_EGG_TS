/*
 * @Author: Echi
 * @Date: 2019-03-31
 * 课程表
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { STRING, FLOAT, BOOLEAN, TEXT, INTEGER, DATE } = app.Sequelize;

  const Project = app.model.define('echi_project', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    time: {
      type: DATE,
      comment: '上课时间'
    },

    coachName: {
      type: STRING(10),
      comment: '教练名称'
    },

    coachAvatar: {
      type: TEXT,
      defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg',
      comment: '教练头像'
    },

    price: {
      type: FLOAT,
      comment: '价格'
    },

    memberPrice: {
      type: FLOAT,
      comment: '会员价格'
    },

    duration: {
      type: STRING,
      comment: '上课时长'
    },

    startTime: {
      type: DATE,
      comment: '开始时间'
    },

    endtime: {
      type: DATE,
      comment: '结束时间'
    },

    isHot: {
      type: BOOLEAN,
      allowNull: false, 
      defaultValue: false,
      comment: '是否热门课程'
    },

    leftSeat: {
      type: INTEGER,
      comment: '剩余座位'
    }
  }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      charset: 'utf8mb4'
    });

  return Project;
};
