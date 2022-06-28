import { createStore } from "vuex";
import { day, Item, languageJson } from "@/components/types";

export interface RootState {
  isShowPopup: boolean;
  items: Item[];
  showItemPopup: boolean;
  clickedItem: Item | null;
  selectedAttendanceDay: day;
  localLang: languageJson;
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
    showItemPopup: false,
    clickedItem: null,
    selectedAttendanceDay: "28",
    localLang: "ko",
  },
  getters: {
    getIsShowPopup(state): boolean {
      return state.isShowPopup;
    },
    getItems(state): Item[] {
      return state.items;
    },
    getItemPopup(state): boolean {
      return state.showItemPopup;
    },
    getClickedItem(state): Item {
      return state.clickedItem as Item;
    },
    getSelectedAttedanceDay(state): day {
      return state.selectedAttendanceDay;
    },
    getLocalLang(state): languageJson {
      return state.localLang;
    },
  },
  mutations: {
    SET_SHOWSTOPPING(state, open: boolean) {
      state.isShowPopup = open;
    },
    SET_ITEM(state, item: Item) {
      state.items = [...state.items, item];
    },
    REMOVE_ITEM(state, id: string) {
      state.items = state.items.filter(item => item.id !== id);
    },
    SET_ITEM_POPUP(state, open: boolean) {
      state.showItemPopup = open;
    },
    SET_CLICKED_ITEM(state, item: Item) {
      state.clickedItem = item;
    },
    SET_SELECTED_ATTENDANCE_DAY(state, day: day) {
      state.selectedAttendanceDay = day;
    },
    SET_LOCAL_LANG(state, lang) {
      state.localLang = lang;
    },
  },
  actions: {
    setIsShowPopup({ commit }, open) {
      commit("SET_SHOWSTOPPING", open);
    },
    setItem({ commit }, item) {
      commit("SET_ITEM", item);
    },
    removeItem({ commit }, index) {
      commit("REMOVE_ITEM", index);
    },
    setItemPopup({ commit }, open) {
      commit("SET_ITEM_POPUP", open);
    },
    setClickedItem({ commit }, item) {
      commit("SET_CLICKED_ITEM", item);
    },
    setSelectedAttedanceDay({ commit }, day) {
      commit("SET_SELECTED_ATTENDANCE_DAY", day);
    },
    setLocalLang({ commit }, lang) {
      commit("SET_LOCAL_LANG", lang);
    },
  },
});
