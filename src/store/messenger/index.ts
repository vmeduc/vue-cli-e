import { Module } from 'vuex';

import { MessengerState } from './types';
import { RootState } from '../types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const messenger: Module<MessengerState, RootState> = {
  namespaced: true,
  state: {
    messages: []
  },
  actions,
  mutations,
  getters
};