<template>
  <div>
    <v-radio-group v-model="onAnswerChange">
      <template v-for="answerOption in answerOptions">
        <v-radio
          v-if="!answerOption.respondentAnswer"
          :key="answerOption.sequenceNumber"
          :label="answerOption.text"
          :value="answerOption"
        />
        <!-- this radio button will activate text input for user -->
        <span
          v-else
          :key="answerOption.sequenceNumber"
          class="d-flex"
        >
          <v-radio
            :value="answerOption"
          />
          <v-text-field
            v-if="answer[0] != undefined && !answer[0].respondentAnswer"
            disabled
          />
          <v-text-field
            v-else
            v-model="answer[0].text"
          />
        </span>
      </template>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: "QuestionSingleAnswerFormComponent",
  props: {
    answerOptions: {
      type: [Array, Object],
      default: () => []
    }
  },
  data () {
    return {
      answer: [{}]
    }
  },
  computed: {
    // providing a get function here will stop radio buttons from working correctly
    // thats why I chose to ignore the "Getter is missing for computed property" warning
    onAnswerChange: {
      set (val) {
        this.answer = [{
          uuid: val.id,
          text: val.text,
          respondentAnswer: val.respondentAnswer
        }]
      }
    }
  },
  watch: {
    answer (newAnswer, oldAnswer) {
      this.$emit("emitAnswerListener", newAnswer)
    }
  }
}
</script>
