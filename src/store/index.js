import { createStore } from 'vuex'

export default createStore({
  state: {
    active:0
  },
  mutations: {
    changeActive(state,index){
      state.active = index
    }
  },
  actions: {
  },
  modules: {
  }
})
