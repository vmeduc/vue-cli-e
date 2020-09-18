import { Module } from 'vuex';

import { MessengerState } from './types';
import { RootState } from '../types';

export const messenger: Module<MessengerState, RootState> = {
  state: {
    messages: [
      {id: 1, text: 'Hello!'},
      {id: 2, text: 'World!'}
    ]
  },
  actions: {
    init() {
      alert('Hello World!');
    }
  }
};