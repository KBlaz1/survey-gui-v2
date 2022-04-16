// state
export const state = () => ({
  answers: []
})

// getters
export const getters = {
  getAnswersForQuestion (questionUUID) {
    return state.answers.find(answer => answer.id === questionUUID)
  },
  getQuestionUUIDs () {
    if (state.answers !== undefined) {
      return state.answers.map(answer => answer.questionUUID)
    }

    return []
  }
}

// actions
export const actions = {
}

// mutations
export const mutations = {
  ADD_ANSWER (state, answer) {
    const foundAnswer = state.answers.find(a => a.questionUUID === answer.questionUUID)

    // overwriting answer in state if the an answer with the same uuid already exists
    if (foundAnswer === undefined) {
      state.answers.push(answer)
    } else {
      state.answers[state.answers.indexOf(foundAnswer)] = answer
    }
  }
}
