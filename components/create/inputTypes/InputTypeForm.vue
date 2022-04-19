<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-text-field
          v-model="title"
          outlined
          label="Write your form title here"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InputTypeFormComponent",
  data () {
    return {
      title: ""
    }
  }
}
</script>
