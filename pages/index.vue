<template>
  <TodoList :todos="todos" />
</template>

<script>
import TodoList from "../components/TodoList";
export default {
  name: "IndexPage",
  async asyncData() {
      const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
          .then(r => r.json()).catch((error) => {
            console.log(error)
    });
      return { todos };

  },
  components: { TodoList },
};
</script>
