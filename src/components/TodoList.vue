<template>
  <div class="todo-container" style="background-color: #ffe6f1;">
    <h1 style="color: #ff0099;">Todo List - [ Ranti Putri Nian ]</h1>
    <div class="input-container">
      <input v-model="newTodoText" @keyup.enter="addTodo" placeholder="Add a new task" style="border: 1px solid #ff0099;" />
      <button @click="addTodo" style="background-color: #ff0099;">Add</button>
    </div>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index" class="todo-item" style="border-bottom: 1px solid #ff3399;">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodoCompletion(index)" style="margin-right: 10px;" />
        <span :class="{ completed: todo.completed }" style="color: #ff0099;">{{ todo.text }}</span>
        <button @click="removeTodo(index)" class="delete-button" style="background-color: #ff0066;">Delete</button>
      </li>
    </ul>
    <p style="color: #ff0099;">Incomplete tasks: {{ incompleteCount }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTodoStore } from '../stores/todo';

const todoStore = useTodoStore();

const newTodoText = ref('');

const addTodo = () => {
  if (newTodoText.value.trim()) {
    todoStore.addTodo(newTodoText.value);
    newTodoText.value = '';
  }
};

const removeTodo = (index) => {
  todoStore.removeTodo(index);
};

const toggleTodoCompletion = (index) => {
  todoStore.toggleTodoCompletion(index);
};

const todos = computed(() => todoStore.todos);
const incompleteCount = computed(() => todoStore.incompleteCount);
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ff3399;
  border-radius: 5px 0 0 5px;
  outline: none;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

button:hover {
  background-color: #ff0066;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item input[type="checkbox"] {
  margin-right: 10px;
}

.todo-item .completed {
  text-decoration: line-through;
  color: #888;
}

.delete-button {
  margin-left: auto;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #ff0033;
}
</style>
