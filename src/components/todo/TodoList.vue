<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
    <h1>Dones</h1>
    <ul>
      <todo-item v-for="done in dones" :key="done.id" :todo="done" />
    </ul>
    <p>
      <input type="text" v-model="newTodo.title" @keydown.enter="addTodo(newTodo)" />
      <input type="text" v-model="id" @keydown.enter="addTodoAsync(id)" />
      <button @click="addTodoAsync(id)">Add async</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Mutation, Action } from 'vuex-class';
import { Todo } from '@/types/todos';
import TodoItem from './TodoItem.vue';
import { v4 } from 'uuid';

@Component({
  components: { TodoItem },
})
export default class TodoList extends Vue {
  @Prop() private msg!: string;
  @Getter private todos?: Todo[];
  @Getter private dones?: Todo[];
  @Action private addTodoAsync?: any;
  @Mutation private addTodo?: any;
  private newTodo?: Todo = {
    id: v4(),
    title: '',
    completed: false,
  };
  private id: number = 1;
}
</script>
