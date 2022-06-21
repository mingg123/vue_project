import { createStore } from "vuex";

export interface RootState {
  isShowPopup: boolean;
}

// 타입 추론이 되지 않는 문제
// export const key: InjectionKey<Store<RootState>> = Symbol();

// export function useStore() {
//   return baseUseStore(key);
// }

export default createStore<RootState>({
  state: {
    isShowPopup: false,
  },
  getters: {
    getIsShowPopup(state): boolean {
      return state.isShowPopup;
    },
  },
  mutations: {
    SET_SHOWSTOPPING(state, open: boolean) {
      state.isShowPopup = open;
    },
  },
  actions: {
    setIsShowPopup({ commit }, open) {
      commit("SET_SHOWSTOPPING", open);
    },
  },
});
