<template>
  <v-card class="ma-4">
    <v-card-title> {{ title }} </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "FormIntroComponent",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>
