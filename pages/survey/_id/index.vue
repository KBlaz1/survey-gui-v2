<template>
  <v-container>
    <div class="wrapper">
      <h1>{{ survey.title }}</h1>
      <h3>{{ survey.description }}</h3>
      <v-btn
        v-if="survey !== undefined"
        id="btn-start"
        color="primary"
        large
        elevation="5"
        nuxt
        :to="uuid + '/form/1'"
      >
        Start
      </v-btn>
      <!--
      <template v-for="item in survey.questions">
        <v-row :key="item.id">
          <question :question="item" />
        </v-row>
      </template>
      -->
    </div>
  </v-container>
</template>

<script>
export default {
  name: "SurveyPage",

  data () {
    return {
      // todo: put in async data
      survey: {},
      uuid: undefined
    }
  },
  async created () {
    await this.$store.dispatch("survey/getSurvey", this.$route.params.id)
    this.survey = this.$store.state.survey.survey
    this.uuid = this.survey.surveyID.uuid
  }
}
</script>

<style scoped>
  .wrapper {
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  #btn-start {
    margin-top: 10px;
  }
</style>
