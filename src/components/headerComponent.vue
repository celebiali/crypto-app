<template>
  <v-card>
    <v-layout>
      <v-app-bar color="green" prominent>
        <v-btn to="/">
            CRYPTO PROJECT           
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/stars">
          <div>
            <v-icon>mdi-thumb-up</v-icon>
            <div v-if="getBasket.length"
      class="ml-1 pa-1 bg-lightgreen rounded-circle d-inline-block"
    >{{getBasket.length}}</div>
          </div>
        </v-btn>
        <v-btn variant="text"  to="/login">Login</v-btn>
      </v-app-bar>
      <v-main />
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";

import { defineComponent } from "@vue/runtime-core";


export default defineComponent({

  computed: {
    getBasket(){
      const item = localStorage.getItem("basket") 
      console.log("sdas",item?.length);
      
      if(item){
        let arr = JSON.parse(item)  
        return arr 
      } else {
        return store.getters.getBasketItem
      }
    }
  },
 
})

</script>