<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-text-field
          v-model="form.title"
          :rules="[() => !!form.title || 'This field is required']"
          outlined
          label="Write your form title here"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreateFormIntroComponent",
  data () {
    return {
      form: {
        title: ""
      }
    }
  },
  computed: {
    isValid () {
      if (this.form.title !== "")
        return true

      return false
    }
  },
  watch: {
    isValid (newValue) {
      this.$emit("onIsValidChange", newValue)
      this.$emit("onSurveyChange", this.form)
    }
  }
}
</script>
