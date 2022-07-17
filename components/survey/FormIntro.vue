<template>
  <v-card
    style="width: 500px"
    class="mx-auto my-sm-6"
  >
    <v-card-title> {{ title }} </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "FormIntroComponent",
  props: {
    title: {
      type: String,
      default: "",
      required: true
    }
  }
}
</script>
