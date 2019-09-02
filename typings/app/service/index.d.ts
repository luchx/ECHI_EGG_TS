// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMember from '../../../app/service/member';
import ExportProject from '../../../app/service/project';

declare module 'egg' {
  interface IService {
    member: ExportMember;
    project: ExportProject;
  }
}
