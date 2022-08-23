<template>
  <div class="container">
    <button v-if="selectedPage > 1" class="btn-move" @click="changePage(selectedPage - 1)"> < </button>
    <ul class="paginated">
      <li
          v-for="index in totalPages"
          :key="index"
          class="paginated-item">
        <div  v-if="(index < 3 || (totalPages - index) < 2) || Math.abs(index - selectedPage) < 2">
        <span v-if="index === (totalPages - 1) && selectedPage < (totalPages - 3)">
          ...
        </span>
        <button
            @click="changePage(index)"
            class="paginated-button"
            :class="{ active: selectedPage === index }"
        >
          {{ index }}
        </button>
        <span v-if="(index === 2 && selectedPage > 4)">
                ...
        </span>
        </div>
      </li>
    </ul>
    <button v-if="selectedPage < totalPages" class="btn-move" @click="changePage(selectedPage + 1)"> > </button>
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
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  .paginated {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &-item {
      list-style-type: none;
      padding-left: 5px;
      &:first-child{
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }

    &-button {
      border: 1px solid #3b5998;
      width: 20px;
      border-radius: 100%;
    }
    .active {
      border-color: red;
    }
  }
  .btn-move{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}


</style>
