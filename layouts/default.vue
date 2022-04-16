<template>
  <v-app>
    <v-app-bar
      app
      clipped
      fixed
    >
      <v-toolbar-title>Survey Maker</v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="12"
          >
            <v-sheet rounded="lg">
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data () {
    return {
      links: [
        { title: "Browse", to: "browse" },
        { title: "Log in", to: "logIn" },
        { title: "Get started", to: "register" }
      ]
    }
  }
}
</script>
