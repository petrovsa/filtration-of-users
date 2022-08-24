<template>
  <TodoList :todos="todos" />
</template>

<script>
import TodoList from "../components/TodoList";
export default {
  name: "IndexPage",
  async asyncData() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await data.json();
      return { todos };
    }
    catch (e) {
console.log(e.message);
    }
  },
  components: { TodoList },
};
</script>
