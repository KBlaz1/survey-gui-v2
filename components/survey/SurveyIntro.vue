<template>
  <v-card
    class="ma-4"
  >
    <v-card-title>
      <h1 class="mb-4">{{ title }}</h1>
    </v-card-title>
    <v-card-subtitle>
      <h3>{{ description }}</h3>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "SurveyIntroComponent",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
}
</script>
