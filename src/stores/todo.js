import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
  }),
  getters: {
    incompleteCount: (state) => state.todos.filter(todo => !todo.completed).length,
  },
  actions: {
    addTodo(text) {
      this.todos.push({ text, completed: false });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleTodoCompletion(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
  },
});
