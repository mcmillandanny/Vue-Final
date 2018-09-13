Vue.component('game-feed', {
	props: ['game-data'],

  data: function () {
    return {
    }
  },
  template: `<div>
  				<h1>{{gameData.name}}</h1>
  				<p>{{gameData.summary}}</p>
  				<p>{{gameData.rating}}</p>
  				<img v-for="picture in gameData.screenshots.slice(0,1)" :src="picture.url.replace('t_thumb', 't_screenshot_big')">
 			 </div>`

})