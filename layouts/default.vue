<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container>
        <NuxtLink to="/">
          <v-toolbar-title>Survey Maker</v-toolbar-title>
        </NuxtLink>
      </v-container>

      <v-container>
        <v-tabs right class="ml-n9" color="grey darken-1">
          <v-tab v-for="link in links" :key="link.title" :to="{ name: link.to }">
            {{ link.title }}
          </v-tab>
        </v-tabs>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-sheet min-height="70vh" rounded="lg">
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
  name: "DefaultPage",
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
