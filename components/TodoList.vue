<template>
  <div>
    <label for="filter">Фильтр</label>
      <input placeholder="filter..." v-model="filter" id="filter"/>
      <TransactionPaginated
        :total="total"
        :currentPage="currentPage"
        @changePage="changePage"
      />
    <h3>Todo Name</h3>
    <table>
        <tr v-for="todo in filteredTodos" :key="todo.id">
          <td>{{ todo.title }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import TransactionPaginated from "./TransactionPaginated.vue";
export default {
  props: {
    todos: { type: Array, required: true },
  },
  data() {
    return {
      filter: "",
      currentPage: 1,
      paginatedTodo: null,
      hasNext: true,
    };
  },
  components: {
    TransactionPaginated,
  },
  computed: {
    total() {
      return this.filter ? this.paginatedTodo.length : this.todos.length;
    },
    filteredTodos() {
      const start = (this.currentPage - 1) * 25;
      const end = this.currentPage * 25;
      this.paginatedTodo = this.todos.filter((todo) => todo.title.toLowerCase().includes(this.filter.toLowerCase().trim()));
      return this.paginatedTodo.slice(start,end);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },

  },
  watch: {
    filter() {
      this.currentPage = 1;
    },
  },
};
</script>
