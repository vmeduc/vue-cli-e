<template>
  <div>{{ name }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class SimpleClassComponent extends Vue {
  firstName = 'John'
  lastName = 'Doe'

  // Declared as computed property getter
  get name() {
    return this.firstName + ' ' + this.lastName
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }

  mounted() {
    console.log(this.name = 'Vlad Melekhin');
    console.log(this.name);
  }
}
</script>