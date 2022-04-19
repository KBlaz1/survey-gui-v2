<template>
  <v-container
    fluid
    style="height: 100vh"
    class="d-flex align-center justify-center"
  >
    <v-card width="600">
      <v-card-title>
        {{ question.text }}
      </v-card-title>
      <v-card-text>
        <QuestionMultiAnswerForm
          v-if="question.multipleAnswer"
          :answer-options="question.answerOptions"
        />
        <QuestionSingleAnswerForm
          v-if="!question.multipleAnswer"
          :answer-options="question.answerOptions"
          @emitAnswerListener="setAnswer"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          v-if="previousRouterParam > 0"
          nuxt
          :to="'/survey/' + surveyID + '/question/' + previousRouterParam + '/'"
        >
          back
        </v-btn>
        <!-- todo: do not show this button if its the last question -->
        <v-btn
          nuxt
          :to="'/survey/' + surveyID + '/question/' + nextRouterParam + '/'"
          @click="submitAnswer"
        >
          next
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "QuestionPage",
  layout: "surveyLayout",
  // todo: validate the path param see: https://develop365.gitlab.io/nuxtjs-2.3.X-doc/es/guide/routing/#dynamic-routes
  data () {
    return {
      // todo: put this in to async data
      routerParam: parseInt(this.$route.params.id),
      surveyID: "",
      question: {},
      answeredQuestion: {
        questionUUID: "",
        answers: []
      }
    }
  },
  computed: {
    nextRouterParam () {
      // todo: check if the next question exists
      return this.routerParam + 1
    },
    previousRouterParam () {
      return this.routerParam - 1
    }
  },
  created () {
    this.question = this.$store.getters["survey/getQuestionBySequenceNumber"](
      this.routerParam
    )
    this.answeredQuestion.questionUUID = this.question.id
    this.surveyID = this.$store.getters["survey/getSurveyID"]
  },
  methods: {
    setAnswer (answer) {
      this.answeredQuestion.answers = answer
    },
    submitAnswer () {
      if (this.validAnswer()) {
        this.$store.commit["question/ADD_QUESTION"](this.answer)
        console.log("valid answers")
      }
    },
    validAnswer () {
      const answers = this.answeredQuestion.answers
      if (answers !== undefined)
        return answers.every(answer => answer.text !== "" && answer.uuid !== "")

      return false
    }
  }
}
</script>
