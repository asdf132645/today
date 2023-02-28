import { Store } from 'vuex';
import { initialiseStores } from '~/store/utils/storeAccessor';

const initializer = (store: Store<any>) => initialiseStores(store);

export const plugins = [initializer];
export * from '~/store/utils/storeAccessor';
