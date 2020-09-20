// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTodo from '../../../app/model/todo';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Todo: ReturnType<typeof ExportTodo>;
    User: ReturnType<typeof ExportUser>;
  }
}
