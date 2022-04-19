<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-text-field
          v-model="survey.title"
          label="Write your title here"
          outlined
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-textarea
          v-model="survey.description"
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
  name: "CreateSurveyIntroComponent",
  data () {
    return {
      survey: {
        title: "",
        description: ""
      }
    }
  },
  computed: {
    isValid () {
      if (this.survey.title !== "" && this.survey.description !== "")
        return true

      return false
    }
  },
  watch: {
    isValid (newValue) {
      this.$emit("onIsValidChange", newValue)
      this.$emit("onSurveyChange", this.survey)
    }
  }
}
</script>
