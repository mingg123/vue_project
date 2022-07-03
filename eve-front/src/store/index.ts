import { addItem, deleteItem, getAllItem } from "./../API/ItemAxios";
import { createStore } from "vuex";
import { day, Item, language } from "@/types";

export interface RootState {
  showFramePopup: boolean;
  items: Item[];
  showItemPopup: boolean;
  clickedItem: Item | null;
  selectedAttendanceDay: day;
  localLang: language;
}

export default createStore<RootState>({
  state: {
    showFramePopup: false,
    items: [],
    showItemPopup: false,
    clickedItem: null,
    selectedAttendanceDay: "28",
    localLang: "ko",
  },
  getters: {
    getShowFramePopup(state): boolean {
      return state.showFramePopup;
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
    getLocalLang(state): language {
      return state.localLang;
    },
  },

  mutations: {
    SET_SHOW_FRAME_POPUP(state, open: boolean) {
      state.showFramePopup = open;
    },
    SET_ITEM(state) {
      // console.log(state);
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
    setShowFramePopup({ commit }, open) {
      commit("SET_SHOW_FRAME_POPUP", open);
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
