import { GetterTree } from "vuex";
import { RootState } from '../types';
import { MessengerState } from './types';

const getters: GetterTree<MessengerState, RootState> = {
  messages: (state) => state.messages
};

export default getters;