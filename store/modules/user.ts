import {
  Action, Module, Mutation, VuexModule
} from 'vuex-module-decorators';
// eslint-disable-next-line import/no-cycle
import { userStore } from '~/store';
import { StoreUserNumberParam, StoreUserStringParam } from '~/store/types/userStoreType';
import { UserType } from '~/common/type/userType';

export enum UserKey {
  accessToken = 'accessToken', accessExpiresIn = 'accessExpiresIn', accessExpiresAt = 'accessExpiresAt',
  refreshToken = 'refreshToken', refreshExpiresIn = 'refreshExpiresIn', refreshExpiresAt = 'refreshExpiresAt',
  staySignedIn = 'staySignedIn', userType = 'userType', nonmemberPhone = 'nonmemberPhone',
  picksDtoJsonStr = 'picksDtoJsonStr',
  userId = 'userId',
  refreshTokentwo = 'refreshToken',
}

@Module({
  name: 'modules/user',
  namespaced: true,
  stateFactory: true,
})
export default class UserModule extends VuexModule {
  _accessToken: string | null = null;

  _accessExpiresIn: number | null = null;

  _accessExpiresAt: number | null = null;

  _refreshToken: string | null = null;

  _refreshExpiresIn: number | null = null;

  _refreshExpiresAt: number | null = null;

  _staySignedIn: boolean | null = null;

  _userType: UserType | null = null;

  _nonmemberPhone: string | null = null;

  _picksDtoJsonStr: string | null = null;

  _userId: string | null = null;

  _refreshTokentwo: string | null = null;

  //
  // Access Token
  //

  get accessToken(): string | null {
    const shouldStaySignedIn = this.staySignedIn;
    const storage = shouldStaySignedIn ? localStorage : sessionStorage;

    if (this._accessToken) {
      return this._accessToken;
    }

    const accessToken = storage.getItem(UserKey.accessToken);
    if (accessToken) {
      userStore.updateAccessToken(StoreUserStringParam.of(shouldStaySignedIn, accessToken));
      return accessToken;
    }

    return null;
  }

  @Mutation
  setAccessToken(param: StoreUserStringParam): void {
    const storage = param.staySignedIn ? localStorage : sessionStorage;

    this._accessToken = param.value ?? null;
    if (this._accessToken) {
      console.log('set access token');
      storage.setItem(UserKey.accessToken, this._accessToken);
    } else {
      console.log('clear access token');
      storage.removeItem(UserKey.accessToken);
    }

    const storageOp = param.staySignedIn ? sessionStorage : localStorage;
    storageOp.removeItem(UserKey.accessToken);
  }

  @Action ({ rawError: true })
  updateAccessToken(param: StoreUserStringParam): void {
    this.context.commit('setAccessToken', param);
  }

  get accessExpiresIn(): number | null {
    const shouldStaySignedIn = this.staySignedIn;
    const storage = shouldStaySignedIn ? localStorage : sessionStorage;

    if (this._accessExpiresIn) {
      return this._accessExpiresIn;
    }

    const accessExpiresInStr = storage.getItem(UserKey.accessExpiresIn);
    if (accessExpiresInStr) {
      const accessExpiresIn = parseInt(accessExpiresInStr, 10);
      userStore.updateAccessExpiresIn(StoreUserNumberParam.of(shouldStaySignedIn, accessExpiresIn));
      return accessExpiresIn;
    }

    return null;
  }

  @Mutation
  setAccessExpiresIn(param: StoreUserNumberParam): void {
    const storage = param.staySignedIn ? localStorage : sessionStorage;

    this._accessExpiresIn = param.value ?? null;
    if (this._accessExpiresIn) {
      storage.setItem(UserKey.accessExpiresIn, this._accessExpiresIn.toString());
    } else {
      storage.removeItem(UserKey.accessExpiresIn);
    }

    const storageOp = param.staySignedIn ? sessionStorage : localStorage;
    storageOp.removeItem(UserKey.accessExpiresIn);
  }

  @Action ({ rawError: true })
  updateAccessExpiresIn(param: StoreUserNumberParam): void {
    this.context.commit('setAccessExpiresIn', param);
  }

  get accessExpiresAt(): number | null {
    const shouldStaySignedIn = this.staySignedIn ?? false;
    const storage = shouldStaySignedIn ? localStorage : sessionStorage;

    if (this._accessExpiresAt) {
      return this._accessExpiresAt;
    }

    const accessExpiresAtStr = storage.getItem(UserKey.accessExpiresAt);
    if (accessExpiresAtStr) {
      const accessExpiresAt = parseInt(accessExpiresAtStr, 10);
      userStore.updateAccessExpiresAt(StoreUserNumberParam.of(shouldStaySignedIn, accessExpiresAt));
      return accessExpiresAt;
    }

    return null;
  }

