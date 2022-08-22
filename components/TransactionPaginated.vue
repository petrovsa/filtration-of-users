<template>
  <div class="container">
    <button v-if="selectedPage > 1" class="btn-move" @click="moveToBack"> < </button>
    <ul class="paginated">
      <li v-for="index in totalPages" :key="index" class="paginated-item">
        <div  v-if="(index < 4 || (totalPages - index) < 3) || Math.abs(index - selectedPage) < 2">
        <span v-if="index === (totalPages - 2) && selectedPage < (totalPages - 4)">
          ...
        </span>
        <button
            @click="changePage(index)"
            class="paginated-button"
            :class="{ active: selectedPage === index }"
        >
          {{ index }}
        </button>
        <span v-if="(index === 3 && selectedPage > 5)">
                ...
        </span>
        </div>
      </li>
    </ul>
    <button v-if="selectedPage < totalPages" class="btn-move" @click="moveToNext"> > </button>
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
    currentPage: {
      type: Number,
      default: 1
    }
  },
data(){
    return {
      selectedPage: this.currentPage
    }
},
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.item);
    },
  },

  methods: {
    changePage(page) {
      this.selectedPage = page;
      this.$emit("changePage", this.selectedPage);
    },
    moveToBack(){
      this.selectedPage = this.selectedPage - 1;
      this.$emit("moveToBack", this.selectedPage);
    },
    moveToNext(){
      this.selectedPage = this.selectedPage + 1;
      this.$emit("moveToNext", this.selectedPage);
    }
  },
};
</script>
<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.paginated {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paginated-item {
  list-style-type: none;
  padding-left: 5px;
}
.paginated-item:nth-child(1) {
  padding-left: 0;
}
.paginated-item:last-child {
  padding-right: 0;
}
.paginated-button {
  border: 1px solid #3b5998;
  width: 20px;
  border-radius: 100%;
}
.btn-move{
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.active {
  border-color: red;
}
</style>
