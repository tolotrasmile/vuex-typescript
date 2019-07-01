<template>
  <li>
    <input type="checkbox" name v-model="todo.completed" />
    {{todo.title}}
  </li>
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

