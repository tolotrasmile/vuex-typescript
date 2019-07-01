export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface State {
  todos: Todo[];
}
