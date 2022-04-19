<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-text-field
          label="Write your title here"
          outlined
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-textarea
          label="Write your description here"
          rows="1"
          outlined
          auto-grow
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InputCreationForm",
  data () {
    return {

    }
  }
}
</script>
