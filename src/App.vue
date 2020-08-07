<template>
    <md-app>
      <md-app-toolbar>
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">My Title</span>
            <md-button>One</md-button>
            <md-button>Two</md-button>
            <md-button>Three</md-button>
          </div>
          <div class="md-toolbar-section-end">
            <md-button>
              <md-icon>exit_to_app</md-icon>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <div class="md-layout">
          <div class="md-layout-item">
            <md-field>
              <md-input placeholder="Write message" v-model="message"></md-input>
            </md-field>
            <md-button @click="addMessage">add</md-button>
          </div>
          <div class="md-layout-item">

            <ol>
              <!-- <li v-for="message in messages" :messages="this.messages" :key="message"></li> -->
            </ol>
          </div>
        </div>
      </md-app-content>
    </md-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    // HelloWorld
  },
  data: () => ({
    messages: [],
    message: ''
  })
});
</script>

<style lang="scss">
  .md-app {
    border: 1px solid rgba(#000, .12);
    min-height: 400px;
  }
  .md-app-toolbar {
    background-color: rgb(240, 240, 240);
  }
  .md-title {
    padding-right: 30px;
  }
  .md-field {
    border-bottom: 1px solid rgba(#000, .12);
    width: 300px;
  }
</style>
