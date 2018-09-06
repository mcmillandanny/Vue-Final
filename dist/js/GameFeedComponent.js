'use strict';

Vue.component('game-feed', {
  props: ['game-data'],

  data: function data() {
    return {};
  },
  template: '<div>\n  \t\t\t\t<p>{{gameData.name}}</p>\n  \t\t\t\t<p>{{gameData.summary}}</p>\n  \t\t\t\t<p>{{gameData.rating}}</p>\n  \t\t\t\t<img v-for="picture in gameData.screenshots" :src="picture.url.replace(\'t_thumb\', \'t_screenshot_huge\')">\n \t\t\t </div>'

});
//# sourceMappingURL=GameFeedComponent.js.map
