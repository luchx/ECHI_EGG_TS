// This file is created by egg-ts-helper@1.24.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMember from '../../../app/model/member';

declare module 'sequelize' {
  interface Sequelize {
    Member: ReturnType<typeof ExportMember>;
  }
}
