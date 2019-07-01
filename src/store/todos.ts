import { Todo } from './../types/todos';
import { State } from '../types/todos';
import { v4 } from 'uuid';
import { GetterTree, MutationTree, ActionTree } from 'vuex';

export const state: State = {
  todos: [
    { id: v4(), title: 'Setting up', completed: false },
    { id: v4(), title: 'Add `id` field', completed: true },
  ],
};

export const getters: GetterTree<State, any> = {
  todos: (s) => s.todos.filter((t) => !t.completed),
  dones: (s) => s.todos.filter((t) => t.completed),
};

export const mutations: MutationTree<State> = {
  addTodo(context, newTodo) {
    const todo: Todo = { ...newTodo };
    context.todos.push(todo);
  },
};

export const actions: ActionTree<State, any> = {
  async addTodoAsync(context, id) {
    try {
      const url = 'https://jsonplaceholder.typicode.com/todos/' + id;
      const response = await fetch(url).then((res) => res.json());
      const todo: Todo = {
        id: v4(),
        title: response.title,
        completed: false,
      };
      context.commit('addTodo', todo);
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.error(error);
    }
  },
};

export const todos = {
  state,
  getters,
  mutations,
  actions,
};
