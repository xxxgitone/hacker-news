const getters = {
  limitItem (state) {
    //  按score数量的大小从到小排列
    const newItems = state.items.sort((firstItem, nextItem) => nextItem.score > firstItem.score ? 1 : -1)
    return newItems.slice(0, state.limitNum)
  }
}

export default getters
