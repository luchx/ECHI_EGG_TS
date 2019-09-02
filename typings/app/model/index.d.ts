// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMember from '../../../app/model/Member';
import ExportProject from '../../../app/model/Project';

declare module 'egg' {
  interface IModel {
    Member: ReturnType<typeof ExportMember>;
    Project: ReturnType<typeof ExportProject>;
  }
}
