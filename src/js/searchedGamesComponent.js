Vue.component('game-search', {
	props: ['searched-games'],

  data: function () {
    return {
    }
  },
  template:`
        <div>
  			<h1>{{searchedGames}}</h1>	
 		 </div>`
})

