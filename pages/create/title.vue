<template>
  <div style="height: 100vh">
    <input-create survey-intro @onInputDataChange="setInputData"/>

  </div>
</template>

<script>
import InputCreate from "~/components/create/InputCreate.vue"
export default {
  name: "CreatePage",
  components: { InputCreate },
  layout: "surveyLayout",
  data () {
    return {
      inputData: {
        type: Object,
        default: () => {}
      }
    }
  },
  methods: {
    setInputData (inputData) {
      this.inputData = inputData
    }
  },
  beforeDestroy () {
    console.log("before destroy has been called")
    this.$store.commit("survey/SET_SURVEY", this.inputData)
  },
  created () {
    console.log(this.$store.getters["survey/getSurveyID"] !== undefined)
    if (this.$store.getters["survey/getSurveyID"] !== undefined)
      this.$store.commit("survey/SET_SURVEY", {})
  }
}
</script>
