<template>
  <v-card
    v-click-outside="onClickOutside"
    class="ma-4"
    :class="{ previewCard: showPreview }"
    @click.native="onCardClick"
  >
    <!-- preview -->
    <div v-show="showPreview">
      <survey-intro
        v-if="surveyIntro"
        :title="inputData.title"
        :description="inputData.description"
      />
    </div>

    <!-- input types -->
    <div v-show="!showPreview">
      <create-survey-intro
        v-if="surveyIntro"
        @onIsValidChange="setIsValid"
        @onSurveyChange="setSurvey"
      />
      <input-type-form-component
        v-if="form"
      />
    </div>
  </v-card>
</template>

<script>
import SurveyIntro from "../survey/SurveyIntro.vue"
import createSurveyIntro from "./inputTypes/CreateSurveyIntro.vue"
import InputTypeFormComponent from "./inputTypes/InputTypeForm.vue"
export default {
  name: "InputCreateComponent",
  components: {
    createSurveyIntro,
    InputTypeFormComponent,
    SurveyIntro
  },
  props: {
    surveyIntro: {
      type: Boolean,
      default: false
    },
    form: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isValid: false,
      showPreview: false,
      inputData: {}
    }
  },
  methods: {
    setIsValid (newValue) {
      this.isValid = newValue
    },
    setSurvey (survey) {
      this.inputData = survey
    },
    onClickOutside () {
      if (this.isValid)
        this.showPreview = true
    },
    onCardClick () {
      this.showPreview = false
    }
  },
  watch: {
    inputData (newInputData) {
      this.$emit("onInputDataChange", newInputData)
    }
  }
}
</script>

<style scoped>
  .previewCard {
    cursor: pointer !important;
  }
</style>
