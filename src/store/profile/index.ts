import { Module } from 'vuex';
import { getters } from './getteers';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from './types';
import { RootState } from '@/globaltypes';

export const state: ProfileState = {
  user: undefined,
  error: false
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};