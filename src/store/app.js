import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
  }),
  actions: {
    setUser(userInfo) {
      this.userInfo = userInfo;
    },
    clearUser() {
      this.userInfo = null;
    }
  }
});
