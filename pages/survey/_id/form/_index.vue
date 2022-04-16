<template>
  <div
    style="height: 100vh"
  >
    <!--
    <v-card class="mb-4 ml-4">
      <v-card-title>{{ form.title }}</v-card-title>
    </v-card>
    <v-card
      v-for="question in form.questions"
      :key="question.questionID.uuid"
      class="mb-4 ml-4"
    >
      <v-card-title>{{ question.label }}</v-card-title>
    </v-card>
  -->
    <v-card class="ma-4">
      <v-card-title> {{ form.title }} </v-card-title>
    </v-card>
    <template v-for="question in form.questions">
      <question
        :key="question.questionID.uuid"
        :question="question"
      />
    </template>
    <div class="ma-4 d-flex justify-end">
      <v-btn class="mr-3">
        back
      </v-btn>
      <v-btn>next</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  layout: "surveyLayout",
  data () {
    return {
      form: {
        title: "form title",
        questions: [
          {
            questionID: {
              uuid: "f7ee08b2-9b02-4b84-8c27-97f8a9656fd0"
            },
            label: "what is a banana?",
            type: "CHECK_BOX",
            index: 0,
            choices: [
              {
                choiceID: {
                  uuid: "f4c0f1d9-f2f1-4c2b-86e6-00b4bf1fe343"
                },
                label: "fruit",
                index: 0
              },
              {
                choiceID: {
                  uuid: "298605a2-43df-47d9-8f2e-348cec20e251"
                },
                label: "meat",
                index: 2
              },
              {
                choiceID: {
                  uuid: "ad0535ef-75de-4c89-b705-2cf6795e7875"
                },
                label: "vegetable",
                index: 1
              }
            ],
            required: true
          },
          {
            questionID: {
              uuid: "1c6944ff-5ac1-4f90-ac1b-00a1e43838b1"
            },
            label: "do you like pineaple?",
            type: "RADIO_BUTTON",
            index: 1,
            choices: [
              {
                choiceID: {
                  uuid: "10fb02b2-4df9-4adb-a46c-070d852976b4"
                },
                label: "yes",
                index: 0
              },
              {
                choiceID: {
                  uuid: "d49199af-ef3d-4093-bf64-7290e9449145"
                },
                label: "no",
                index: 1
              }
            ],
            required: true
          }
        ]
      }
    }
  },
  mounted () {}
}
</script>
