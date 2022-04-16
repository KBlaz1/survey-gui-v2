// state
export const state = () => ({
  survey: {}
})

// getters
export const getters = {
  getQuestionBySequenceNumber: state => (sequenceNumber) => {
    return state.survey.questions.find(question => question.sequenceNumber === sequenceNumber)
  },
  getSurveyID (state) {
    return state.survey.id
  },
  getForms (state) {
    return state.survey.forms
  }
}

// actions
export const actions = {
  async getSurvey ({ commit }, id) {
    commit("SET_SURVEY", await this.$axios.$get(`/survey/${id}`))
  },
  async postSurvey ({ commit }, body) {
    return await this.$axios.post("/survey", body)
  }
}

// mutations
export const mutations = {
  SET_SURVEY (state, survey) {
    // sorting forms array by their index property
    survey.forms.sort((a, b) => {
      return a.index - b.index
    })

    // sorting questions array by their index property
    survey.forms.forEach((form) => {
      form.questions.sort((a, b) => {
        return a.index - b.index
      })

      // sorting choices array by their index property
      form.questions.forEach((question) => {
        question.choices.sort((a, b) => {
          return a.index - b.index
        })
      })
    })
    state.survey = survey
  }
}
