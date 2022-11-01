<template>
  <v-app>
    <v-main>
    <header-component />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import headerComponent from "../src/components/headerComponent.vue"

export default defineComponent({
  components: { 
    headerComponent,
  },
  name: 'App',
  data () {
    return {
      //
    }
  },
 
})
</script>
