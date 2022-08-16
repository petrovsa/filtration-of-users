<template>
  <div>
    <ul class="paginated">
      <li v-for="p in totalPages" :key="p" class="paginated-item">
        <button
          @click="changePage(p)"
          class="paginated-button"
          :class="{ active: currentPage === p }"
        >
          {{ p }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "transactionPaginated",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    item: {
      type: Number,
      default: 25,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.item);
    },
  },

  methods: {
    changePage(page) {
      this.currentPage = page;
      this.$emit("changePage", page);
    },
  },
};
</script>
<style>
.paginated {
  display: flex;
  align-items: center;
  justify-content: center;
}
.paginated-item {
  background-color: white;
  color: #1c1d21;
  margin: 5px 5px;
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
}
.paginated-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3b5998;
  width: 20px;
  border-radius: 100%;
}
.active {
  border-color: red;
}
</style>
