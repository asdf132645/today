import { siteStore } from '~/store';
import { NativeAppType } from '~/store/modules/site';
import RouterUtils from "~/common/lib/routerUtils";

export default class SiteStoreUtils {
  static loginAndMoveTo(path: string): void {
    this.loginMoveToIfNeeded(path);
  }

  static justLogin(): void {
    this.loginMoveToIfNeeded(null);
  }

  static cancelLogin(): void {
    siteStore.updateShouldLogin(false);
  }

  static loginDone(): void {
    siteStore.updateShouldLogin(false);
  }

  private static loginMoveToIfNeeded(path: string | null): void {
    // siteStore.updateShouldLogin(true);
    // siteStore.updatePathAfterLogin(path);
    // siteStore.updatePathBeforeLogin(window.$nuxt.$route.fullPath);
    if (path != null) {
      RouterUtils.goTo(path);
    }
  }

  static setNativeAppProfile(appType: NativeAppType, version: string): void {
    siteStore.updateNativeAppType(appType);
    siteStore.updateNativeAppVersion(version);
  }
}
