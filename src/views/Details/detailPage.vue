<template>
  <div>
   <v-row>
    <v-col>
        <h1 class="d-flex justify-center align-center">{{ data.symbol }}</h1>
      </v-col>
        </v-row>
   </div>
</template>

<script lang="ts">
import DataModels from "@/models/DataModels";
import { defineComponent } from "@vue/runtime-core";
import { mapGetters } from "vuex";
export default defineComponent({
  data() {
    return {
      data: new DataModels(),
    };
  },
  computed: {
    ...mapGetters(["getItems"])
  },
  mounted(){
    this.data = this.getItems.find((x:DataModels) => {
      console.log("route",this.$route);
      
      return x.market_cap_rank === Number(this.$route.params.id)
    })
  }
});
</script>
