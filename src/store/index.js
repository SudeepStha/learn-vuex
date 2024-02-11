import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter:0,
    colorCode: 'red'
  },
  getters: {
    counterSquared(state){
      return state.counter * state.counter;
    }
  },
  mutations: {
    increaseCounter(state, randomNumber){
      state.counter += randomNumber;
    },
    decreaseCounter(state, randomNumber){
      // if(state.counter > 0){
        state.counter -= randomNumber;
      // }else{
      //   alert("You cannot decrease less than 0.")
      // }
    },
    setColorCode(state,newValue){
      state.colorCode = newValue;
    },
  },
  actions: {
    increaseCounter({commit}){
      axios('https://www.random.org/integers/?num=1&min=0&max=9&col=1&base=10&format=plain&rnd=new').then(res => {
        commit('increaseCounter', res.data);
      })
    },
    decreaseCounter({commit}){
      axios('https://www.random.org/integers/?num=1&min=0&max=9&col=1&base=10&format=plain&rnd=new').then(res => {
        commit('decreaseCounter', res.data);
      })
    },
    setColorCode({commit}, newValue){
      commit('setColorCode', newValue)
    }
  },
  modules: {
  }
})
