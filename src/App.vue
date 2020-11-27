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
            <md-button class="md-icon-button">
              <md-icon>exit_to_app</md-icon>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <md-card>
          <p>hello</p>
          <p>hello</p>
        </md-card>
      </md-app-content>
    </md-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ExpSelect from '@/components/ExpSelect.vue';
import ExpTable from '@/components/ExpTable.vue';

export default Vue.extend({
  name: 'App',
  components: {
    
  }
});
</script>

<style lang="scss">
  .md-card {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .md-app {
    border: 1px solid rgba(#000, .12);
    min-height: 600px;
  } 
  // .md-title {
  //   padding-right: 30px;
  // }
  // .md-field {
  //   border-bottom: 1px solid rgba(#000, .12);
  //   width: 300px;
  // }
</style>
