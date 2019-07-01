<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>LUMYS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-2">
        <router-link to="/about">About</router-link>
      </span>
      <span class="mr-2">
        <router-link to="/">Home</router-link>
      </span>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      //
    };
  },
};
</script>
