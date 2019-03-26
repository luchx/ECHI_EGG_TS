// This file is created by egg-ts-helper@1.24.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccesstoken from '../../../app/service/accesstoken';
import ExportAuthorizationCode from '../../../app/service/authorizationCode';
import ExportClient from '../../../app/service/client';
import ExportMember from '../../../app/service/member';
import ExportRefreshToken from '../../../app/service/refreshToken';

declare module 'egg' {
  interface IService {
    accesstoken: ExportAccesstoken;
    authorizationCode: ExportAuthorizationCode;
    client: ExportClient;
    member: ExportMember;
    refreshToken: ExportRefreshToken;
  }
}
