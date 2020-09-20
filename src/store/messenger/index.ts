import { Module } from 'vuex';

import { MessengerState } from './types';
import { RootState } from '../types';
import actions from './actions';

export const messenger: Module<MessengerState, RootState> = {
  namespaced: true,
  state: {
    messages: [
      {id: 1, text: 'Hello!'},
      {id: 2, text: 'World!'}
    ]
  },
  actions
};