  @Mutation
  setAccessExpiresAt(param: StoreUserNumberParam): void {
    const storage = param.staySignedIn ? localStorage : sessionStorage;

    this._accessExpiresAt = param.value ?? null;
    if (this._accessExpiresAt) {
      storage.setItem(UserKey.accessExpiresAt, this._accessExpiresAt.toString());
    } else {
      storage.removeItem(UserKey.accessExpiresAt);
    }

    const storageOp = param.staySignedIn ? sessionStorage : localStorage;
    storageOp.removeItem(UserKey.accessExpiresAt);
  }

  @Action ({ rawError: true })
  updateAccessExpiresAt(param: StoreUserNumberParam): void {
    this.context.commit('setAccessExpiresAt', param);
  }

  //
  // Refresh Token
  //

  get refreshToken(): string | null {
    const shouldStaySignedIn = this.staySignedIn ?? false;
    const storage = shouldStaySignedIn ? localStorage : sessionStorage;

    if (this._refreshToken) {
      return this._refreshToken;
    }

    const refreshToken = storage.getItem(UserKey.refreshToken);
    if (refreshToken) {
      userStore.updateRefreshToken(StoreUserStringParam.of(shouldStaySignedIn, refreshToken));
      return refreshToken;
    }

    return null;
  }

  @Mutation
  setRefreshToken(param: StoreUserStringParam): void {
    const storage = param.staySignedIn ? localStorage : sessionStorage;

    this._refreshToken = param.value ?? null;
    if (this._refreshToken) {
      storage.setItem(UserKey.refreshToken, this._refreshToken);
    } else {
      storage.removeItem(UserKey.refreshToken);
    }

    const storageOp = param.staySignedIn ? sessionStorage : localStorage;
    storageOp.removeItem(UserKey.refreshToken);
  }

  @Action ({ rawError: true })
  updateRefreshToken(param: StoreUserStringParam): void {
    this.context.commit('setRefreshToken', param);
  }

  get refreshExpiresIn(): number | null {
    const shouldStaySignedIn = this.staySignedIn ?? false;
    const storage = shouldStaySignedIn ? localStorage : sessionStorage;

    if (this._refreshExpiresIn) {
      return this._refreshExpiresIn;
    }

    const refreshExpiresInStr = storage.getItem(UserKey.refreshExpiresIn);
    if (refreshExpiresInStr) {
      const refreshExpiresIn = parseInt(refreshExpiresInStr, 10);
      userStore.updateRefreshExpiresIn(StoreUserNumberParam.of(shouldStaySignedIn, refreshExpiresIn));
      return refreshExpiresIn;
    }

    return null;
  }

  @Mutation
  setRefreshExpiresIn(param: StoreUserNumberParam): void {
    const storage = param.staySignedIn ? localStorage : sessionStorage;

    this._refreshExpiresIn = param.value ?? null;
    if (this._refreshExpiresIn) {
      storage.setItem(UserKey.refreshExpiresIn, this._refreshExpiresIn.toString());
    } else {
      storage.removeItem(UserKey.refreshExpiresIn);
    }

    const storageOp = param.staySignedIn ? sessionStorage : localStorage;
    storageOp.removeItem(UserKey.refreshExpiresIn);
  }

  @Action ({ rawError: true })
  updateRefreshExpiresIn(param: StoreUserNumberParam): void {
    this.context.commit('setRefreshExpiresIn', param);
  }

  get refreshExpiresAt(): number | null {
    const shouldStaySignedIn = this.staySignedIn ?? false;
    const storage = shouldStaySignedIn ? localStorage : sessionStorage;

    if (this._refreshExpiresAt) {
      return this._refreshExpiresAt;
    }

    const refreshExpiresAtStr = storage.getItem(UserKey.refreshExpiresAt);
    if (refreshExpiresAtStr) {
      const refreshExpiresAt = parseInt(refreshExpiresAtStr, 10);
      userStore.updateRefreshExpiresAt(StoreUserNumberParam.of(shouldStaySignedIn, refreshExpiresAt));
      return refreshExpiresAt;
    }

    return null;
  }

  @Mutation
  setRefreshExpiresAt(param: StoreUserNumberParam): void {
    const storage = param.staySignedIn ? localStorage : sessionStorage;

    this._refreshExpiresAt = param.value ?? null;
    if (this._refreshExpiresAt) {
      storage.setItem(UserKey.refreshExpiresAt, this._refreshExpiresAt.toString());
    } else {
      storage.removeItem(UserKey.refreshExpiresAt);
    }

    const storageOp = param.staySignedIn ? sessionStorage : localStorage;
    storageOp.removeItem(UserKey.refreshExpiresAt);
  }

  @Action ({ rawError: true })
  updateRefreshExpiresAt(param: StoreUserNumberParam): void {
    this.context.commit('setRefreshExpiresAt', param);
  }

  //
  // Stay signed in
  //
  get staySignedIn(): boolean {
    if (this._staySignedIn != null) {
      return this._staySignedIn;
    }

    const shouldStaySignedIn = localStorage.getItem(UserKey.staySignedIn);
    if (shouldStaySignedIn) {
      userStore.updateStaySignedIn(shouldStaySignedIn === 'true');
    }

    return shouldStaySignedIn ? shouldStaySignedIn === 'true' : false;
  }

