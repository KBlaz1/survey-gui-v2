<template>
  <survey-component>
    <title>
      {{ title }}
    </title>
    <sub-title style="white-space: pre-wrap">
      {{ description }}
    </sub-title>
  </survey-component>
</template>

<script>
import surveyComponent from "./surveyComponent.vue"
export default {
  components: { surveyComponent },
  name: "SurveyTitle",
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
