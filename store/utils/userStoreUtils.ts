import { userStore } from '~/store';
import { UserType } from '~/common/type/userType';
import TokenUtils from '~/common/lib/utils/tokenUtils';
import {
  StoreLoginTokenParam, StoreRefreshTokenParam,
  StoreUserNumberParam,
  StoreUserStringParam
} from '~/store/types/userStoreType';

export default class UserStoreUtils {
  static clearAll(): void {
    userStore.updateUserType(null);
    userStore.updateNonmemberPhone(null);
    userStore.updatePicksDtoJsonStr(null);

    this.updateUserAuth(StoreLoginTokenParam.of(false,undefined));
  }

  static updateUserAuth(param: StoreLoginTokenParam): void {
    console.log('vuex: updateUserAuth', param.staySignedIn);

    userStore.updateStaySignedIn(param.staySignedIn);

    userStore.updateStaySignedIn(param.staySignedIn);

    userStore.updateAccessToken(StoreUserStringParam.of(param.staySignedIn, param.auth?.access.accessToken));
    userStore.updateAccessExpiresIn(StoreUserNumberParam.of(param.staySignedIn, param.auth?.access.expiresIn));
    userStore.updateAccessExpiresAt(StoreUserNumberParam.of(param.staySignedIn, TokenUtils.toExpiresAt(param.auth?.access.expiresIn)));

    userStore.updateRefreshToken(StoreUserStringParam.of(param.staySignedIn, param.auth?.refresh.refreshToken));
    userStore.updateRefreshExpiresIn(StoreUserNumberParam.of(param.staySignedIn, param.auth?.refresh.expiresIn));
    userStore.updateRefreshExpiresAt(StoreUserNumberParam.of(param.staySignedIn, TokenUtils.toExpiresAt(param.auth?.refresh.expiresIn)));
  }

  static refreshAccessToken(param: StoreRefreshTokenParam): void {
    userStore.updateAccessToken(StoreUserStringParam.of(param.staySignedIn, param.auth?.access.refreshToken));
    userStore.updateAccessExpiresIn(StoreUserNumberParam.of(param.staySignedIn, param.auth?.access.expiresIn));
    userStore.updateAccessExpiresAt(StoreUserNumberParam.of(param.staySignedIn, TokenUtils.toExpiresAt(param.auth?.access?.expiresIn)));
  }


  static refreshTokenExpiring(): boolean {
    if (!userStore.refreshToken) {
      return true;
    }

    return TokenUtils.tokenExpiring(userStore.refreshExpiresAt);
  }
}
