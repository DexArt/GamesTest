import {LocalStorage} from "quasar";

export default {
  actions: {
    fetchGames(context){
      const games = {
        "games": [
          {
            "title": "Game 1",
            "id": "251",
            "hasDemo": "true"
          },
          {
            "title": "Game 2",
            "id": "200",
            "hasDemo": "false"
          },
          {
            "title": "Game 3",
            "id": "271",
            "hasDemo": "false"
          },
          {
            "title": "Game 4",
            "id": "1006",
            "hasDemo": "false"
          },
          {
            "title": "Game 5",
            "id": "1016",
            "hasDemo": "false"
          },
          {
            "title": "Game 6",
            "id": "1019",
            "hasDemo": "false"
          },
          {
            "title": "Game 7",
            "id": "1022",
            "hasDemo": "false"
          },
          {
            "title": "Game 8",
            "id": "1028",
            "hasDemo": "false"
          },
          {
            "title": "Game 9",
            "id": "1031",
            "hasDemo": "false"
          },
          {
            "title": "Game 10",
            "id": "1038",
            "hasDemo": "false"
          }
        ]
      }
      context.commit('updateGames',games.games)
    },
    fetchFavGames(context){
      const favGames = JSON.parse(LocalStorage.getItem("favGames") || '[]')
      context.commit('updateFavGames', favGames)
    }

  },
  mutations: {
    updateGames(state, games){
      state.games = games
    },
    updateFavGames(state, favGames){
      state.favGames = favGames
    }
  },
  state:{
    games:[],
    favGames:[]
  },
  getters:{
    allGames(state){
      return state.games
    },
    favGamesIds(state){
      return state.favGames
    },
    allFavGames(state){
      let res =[]
      res = state.games.filter(game => {
        return state.favGames.find(favId =>{
          return favId === game.id
        })
      })
      return res
    }
  }
}
