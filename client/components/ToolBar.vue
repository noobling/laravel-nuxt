<template>
  <v-toolbar fixed app dark color="primary" >
    <v-toolbar-side-icon @click="changeNavDraw"></v-toolbar-side-icon>
    <v-toolbar-title>My Awesome Laravel Nuxt App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="/register">Register</v-btn>
      <v-btn flat to="/login">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    methods: {
      changeNavDraw: function () {
        this.$store.dispatch('updateNavDraw', { navDraw: !this.navDraw })
      }
    },

    computed: {
      ...mapGetters([
        'navDraw'
      ])
    }
  }
</script>