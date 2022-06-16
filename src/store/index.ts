import { createStore } from 'vuex';

export interface RootState {
    isShowPopup : boolean
}

export default createStore<RootState>({
    state: {
        isShowPopup : false,
    },
    getters: {
        getIsShowPopup (state) {
            return state.isShowPopup;
        }
    },
    mutations: {
        SET_SHOWSTOPPING(state, open : boolean) {
            state.isShowPopup = open
        }
    },
    actions: {
        setIsShowPopup({commit}, open) {
            commit('SET_SHOWSTOPPING', open);
        }
    }
});