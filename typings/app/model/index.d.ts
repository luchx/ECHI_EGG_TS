// This file is created by egg-ts-helper@1.24.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccessToken from '../../../app/model/accessToken';
import ExportAuthorizationCode from '../../../app/model/authorizationCode';
import ExportClient from '../../../app/model/client';
import ExportMember from '../../../app/model/member';
import ExportRefreshToken from '../../../app/model/refreshToken';

declare module 'sequelize' {
  interface Sequelize {
    AccessToken: ReturnType<typeof ExportAccessToken>;
    AuthorizationCode: ReturnType<typeof ExportAuthorizationCode>;
    Client: ReturnType<typeof ExportClient>;
    Member: ReturnType<typeof ExportMember>;
    RefreshToken: ReturnType<typeof ExportRefreshToken>;
  }
}
