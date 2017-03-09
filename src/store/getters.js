const getters = {
  limitItem (state) {
    return state.items.slice(0, state.limitNum)
  }
}

export default getters
