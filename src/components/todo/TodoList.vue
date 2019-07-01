<template>
  <div>
    <h1>Todos</h1>
    <v-list>
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    </v-list>
    <h1>Dones</h1>
    <v-list>
      <todo-item v-for="done in dones" :key="done.id" :todo="done" />
    </v-list>
    <p>
      <v-text-field
        v-model="newTodo.title"
        @keydown.enter="addTodo(newTodo)"
        label="Add new todo"
        placeholder="Todo name"
        outline
      ></v-text-field>
      <v-text-field
        v-model="id"
        @keydown.enter="addTodoAsync(id)"
        label="Add todo async"
        placeholder="Todo name"
        outline
      ></v-text-field>
      <v-btn depressed @click="addTodoAsync(id)">
        <span>Add async</span>
      </v-btn>
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
