<template>
  <survey-component>
    <v-row no-gutters>
      <v-col>
        <v-text-field
          v-model="survey.title"
          :rules="[() => !!survey.title || 'This field is required']"
          label="Write your title here"
          outlined
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-textarea
          v-model="survey.description"
          :rules="[() => !!survey.description || 'This field is required']"
          label="Write your description here"
          rows="1"
          outlined
          auto-grow
        />
      </v-col>
    </v-row>
  </survey-component>
</template>

<script>
import surveyComponent from "./surveyComponent.vue"
export default {
  components: { surveyComponent },
  name: "SurveyTitleCreate",
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
