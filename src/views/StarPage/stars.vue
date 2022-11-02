<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <ul v-for="(items,i) in getBasketItem" :key="i">
      <li>{{items.id}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapGetters } from "vuex";

export default defineComponent({
    computed: {
      ...mapGetters(["getBasketItem"])
    }
})
</script>

<style>

</style>