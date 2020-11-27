<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-50">
      <md-field>
        <label>User</label>
        <md-select v-model="selectUser.id">
          <md-option v-for="user in users" v-bind:key="user.id" :value="user.id">
            {{user.name}}
          </md-option>
        </md-select>
      </md-field>
      <input type="button" value="clear" @click="clear">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

interface User {
  id: number;
  name?: string;
}

@Component
export default class ExpSelect extends Vue {
  private selectUser: User;
  private users: User[];

  constructor() {
    super();
    this.users = [
      {id: 1, name: 'vlad'},
      {id: 2, name: 'ivan'},
      {id: 3, name: 'fedor'},
    ];
    this.selectUser = {id: 1};
  }

  private clear() {
    if (this.selectUser)
      this.selectUser.id = -1;
  }

  @Watch('selectUser', {immediate: true})
  onSelectUserChange() {
    console.log('selectUser is changed!');
  }

}

</script>

<style>

</style>