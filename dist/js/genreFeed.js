'use strict';

Vue.component('genre', {
  props: ['game-object'],
  data: function data() {
    return {};
  },
  template: '\n  \t\t\t<div>\n  \t\t\t\t<p>{{gameObject.name}}</p>\n  \t\t\t\t<p>{{gameObject.summary}}</p>\n  \t\t\t\t<p>{{gameObject.rating}}</p>\n  \t\t\t</div>\n  \t\t\t'
});
//# sourceMappingURL=genreFeed.js.map
