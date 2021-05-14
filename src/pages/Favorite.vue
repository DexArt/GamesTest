<template>
  <q-page style="height:100%">
    <div class="content">
      <div class="flex flex-top" v-if="allFavGames.length > 0">
        <GameComp
          v-for="game in allFavGames"
          :key="game.id"
          :game="game"
        />
      </div>
      <div v-else class="absolute-center">
        <q-icon
          name="sports_esports"
          size="150px"
          color="primary"
        />
        <div class="text-h5 text-primary text-center">
          No Games
        </div>
      </div>
    </div>
    <nav-comp />
  </q-page>
</template>

<script>
  import GameComponent from 'components/GameComponent.vue'
  import NavigationComponent from "components/NavigationComponent";
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Favorites',
    computed: mapGetters(['allFavGames']),
    methods: mapActions(['fetchGames', 'fetchFavGames']),
    mounted() {
      this.fetchGames()
      this.fetchFavGames()
    },
    components:{
      GameComp: GameComponent,
      NavComp: NavigationComponent
    }
  }
</script>
