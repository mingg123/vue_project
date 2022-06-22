import { createStore } from "vuex";
import { Item } from "@/components/types";

export interface RootState {
  isShowPopup: boolean;
  items: Item[];
}

// 타입 추론이 되지 않는 문제
// export const key: InjectionKey<Store<RootState>> = Symbol();

// export function useStore() {
//   return baseUseStore(key);
// }

export default createStore<RootState>({
  state: {
    isShowPopup: false,
    items: [],
  },
  getters: {
    getIsShowPopup(state): boolean {
      return state.isShowPopup;
    },

    getItems(state) {
      return state.items;
    },
  },
  mutations: {
    SET_SHOWSTOPPING(state, open: boolean) {
      state.isShowPopup = open;
    },
    SET_ITEM(state, item: Item) {
      state.items = [...state.items, item];
    },
  },
  actions: {
    setIsShowPopup({ commit }, open) {
      commit("SET_SHOWSTOPPING", open);
    },
    setItem({ commit }, item) {
      commit("SET_ITEM", item);
    },
  },
});
