'use strict';

Vue.component('game-feed', {
  props: ['game-data'],

  data: function data() {
    return {};
  },
  template: '<div>\n  \t\t\t\t<h1>{{gameData.name}}</h1>\n  \t\t\t\t<p>{{gameData.summary}}</p>\n  \t\t\t\t<p>{{gameData.rating}}</p>\n  \t\t\t\t<img v-for="picture in gameData.screenshots.slice(0,1)" :src="picture.url.replace(\'t_thumb\', \'t_screenshot_big\')">\n \t\t\t </div>'

});
//# sourceMappingURL=GameFeedComponent.js.map
