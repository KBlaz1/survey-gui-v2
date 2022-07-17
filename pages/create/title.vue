<template>
  <div
    style="width: 530px"
    class="mx-auto"
  >
    <input-create
      survey-intro
      @onInputDataChange="setInputData"
      @onIsValidChange="setIsValid"
    />

    <!-- maybe put the buttons in a component -->
    <div
    >
      <div
        class="d-flex justify-end"
        v-if="isValid"
      >
        <v-btn
          large
          nuxt
          :to="'/'"
        >
          back
        </v-btn>
        <v-btn
          class="mx-4"
          color="primary"
          large
          elevation="5"
          nuxt
          :to="'/create/form/1'"
        >
          next
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import InputCreate from "~/components/create/InputCreate.vue"
export default {
  name: "CreateTitlePage",
  components: { InputCreate },
  layout: "surveyLayout",
  data () {
    return {
      inputData: {},
      isValid: false
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
  },
  methods: {
    setInputData (inputData) {
      this.inputData = inputData
    },
    setIsValid (isValid) {
      this.isValid = isValid
    }
  }
}
</script>
