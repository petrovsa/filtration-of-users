<template>
  <TodoList :todos="todos" />
</template>

<script>
import TodoList from "../components/TodoList";
export default {
  name: "IndexPage",
  async asyncData() {
    try {
      const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
          .then(r => r.json()).then();
      return { todos };
    } catch (e) {
      console.log(`e.message`)
    }
  },
  components: { TodoList },
};
</script>
