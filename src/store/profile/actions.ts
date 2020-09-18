import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '@/globaltypes';


export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    // axios({
    //   url: 'https://....'
    // }).then((response) => {
    //   const payload: User = response && response.data;
    //   commit('profileLoaded', payload);
    // }, (error) => {
    //   console.log(error);
    //   commit('profileError');
    // });
    let payload: User = {
      email: 'user@mail.com',
      firstName: 'Vlad',
      lastName: 'Melekhin',
      phone: '+7(981)851-24-59'
    };
    console.log(`fetchData: ${payload}`);
    commit('profileLoaded', payload);
  }
};