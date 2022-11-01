<template>
    <input-component @searchText="deneme"/>
  <v-row >
    <v-col  v-for="(items, i) in searchItem" :key="i">
      <v-card width="20em" height="20em"  style="margin-top:100px" >
      <div class="d-flex justify-space-around">
        <div>
          <img
        :src="items.image"
        style="padding-left: 15px;  padding-top: 15px; height: 75px; width: 75px"
          />
        </div>
        <div >
          <v-card-title>{{ items.name }}</v-card-title>
          <v-card-title>{{ items.symbol }}</v-card-title>
        </div>
      </div>
    <v-card-text>
          <span class="d-flex">   
          <p>High 24 hours:</p><p style="color:green">{{ items.high_24h }}$</p>
        </span>
        <br>
        <span class="d-flex">   
          <p>Low 24 hours:</p><p style="color:red">{{ items.low_24h }}$</p>
         </span>  
         <br>      
         <span class="d-flex">   
          <p>Last Updated:</p><p>{{items.last_updated.slice(0,10)}} {{items.last_updated.slice(11,19)}}</p>  
         </span>
         <br>
      <div class="d-flex justify-center align-center pa-8">
        <v-btn icon >
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
      <v-btn color="green lighten-2" to="/details">DETAILS</v-btn>
      </div>
    </v-card-text>
  </v-card>
    </v-col>
  </v-row>
 

</template>

<script lang="ts">
import store from "../../store";
import { defineComponent } from "vue";
// Components
import inputComponent from "@/components/inputComponent.vue"

export default defineComponent({
  name: "HomeView",
  data(){
    return {
      search:"",
    }
  },
  methods: {
    deneme(value:string){
        this.search = value
    }
  },
  computed: {
    //hesaplama sürekli işlemlerde
    searchItem(){
        if(this.search.length >= 2){
          const fixSearch = this.search.toLowerCase().replace(/\s/g, "");
          return store.getters.getItem.filter((x:any) =>
          x.name.toLowerCase().replace(/\s/g, "").includes(fixSearch))
        } else {
          return store.getters.getItem
        }
    }
  },
  components: {
    inputComponent
  }
});
</script>
