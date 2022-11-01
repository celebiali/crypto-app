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
import {  mapActions } from "vuex";
export default defineComponent({
  data() {
    return {
      data: new DataModels(),
    };
  },
  computed: {
    ...mapActions(["setItems"])
  },

});
</script>
