<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="navigationButtons">
      <div class="vertical-bottom">
        <q-btn id="mainPageBtn" @click="newRoute('/')"  color="blue-5" >All Games</q-btn>
        <q-btn id="favoritesBtn" @click="newRoute('/favorites')" color="pink-5">Favorites<div style="margin-left: 5px" class="text-subtitle1">({{favGamesIds.length}})</div></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'NavigationComponent',
    computed: mapGetters(['favGamesIds']),
    methods:{
      newRoute(routeName){
        if(this.$route.path !== routeName){
          this.$router.replace(routeName)
        }
      }
    }
  }
</script>
<style>
  #mainPageBtn{
    margin:20px;
    width:250px;
    height:60px;

  }
  #favoritesBtn{
    margin:20px;
    width:250px;
    height:60px;
  }
</style>
