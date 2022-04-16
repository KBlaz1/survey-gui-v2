<template>
  <v-card class="mb-4 mx-4">
    <v-card-title>{{ question.label }}</v-card-title>
    <v-card-text>
      <v-container>
        <choices
          :question-type="question.type"
          :choices="question.choices"
        />
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import Choices from "./Choices.vue"
export default {
  name: "QuestionComponent",
  components: { Choices },
  props: {
    question: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
