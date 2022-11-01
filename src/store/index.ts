import axios, { AxiosResponse } from "axios";
import DataModels from "../models/DataModels";
import { createStore } from 'vuex'

export default createStore({
  state: {
    items:[]
  },
  getters: {
    getItems(state){
      return state.items
    }
  },
  mutations: {
  setItems(state,payload){
    state.items=payload
  }
  },
  actions: {
    setItems(context) {
      axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
        .then((items: AxiosResponse<Array<DataModels>>) => {
          const data = items.data.slice(0,50);
          context.commit("setItems", data);
        });
    },
   
  },
})
