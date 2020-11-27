import { Module } from 'vuex';

import { UsersState } from './types';
import { RootState } from '../types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const messenger: Module<UsersState, RootState> = {
  namespaced: true,
  state: {
    users: [],
  },
  actions,
  mutations,
  getters
};