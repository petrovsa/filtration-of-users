<template>
  <div>
    <p>
      Фильтр
      <input placeholder="filter..." v-model="filter" />
      <!-- <hr />
      <button v-if="page > 1" @click="page = page - 1">Назад</button>
     <button v-if="hasNexPage " @click="page = page + 1">Вперед</button></p>
    <hr /> -->
      <transactionPaginated
        :total="Math.ceil(todos.length / 25)"
        :item="currentPage"
        @changePage="changePage"
      />
    </p>
    {{ todos.length }} {{ total }} {{ filteredTodos.length }}

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
      page: 1,
      total: this.todos.length / 25,
    };
  },
  components: {
    transactionPaginated,
  },
  computed: {
    // total() {
    //   return this.filter ? this.filteredTodos.length : this.todos.length;
    //   // return this.filteredTodos.length / 25;
    // },
    filteredTodos() {
      const start = (this.currentPage - 1) * 25;
      const end = this.currentPage * 25;
      return this.filter
        ? this.todos
            .filter((todo) =>
              [todo.title].some((t) =>
                t.toLowerCase().includes(this.filter.toLowerCase())
              )
            )
            .slice(start, end)
        : this.todos.slice(start, end);
    },
  },
  methods: {
    changePage(page) {
      console.log(page);
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
