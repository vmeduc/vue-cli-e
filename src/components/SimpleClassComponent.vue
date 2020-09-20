<template>
  <div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Action } from 'vuex-class';

// const namespace = "messenger";

@Component
export default class SimpleClassComponent extends Vue {
  
  @State('messenger')
  stateMessenger;

  @Action('test', { namespace: "messenger" })
  actionFoo: any;

  mounted() {
    this.actionFoo();
  }
}
</script>