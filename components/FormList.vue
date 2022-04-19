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

    <!-- title -->
    <v-list-item
      link
      nuxt
      :to="linkTitle"
    >
      <v-list-item-content>
        <v-list-item-title>
          Title
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- forms -->
    <template v-for="form in forms">
      <v-list-item
        :key="form.formID.uuid"
        link
        nuxt
        :to="linkForm(form.index)"
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
  data () {
    return {
      forms: [],
      answeredForms: [],
      surveyID: {}
    }
  },
  watch: {
    $route (to, from) {
      this.answeredQuestions = this.$store.getters["answers/getQuestionUUIDs"]
      console.log("route watcher works: " + this.answeredQuestions)
    },
    getForms () {
      this.forms = this.$store.getters["survey/getForms"]
      this.surveyID = this.$store.getters["survey/getSurveyID"]
    }
  },
  mounted () {
    console.log("FormList => mounted()")
    this.forms = this.$store.getters["survey/getForms"]
    this.surveyID = this.$store.getters["survey/getSurveyID"]
  },
  methods: {
    onListItemClick () {
      console.log("event list item works")
    },
    linkForm (formIndex) {
      if (this.surveyID === undefined)
        return "/create/form/" + formIndex
      else
        return "/survey/" + this.surveyID.uuid + "/form/" + formIndex
    }
  },
  computed: {
    linkTitle () {
      if (this.surveyID === undefined)
        return "/create/title"
      else
        return "/survey/" + this.surveyID.uuid
    },
    getForms () {
      return this.$store.getters["survey/getForms"]
    }
  }
}
</script>
