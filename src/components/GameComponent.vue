<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" id="card" flat bordered>
      <h6 id="gameTitle">{{game.title}}</h6>
      <q-card-section horizontal>
        <q-img id="gameImg"
          :src="'https://picsum.photos/id/'+game.id+'/200/250'"
        >
          <template v-slot:loading>
            <div class="text-subtitle1 text-white">
              Loading...
            </div>
          </template>
        </q-img>

        <q-card-actions id="btnGroup" vertical class="justify-top q-px-md">
          <q-btn id="favBtn" @click="updateFav"  ><q-icon :name="isFavorite() ? 'favorite' : 'favorite_border'" /></q-btn>

          <q-btn id="hasDemoBtn" v-if="game.hasDemo === 'true'" bg-color=$primary; flat color="primary">Demo</q-btn>
        </q-card-actions>

      </q-card-section>
    </q-card>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'GameComponent',
    props: {
      game: {
        type: Object
      }
    },
    computed: mapGetters(['allGames', 'favGamesIds']),
    methods:{
      updateFav(){
        const favIndex = this.favGamesIds.indexOf(this.game.id)

        if(favIndex === -1){
          this.favGamesIds.push(this.game.id)
          this.$q.localStorage.set("favGames", JSON.stringify(this.favGamesIds))

        }else{
          this.favGamesIds.splice(favIndex,1)
          this.$q.localStorage.set("favGames", JSON.stringify(this.favGamesIds))
        }
      },
      isFavorite(){
        if(this.favGamesIds.indexOf(this.game.id) === -1){
          return false
        }else{
          return true
        }

      }
    }
  }
</script>
<style>
  #card{
    background-color: #EEEEEE;
    border-radius: 15px;
    color: #000000;

    box-shadow: 10px 15px #DBDBDB;
  }
  #btnGroup{
    padding:0;
    margin-left:15px
  }
  #favBtn{
    width: 90px;
    height:50px;
    box-shadow: 1px 2px #DBDBDB;
    padding-top:0;
    margin-right: 5px;
    background-color: #CFD8E7;
    color: red;
  }
  #hasDemoBtn{
    width: 90px;
    height:50px;
    margin-top:25px;
    margin-right: 5px;
    font-size: 20px;
    box-shadow: 1px 2px #DBDBDB;
    background-color: #E0E0E0;
  }
  #gameTitle{
    margin:0;
    font-style: italic
  }
  #gameImg{
    height: 200px;
    width: 250px
  }
</style>
