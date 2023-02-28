import { userStore } from '~/store';
import { UserType } from '~/common/type/userType';
import TokenUtils from '~/common/lib/utils/tokenUtils';
import {
  StoreLoginTokenParam, StoreRefreshTokenParam,
  StoreUserNumberParam,
  StoreUserStringParam
} from '~/store/types/userStoreType';

export default class UserStoreUtils {
  static updateUserAuth(param: StoreLoginTokenParam): void {
    console.log('vuex: updateUserAuth', param.staySignedIn);

    userStore.updateStaySignedIn(param.staySignedIn);

    userStore.updateAccessToken(StoreUserStringParam.of(param.staySignedIn, param.auth?.accessToken));
    userStore.updateAccessExpiresIn(StoreUserNumberParam.of(param.staySignedIn, param.auth?.expiresIn));
    userStore.updateAccessExpiresAt(StoreUserNumberParam.of(param.staySignedIn, TokenUtils.toExpiresAt(param.auth?.expiresIn)));

    userStore.updateRefreshToken(StoreUserStringParam.of(param.staySignedIn));
    userStore.updateRefreshExpiresIn(StoreUserNumberParam.of(param.staySignedIn));
    userStore.updateRefreshExpiresAt(StoreUserNumberParam.of(param.staySignedIn));
  }

  static refreshAccessToken(param: StoreRefreshTokenParam): void {
    userStore.updateAccessToken(StoreUserStringParam.of(param.staySignedIn, param.auth?.accessToken));
    userStore.updateAccessExpiresIn(StoreUserNumberParam.of(param.staySignedIn, param.auth?.expiresIn));
    userStore.updateAccessExpiresAt(StoreUserNumberParam.of(param.staySignedIn, TokenUtils.toExpiresAt(param.auth?.expiresIn)));
  }
}
