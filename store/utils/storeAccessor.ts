import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
// @ts-ignore
import user from '~/store/modules/user';
import site from '~/store/modules/site';

// eslint-disable-next-line import/no-mutable-exports
let userStore: user;

// eslint-disable-next-line import/no-mutable-exports
let siteStore: site;

function initialiseStores(store: Store<any>): void {
  userStore = getModule(user, store);
}

export { initialiseStores, userStore, siteStore };


