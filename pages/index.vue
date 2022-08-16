<template>
  <TodoLst :todos="todos" />
</template>

<script>
import TodoLst from "../components/TodoLst";
import { loadTodos } from "../api/api";
export default {
  name: "IndexPage",
  asyncData() {
    return {
      todos: [],
    };
  },
  mounted() {
    loadTodos().then((todos) => {
      if (todos.length < 1) return;
      this.todos = todos;
    });
  },
  components: { TodoLst },
};
</script>
