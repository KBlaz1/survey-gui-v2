<template>
  <div>
    <input-create
      form-intro
      @onInputDataChange="setForm"
      @onIsValidChange="setIsValid"
    />
  </div>
</template>

<script>
import InputCreate from "~/components/create/InputCreate.vue"
export default {
  name: "CreateFormPage",
  components: { InputCreate },
  layout: "surveyLayout",
  data () {
    return {
      isValid: false
    }
  },
  methods: {
    setForm (newForm) {
      this.$store.commit("survey/ADD_FORM", newForm)
    },
    setIsValid (isValid) {
      this.isValid = isValid
    }
  }
}
</script>
