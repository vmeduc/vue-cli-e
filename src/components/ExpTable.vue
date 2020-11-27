<template>
  <div>
    <md-table v-model="tableData" md-sort="name" md-sort-order="asc">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">
          {{item.name}}
        </md-table-cell>
        <md-table-cell md-label="Description" md-sort-by="description">
          {{item.description}}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

interface MessageTypeItem {
  id: number;
  name: string;
  description: string;
}

@Component
export default class MessageTypes extends Vue {

  private tableFields = ["name", "description"];

  get tableFieldsActive() {
    return this.tableFields;
  }

  private tableData: MessageTypeItem[] = [
    {id: 1, name: 'type1', description: 'descr1'},
    {id: 2, name: 'type2', description: 'descr2'}
  ];
}
</script>

<style>
</style>