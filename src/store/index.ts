import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    item:[]
  },
  getters: {
    getItem(state){
      return state.item
    }
  },
  mutations: {
  setItems(state,payload){
    state.item=payload
  }
  },
  actions: {
    setItems(context) {
      axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
        .then((items) => {
          const data = items.data.slice(0,50);
          context.commit("setItems", data);
        });
    },
   
  },
  modules: {

  }
})
