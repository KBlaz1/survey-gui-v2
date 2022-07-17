<template>
  <div
    v-click-outside="onClickOutside"
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
      <form-intro
        v-if="formIntro"
        :title="inputData.title"
      />
    </div>

    <!-- input types -->
    <div v-show="!showPreview">
      <create-survey-intro
        v-if="surveyIntro"
        @onIsValidChange="setIsValid"
        @onSurveyChange="setInputData"
      />
      <create-form-intro
        v-if="formIntro"
        @onIsValidChange="setIsValid"
        @onSurveyChange="setInputData"
      />
    </div>
  </div>
</template>

<script>
import SurveyIntro from "../survey/SurveyIntro.vue"
import FormIntro from "../survey/FormIntro.vue"
import createSurveyIntro from "./inputTypes/CreateSurveyIntro.vue"
import createFormIntro from "./inputTypes/CreateFormIntro.vue"
export default {
  name: "InputCreateComponent",
  components: {
    createSurveyIntro,
    createFormIntro,
    SurveyIntro,
    FormIntro
  },
  props: {
    surveyIntro: {
      type: Boolean,
      default: false
    },
    formIntro: {
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
  watch: {
    inputData (newInputData) {
      this.$emit("onInputDataChange", newInputData)
    },
    isValid (newValue) {
      this.$emit("onIsValidChange", newValue)
    }
  },
  methods: {
    setIsValid (newValue) {
      this.isValid = newValue
    },
    setInputData (data) {
      this.inputData = data
    },
    onClickOutside () {
      if (this.isValid)
        this.showPreview = true
    },
    onCardClick () {
      this.showPreview = false
    }
  }
}
</script>

<style scoped>
  .previewCard {
    cursor: pointer !important;
  }
</style>
