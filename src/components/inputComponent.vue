<template>
 <div
          style="
            border: 1px solid green;
            max-width: 40%;
            outline: none;
            cursor: pointer;
          "
          class="ma-auto mt-4  pa-2 d-flex"
        >
          <input
            type="search"
            placeholder="Search"
            v-model="searchText"
            class="rounded-pill"
            style="width: 100%; outline: none"
          />
          <span class="mdi mdi-magnify mdi-24px " style="color:green" size="lg"></span>
        </div>
</template>

<script>
export default {
  data() {
        return {
            isLoading:true,
            items: [],
            secilenLocation: "",
            ind: "",
            searchText: "",
            result: [],
            value:"",
            show:true
        };
    },
    watch:{
    searchText(){
     this.$emit('searchText', this.searchText)
    }
  }   

}
</script>

<style>

</style>