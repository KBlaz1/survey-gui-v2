<template>
  <v-card
    style="width: 500px"
    class="mx-auto my-sm-6"
  >
    <v-card-title>
      <h1 class="mb-4">
        {{ title }}
      </h1>
    </v-card-title>
    <v-card-subtitle>
      <h3 style="white-space: pre-wrap">{{ description }}</h3>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "SurveyIntroComponent",
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    description: {
      type: String,
      default: "",
      required: true
    }
  }
}
</script>
