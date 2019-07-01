<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{todo.title}}</li>
    </ul>
    <h1>Dones</h1>
    <ul>
      <li v-for="done in dones" :key="done.id">{{done.title}}</li>
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
import { Todo } from '../types/todos';
import { v4 } from 'uuid';

@Component
export default class HelloWorld extends Vue {
  private newTodo?: Todo = {
    id: v4(),
    title: '',
    completed: false,
  };
  private id: number = 1;
  @Prop() private msg!: string;
  @Getter private todos?: Todo[];
  @Getter private dones?: Todo[];
  @Action private addTodoAsync?: any;
  @Mutation private addTodo?: any;
}
</script>
