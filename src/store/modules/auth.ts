import { defineStore } from 'pinia';
import { getUserInfo, login, logout } from '@/api/base/basics/auth';
import { TOKEN_NAME } from '@/config/global';
import { store } from '@/store';

const InitUserInfo = {
  roles: [],
};

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem(TOKEN_NAME) || 'main_token', // 默认token不走权限
    userInfo: InitUserInfo,
  }),
  getters: {
    roles: (state) => {
      return state.userInfo?.roles;
    },
  },
  actions: {
    async login(userInfo: Record<string, unknown>) {
      const res = await login(userInfo);
      if (res.statusCode === '200') {
        this.token = res.data;
      } else {
        throw res;
      }
    },
    async getUserInfo() {
      const res = await getUserInfo();
      this.userInfo = res;
    },
    async logout() {
      await logout();
      localStorage.removeItem(TOKEN_NAME);
      this.token = '';
      this.userInfo = InitUserInfo;
    },
    async removeToken() {
      this.token = '';
    },
  },
});

export function getUserStore() {
  return useUserStore(store);
}
