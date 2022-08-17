<template>
  <div>
    <p>
      Фильтр
      <input placeholder="filter..." v-model="filter" />
      <transactionPaginated
        :total="total"
        :currentPage="currentPage"
        @changePage="changePage"
      />
    </p>
    <table>
      <tbody>
        <tr>
          <th>Todo Name</th>
        </tr>
        <tr v-for="todo in filteredTodos" :key="todo.id">
          <td>{{ todo.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import transactionPaginated from "./transactionPaginated.vue";
export default {
  props: {
    todos: { type: Array, required: true },
  },
  data() {
    return {
      filter: "",
      currentPage: 1,
      f: null,
    };
  },
  components: {
    transactionPaginated,
  },
  computed: {
    total() {
      return this.filter ? this.f.length : this.todos.length;
    },
    filteredTodos() {
      const start = (this.currentPage - 1) * 25;
      const end = this.currentPage * 25;
      this.f = this.filter
        ? this.todos
            .filter((todo) =>
              [todo.title].some((t) =>
                t.toLowerCase().includes(this.filter.toLowerCase())
              )
            )

        : this.todos;
      return this.f.slice(start,end);
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
