<template>
  <v-card class="mx-auto my-sm-4 survey-component">
    <v-card-title>
      <slot name="title"></slot>
    </v-card-title>
    <v-card-subtitle>
      <slot name="sub-title"></slot>
    </v-card-subtitle>
    <v-card-text>
      <slot name="body"></slot>
    </v-card-text>
    <slot></slot>
    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "surveyComponent"
}
</script>

<style>
  .survey-component {
    width: 500px;
  }
</style>
