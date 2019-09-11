import 'egg';
import Sequelize, { Model } from 'sequelize';

declare module 'egg' {
  interface Application {
    env: string;
    model: any;
    Sequelize: Sequelize
  }
}