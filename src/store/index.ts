import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { messenger } from './messenger';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '0.1'
  },
  actions: {
    foo() {
      alert('hello world!');
    }
  },
  modules: {
    messenger
  }
};

export default new Vuex.Store<RootState>(store);