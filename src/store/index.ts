import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  count: number;
  globalLanguage: string;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    globalLanguage: "zh"
  },
  mutations: {
    changeGlobalLanguage(state, type) {
      state.globalLanguage = type;
    },
    increment(state) {
      state.count++;
    }
  }
});

export function useStore() {
  return baseUseStore(key);
}
