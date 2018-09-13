'use strict';

Vue.component('game-feed', {
  props: ['game-data'],

  data: function data() {
    return {};
  },
  template: '\n        <div>\n  \t\t\t\t<h1>{{gameData.name}}</h1>\n  \t\t\t\t<p>{{gameData.summary}}</p>\n  \t\t\t\t<p>{{gameData.rating}}</p>\n  \t\t\t\t<img v-if="gameData.screenshots"  :src="gameData.screenshots[0].url.replace(\'t_thumb\', \'t_screenshot_med\')">\n \t\t\t </div>'
});
//# sourceMappingURL=GameFeedComponent.js.map
