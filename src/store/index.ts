import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";

export interface RootState {
  isShowPopup: boolean;
}

//타입 추론을 위해 추가. state밖에 적용되지 않음
export const key: InjectionKey<Store<RootState>> = Symbol();

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

export function useStore() {
  return baseUseStore(key);
}
