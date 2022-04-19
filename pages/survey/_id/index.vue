<template>
  <div style="height: 100vh" class="">
    <!--
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
  -->
    <!--
    <template v-for="item in survey.questions">
      <v-row :key="item.id">
        <question :question="item" />
      </v-row>
    </template>
    -->
    <survey-intro
      :title="survey.title"
      :description="survey.description"
    />
    <!-- maybe put the buttons in a component -->
    <div class="d-flex justify-end">
      <v-btn
        large
      >
        back
      </v-btn>
      <v-btn
        class="mx-4"
        color="primary"
        large
        elevation="5"
        nuxt
        :to="uuid + '/form/1'"
      >
        next
      </v-btn>
    </div>
  </div>
</template>

<script>
import SurveyIntro from "~/components/survey/SurveyIntro.vue"
export default {
  name: "SurveyPage",
  components: { SurveyIntro },
  layout: "surveyLayout",
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
