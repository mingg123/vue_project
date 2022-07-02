import { addItem, deleteItem, getAllItem } from "./../API/ItemAxios";
import { createStore } from "vuex";
import { day, Item, languageJson } from "@/types";

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
    async getItems(state): Promise<Item[]> {
      state.items = await getAllItem();
      return state.items;
    },
    getShowItemPopup(state): boolean {
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
    SET_ITEM(state) {
      console.log(state);
    },
    async REMOVE_ITEM(state, items: Item[]) {
      state.items = items;
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
    async setItem({ commit }, item) {
      await addItem(item);
      commit("SET_ITEM");
    },
    async removeItem({ commit }, id) {
      const newItem = await deleteItem(id);
      commit("REMOVE_ITEM", newItem);
      return newItem;
    },
    setShowItemPopup({ commit }, open) {
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
