

const state = {
  count: 90,
  test: 'test'
}

const mutations = {
  INCREMENT (state, mutations) {
    state.count = state.count + mutations.f
  }
}

export default {
  state,
  mutations
}


