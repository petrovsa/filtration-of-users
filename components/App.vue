<template>
  <TodoLst :todos="todos" />
</template>

<script>

import { loadTodos } from "../api/api.js";
import TodoLst from "./TodoLst";

export default {
  name: "App",
  components: {
    TodoLst,
  },
  data() {
    return { todos: [] };
  },
  mounted() {
     loadTodos().then((todos) => {
       if (todos.length < 1) return;
       this.todos = todos;
     });
  },
};
</script>