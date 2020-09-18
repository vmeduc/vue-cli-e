<template>
  <div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Action } from 'vuex-class';


@Component
export default class SimpleClassComponent extends Vue {
  
  @State('messenger')
  stateMessenger

  @Action('foo')
  actionFoo

  mounted() {
    console.log(this.actionFoo());
  }
}
</script>