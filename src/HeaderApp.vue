<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Navigation Bar</v-toolbar-title>
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
            <router-link :to="link.route">{{ link.label }}</router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'HeaderApp',
  data () {
    return {
      tab: null,
      links: [
        {
          route: '/',
          label: 'Home',
        },
        {
          route: '/products',
          label: 'Products',
        },
        {
          route: '/counter',
          label: 'Counter',
        },
        {
          route: '/cards',
          label: 'Cards',
        },
        {
          route: '/some',
          label: 'Some Page',
        },
      ],
    }
  },
}
</script>

<style>
  a {
    text-decoration: none;
    color: white;
  }
</style>
