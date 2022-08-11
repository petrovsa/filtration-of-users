<template>
  <div>
    <input placeholder="filter..." v-model="filter" />
    <hr />
    <table>
      <tbody>
      <tr>
        <th>User Name</th>
      </tr>
      <tr v-for="user in filteredUsers" :key="user.id">
        <td>{{user.name}} {{user.username}}</td>
      </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
export default {
  props: {
    users: { type: Array, required: true },
  },
  data() {
    return { filter: "" };
  },
  computed: {
    filteredUsers() {
      return this.filter
          ? this.users.filter((u) =>
              [u.name, u.username].some((v) =>
                  v.toLowerCase().includes(this.filter.toLowerCase())
              )
          )
          : this.users;
    },
  },
};
</script>
