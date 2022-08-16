import { createPinia } from 'pinia';

const store = createPinia();

export { store };

export * from './modules/notification';
export * from './modules/permission';
export * from './modules/auth';
export * from './modules/setting';
export * from './modules/tabs-router';

export default store;
