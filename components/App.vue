<template>
  <UserLst :users="users" />
</template>

<script>

import { loadUsers } from "../api/api.js";
import UserLst from "./UserLst";

export default {
  name: "App",
  components: {
    UserLst,
  },
  data() {
    return { users: [] };
  },
  mounted() {
     loadUsers().then((users) => {
       if (users.length < 1) return;
       this.users = users;
     });
  },
};
</script>