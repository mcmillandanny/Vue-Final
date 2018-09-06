Vue.component('game-feed', {
	props: ['game-data'],

  data: function () {
    return {
    }
  },
  template: `<div>
  				<p>{{gameData.name}}</p>
  				<p>{{gameData.summary}}</p>
  				<p>{{gameData.rating}}</p>
  				<img v-for="picture in gameData.screenshots" :src="picture.url.replace('t_thumb', 't_screenshot_huge')">
 			 </div>`

})