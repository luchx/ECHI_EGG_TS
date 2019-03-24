// This file is created by egg-ts-helper@1.24.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMember from '../../../app/service/member';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    member: ExportMember;
    test: ExportTest;
  }
}
