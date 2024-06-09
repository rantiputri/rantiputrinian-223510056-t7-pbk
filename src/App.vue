<template>
  <RouterView />
</template>

<script setup>
</script>

<style scoped>
.todo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #aedcff; /* ubah warna background */
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
  color: #004c99; /* ubah warna teks */
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
  border: 1px solid #004c99; /* ubah warna border */
  border-radius: 5px 0 0 5px;
  outline: none;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  background-color: #004c99; /* ubah warna background */
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

button:hover {
  background-color: #003366; /* ubah warna background saat hover */
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #4da6ff; /* ubah warna border */
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
  background-color: #cc0000; /* ubah warna background */
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #990000; /* ubah warna background saat hover */
}
</style>