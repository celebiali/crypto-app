<template>
  <div>
    <div class="taginputWrapper">
      <div class="tags" v-for="(item,index) in tagList" :key="index">
        <span class="content">{{item}}</span>
        <span class="close">X</span>
      </div>
      <div
        style="
          border: 1px solid green;
          max-width: 40%;
        "
        class="ma-auto mt-4 pa-2 d-flex taginput"
      >
        <input
          type="search"
          placeholder="Search"
          v-model="searchText"
          class="rounded-pill"
          style="width: 100%; outline: none"
        @keypress="addToList"/>
        <span
          class="mdi mdi-magnify mdi-24px"
          style="color: green"
          size="lg"
        ></span>
      </div>
    </div>
    <div class="error" v-if="error">
      <span>Error</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      isLoading: true,
      items: [],
      secilenLocation: "",
      ind: "",
      searchText: "" as string,
      result: [],
      value: "",
      show: true,
      tagList: new Array<string>(),
      error:false
    };
  },
  methods: {
     addToList(e:KeyboardEvent){
      if(e.code==="Enter"){
        console.log("charcod",e);
        
        this.tagList.push(this.searchText)
        this.searchText=""
      }
     }
  },  
  watch: {
    searchText() {
      this.$emit("searchText", this.searchText);
      console.log(this.searchText);
    },
  },
});
</script>

<style>
.error {
  color: rgb(0, 255, 0);
  text-align: left;
  font-size: 12px;
  font-weight: bold;
  margin-top: 4px;
}
.taginputWrapper {
  display: flex;
  box-sizing: border-box;
  border-radius: 4px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
}
.tags {
  color: #ffffff;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 4px;
  margin-right: 4px;
  box-sizing: border-box;
  text-align: center;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;
  height: 20px;
  background: lightgreen;
}
.close {
  font-size: 10px;
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
}
.taginput {
  flex: 1;
  height: 40px;
  display: flex;
  justify-content: flex-start;

  align-items: center;
}

.taginput input {
  flex: 1;
  min-width: 100px;
  padding-left: 10px;
  border: none;
  outline: none;
}
</style>