<template>
  <div class="text-center">
    <div class="form-signin">
      <form @submit.prevent="sendCredentials">
        <h1 class="h3 mb-3 fw-normal">Please Log in</h1>

        <div class="form-floating">
          <input type="name" v-model="details.name" class="form-control" id="floatingName" placeholder="name@example.com">
          <label for="floatingName">User Name</label>
        </div><div class="form-floating">
        <input type="email" v-model="details.email" class="form-control" id="floatingEmail" placeholder="name@example.com">
        <label for="floatingEmail">Email address</label>
      </div>
        <div class="form-floating">
          <input type="password" v-model="details.password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary"> Login </button>
        <p class="mt-5 mb-3 text-muted">&copy;Palmo-mater 2022</p>
      </form>
    </div>
  </div>
</template>

<script>
import {useAuthStore} from "@/router/stores/auth";
import {mapState, mapActions} from "pinia";

export default {
  name: "Auth",
  data() {
    return {
      details: {
        name: "johnd",
        email: "palmo@example.net",
        password: "m38rmF$",
      },
    };
  },
  computed: {
    ...mapState(useAuthStore, ["users"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["getUsers", "loginUser"]),
    sendCredentials() {
      const userData = {
        'username': this.details.name,
        'password': this.details.password,
      };
      this.loginUser(userData);
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<style scoped>

</style>