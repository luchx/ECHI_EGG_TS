// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportMember from '../../../app/controller/member';
import ExportProject from '../../../app/controller/project';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    member: ExportMember;
    project: ExportProject;
  }
}
