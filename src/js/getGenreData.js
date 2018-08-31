Vue.component('game-feed', {
	props: ['game-data'],

  data: function () {
    return {
    }
  },
  template: `<div>
 			<genre v-for="gamename in gameData" :game-object="gamename"></genre>

 			 </div>`
})