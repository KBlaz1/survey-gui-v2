<template>
  <v-app>
    <v-app-bar
      app
      clipped-right
      fixed
    >
      <nuxt-link to="/" style="text-decoration: none; color: black">
        <v-toolbar-title>Survey Maker</v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      clipped
      fixed
    >
      <form-list />
    </v-navigation-drawer>
    <v-main style="padding: 0px">
      <v-main class="grey lighten-3" style="height: 100vh">
        <Nuxt />
      </v-main>
    </v-main>
  </v-app>
</template>

<script>
import FormList from "~/components/FormList.vue"
export default {
  name: "SurveyLayout",
  components: { FormList },
  data () {
    return {
      drawer: false
    }
  }
}
</script>
