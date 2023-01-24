<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Navigation Bar</v-toolbar-title>
      <div v-if="user">
        <span>{{user.email}}</span>
      </div>
      <div>
        <button @click="logout" type="button" class="btn btn-success">Logout</button>
      </div>
      <template v-slot:extension>
        <v-tabs
            v-model="tab"
            align-tabs="center"
            grow
        >
          <v-tab
              v-for="link in links"
              :key="link"
              :value="link"
          >
            <router-link to="" @click="moveTo(link.name)">{{ link.label }}</router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
import {useAuthStore} from "@/router/stores/auth";
import {mapState, mapActions} from "pinia";

export default {
  name: 'HeaderApp',
  data () {
    return {
      tab: null,
      links: [
        {
          name: 'auth',
          label: 'Auth',
        },
        {
          name: 'products',
          label: 'Products',
        },
        {
          name: 'counter',
          label: 'Counter',
        },
        {
          name: 'cards',
          label: 'Cards',
        },
      ],
    }
  },
  computed: {
    ...mapState(useAuthStore, ["user"])
  },
  methods: {
    ...mapActions(useAuthStore, ["logout"]),
    moveTo(name) {
      this.$router.push({
        name: name
      })
      console.log(this.$router);
    }
  },
}
</script>

<style>
  a {
    text-decoration: none;
    color: white;
  }
  .active {
    color: #42b983;
  }
</style>
