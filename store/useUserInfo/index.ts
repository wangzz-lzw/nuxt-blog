import { defineStore } from "pinia";

export const useUserInfo = defineStore("userInfo", {
  state: () => ({
    userInfo: {} as any,
  }),
  actions: {
    getUserInfo() {
      const supabase = useSupabaseClient();
    },
    setUserInfo(userInfo: any) {
      this.userInfo = { ...userInfo };
    },
  },
});
