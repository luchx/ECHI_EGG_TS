// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMember from '../../../app/service/Member';
import ExportProject from '../../../app/service/Project';

declare module 'egg' {
  interface IService {
    member: ExportMember;
    project: ExportProject;
  }
}
