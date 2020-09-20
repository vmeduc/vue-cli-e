import { ActionTree } from 'vuex';
import { MessengerState } from './types';
import { RootState } from '../types';


const actions: ActionTree<MessengerState, RootState> = {
    test() {
        window.alert("from messenger!");
    }
};

export default actions;