  @Mutation
  setStaySignedIn(staySignedIn: boolean): void {
    console.log('vuex: setStaySignedIn: ', staySignedIn);

    this._staySignedIn = staySignedIn;

    localStorage.setItem(UserKey.staySignedIn, staySignedIn ? 'true' : 'false');
  }

  @Action ({ rawError: true })
  updateStaySignedIn(staySignedIn: boolean): void {
    this.context.commit('setStaySignedIn', staySignedIn);
  }

  //
  // User Type
  //
  get userType(): UserType | null {
    if (this._userType != null) {
      return this._userType;
    }

    const userTypeStr = localStorage.getItem(UserKey.userType);
    if (userTypeStr) {
      const userType = userTypeStr as UserType;
      userStore.updateUserType(userType);

      return userType;
    }

    return null;
  }

  @Mutation
  setUserType(userType: UserType | null): void {
    console.log('vuex: setUserType: ', userType);

    this._userType = userType;

    if (userType) {
      localStorage.setItem(UserKey.userType, userType as string);
    } else {
      localStorage.removeItem(UserKey.userType);
    }
  }

  @Action ({ rawError: true })
  updateUserType(userType: UserType | null): void {
    this.context.commit('setUserType', userType);
  }

  //
  // Nonmember Phone
  //
  get nonmemberPhone(): string | null {
    if (this._nonmemberPhone != null) {
      return this._nonmemberPhone;
    }

    const nonmemberPhone = sessionStorage.getItem(UserKey.nonmemberPhone);
    if (nonmemberPhone) {
      userStore.updateNonmemberPhone(nonmemberPhone);
    }

    return nonmemberPhone;
  }

  @Mutation
  setNonmemberPhone(phone: string | null): void {
    console.log('vuex: setNonmemberPhone: ', phone);

    this._nonmemberPhone = phone;

    if (phone) {
      sessionStorage.setItem(UserKey.nonmemberPhone, phone);
    } else {
      sessionStorage.removeItem(UserKey.nonmemberPhone);
    }
  }

  @Action ({ rawError: true })
  updateNonmemberPhone(phone: string | null): void {
    this.context.commit('setNonmemberPhone', phone);
  }

  //
  // Personal Picks Dto Json String
  //
  get picksDtoJsonStr(): string | null {
    if (this._picksDtoJsonStr != null) {
      return this._picksDtoJsonStr;
    }

    const picksDtoJson = sessionStorage.getItem(UserKey.picksDtoJsonStr);
    if (picksDtoJson) {
      userStore.updatePicksDtoJsonStr(picksDtoJson);
    }

    return picksDtoJson;
  }

  @Mutation
  setPicksDtoJsonStr(jsonStr: string | null): void {
    this._picksDtoJsonStr = jsonStr;

    if (jsonStr) {
      sessionStorage.setItem(UserKey.picksDtoJsonStr, jsonStr);
    } else {
      sessionStorage.removeItem(UserKey.picksDtoJsonStr);
    }
  }

  @Action ({ rawError: true })
  updatePicksDtoJsonStr(jsonStr: string | null): void {
    this.context.commit('setPicksDtoJsonStr', jsonStr);
  }

  //
  // userId
  //
  get userId(): string | null {
    if (this._userId != null) {
      return this._userId;
    }

    const userId = sessionStorage.getItem(UserKey.userId);
    if (userId) {
      userStore.updateUserIdStr(userId);
    }

    return userId;
  }

  @Mutation
  setUserIdStr(userId: string | null): void {
    this._userId = userId;

    if (userId) {
      sessionStorage.setItem(UserKey.userId, userId);
    } else {
      sessionStorage.removeItem(UserKey.userId);
    }
  }

  @Action ({ rawError: true })
  updateUserIdStr(userId: string | null): void {
    this.context.commit('setUserIdStr', userId);
  }

  //
  // 리프레시토큰
  //
  get refreshTokentwo(): string | null {
    if (this._refreshTokentwo != null) {
      return this._refreshTokentwo;
    }

    const refreshTokentwo = sessionStorage.getItem(UserKey.refreshTokentwo);
    if (refreshTokentwo) {
      userStore.updateRefreshTokenStr(refreshTokentwo);
    }

    return refreshTokentwo;
  }

  @Mutation
  setRefreshTokenStr(refreshTokentwo: string | null): void {
    this._refreshTokentwo = refreshTokentwo;

    if (refreshTokentwo) {
      sessionStorage.setItem(UserKey.refreshTokentwo, refreshTokentwo);
    } else {
      sessionStorage.removeItem(UserKey.refreshTokentwo);
    }
  }

  @Action ({ rawError: true })
  updateRefreshTokenStr(refreshTokentwo: string | null): void {
    this.context.commit('setRefreshTokenStr', refreshTokentwo);
  }
}
