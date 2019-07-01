<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="todo.completed"></v-checkbox>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{todo.title}}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Todo } from '@/types/todos';

@Component
export default class TodoItem extends Vue {
  @Prop() private todo?: Todo;
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>

