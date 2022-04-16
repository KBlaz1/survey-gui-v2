<template>
  <v-list
    dense
    nav
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          Forms
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <template v-for="form in forms">
      <v-list-item
        :key="form.formID.uuid"
        link
        nuxt
        :to="'/survey/' + surveyID + '/form/' + form.index + '/'"
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ form.index + ": " + form.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "FromList",
  props: {
    drawer: {
      typeof: Boolean,
      default: true
    }
  },
  data () {
    return {
      forms: [],
      answeredForms: [],
      surveyID: ""
    }
  },
  watch: {
    $route (to, from) {
      this.answeredQuestions = this.$store.getters["answers/getQuestionUUIDs"]
      console.log("route watcher works: " + this.answeredQuestions)
    }
  },
  created () {
    this.forms = this.$store.getters["survey/getForms"]
    this.surveyID = this.$store.getters["survey/getSurveyID"]
  },
  methods: {
    onListItemClick () {
      console.log("event list item works")
    }
  }
}
</script>
