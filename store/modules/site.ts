import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { siteStore } from '~/store';

enum SiteKey {
  visited = 'visited',
  nativeAppType = 'native_app_type',
  nativeAppVersion = 'native_app_version',
}

export enum NativeAppType {
  iosNative = 'iosNative',
  androidNative = 'androidNative'
}

@Module({
  name: 'modules/site',
  namespaced: true,
  stateFactory: true
})
export default class SiteModule extends VuexModule {
  //
  // 로그인
  //
  private _shouldLogin = false;
  private _pathAfterLogin: string | null = null;
  private _pathBeforeLogin: string | null = null;

  get shouldLogin() : boolean {
    return this._shouldLogin;
  }

  @Mutation
  public setShouldLogin(shouldLogin: boolean): void {
    this._shouldLogin = shouldLogin;
  }

  @Action
  public updateShouldLogin(shouldLogin: boolean): void {
    this.context.commit('setShouldLogin', shouldLogin);
  }


  //
  // 로그인 후 이동할 경로
  //

  @Mutation
  public setPathAfterLogin(path: string | null): void {
    this._pathAfterLogin = path;
  }

  get pathAfterLogin() : string | null {
    return this._pathAfterLogin;
  }

  @Action
  public updatePathAfterLogin(path: string | null): void {
    this.context.commit('setPathAfterLogin', path);
  }

  //
  // 로그인 전 경로
  //

  @Mutation
  public setPathBeforeLogin(path: string | null): void {
    this._pathBeforeLogin = path;
  }

  get pathBeforeLogin() : string | null {
    return this._pathBeforeLogin;
  }

  @Action
  public updatePathBeforeLogin(path: string | null): void {
    this.context.commit('setPathBeforeLogin', path);
  }

  //
  // Native App Type
  //
  _nativeAppType: NativeAppType | null = null;

  get nativeAppType(): NativeAppType | null {
    if (this._nativeAppType != null) {
      return this._nativeAppType;
    }

    const nativeAppTypeString = localStorage.getItem(SiteKey.nativeAppType);
    // @ts-ignore
    const nativeAppType: NativeAppType | null = nativeAppTypeString ? NativeAppType[nativeAppTypeString] : null;

    if (nativeAppType) {
      siteStore.updateNativeAppType(nativeAppType);
    }

    return nativeAppType;
  }

  @Mutation
  setNativeAppType(appType: NativeAppType | null): void {
    this._nativeAppType = appType;

    if (appType) {
      sessionStorage.setItem(SiteKey.nativeAppType, appType);
    } else {
      sessionStorage.removeItem(SiteKey.nativeAppType);
    }
  }

  @Action
  updateNativeAppType(appType: NativeAppType | null): void {
    this.context.commit('setNativeAppType', appType);
  }

  //
  // Native App Version
  //
  _nativeAppVersion: string | null = null;

  get nativeAppVersion(): string | null {
    if (this._nativeAppVersion != null) {
      return this._nativeAppVersion;
    }

    const nativeAppVersion = localStorage.getItem(SiteKey.nativeAppVersion);

    if (nativeAppVersion) {
      siteStore.updateNativeAppVersion(nativeAppVersion);
    }

    return nativeAppVersion;
  }

  @Mutation
  setNativeAppVersion(version: string | null): void {
    this._nativeAppVersion = version;

    if (version) {
      sessionStorage.setItem(SiteKey.nativeAppVersion, version);
    } else {
      sessionStorage.removeItem(SiteKey.nativeAppVersion);
    }
  }

  @Action
  updateNativeAppVersion(version: string | null): void {
    this.context.commit('setNativeAppVersion', version);
  }

}
