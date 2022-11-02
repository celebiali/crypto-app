import axios, { AxiosResponse } from "axios";
import DataModels from "../models/DataModels";
import { createStore } from 'vuex'

export default createStore({
  state: {
    items:[],
    basketItem:[] as Array<DataModels>,
  },
  getters: {
    getItems(state){
      return state.items
    },
    getBasketItem(state){
      return state.basketItem
    }
  },
  mutations: {
  setItems(state,payload){
    state.items=payload
  },
  addBasket(state,payload){
      const data = state.basketItem.find((item) => item.id === payload.id)
      if(data && data.quantity <= 1){
          data.quantity++
      } else if(!data?.quantity) {
        state.basketItem.push({...payload,quantity:1});
        localStorage.setItem("basket",JSON.stringify(state.basketItem))
      }
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
