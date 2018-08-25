"use strict";

Vue.component("user-input", {
    props: ["game"],
    data: function data() {
        return {};
    },
    template: "\n        <div>\n         <select>\n            <option>---Pick a genre---</option>\n            <option>Sports</option>\n            <option>Adventure</option>\n            <option>Action</option>\n            <option>Roleplaying</option>\n            <option>Fantasy</option>\n            <option>Sci-fi</option>\n            <option>Puzzle</option>\n\n        </select>\n            <button>Submit</button>\n        </div>\n        "
});
//# sourceMappingURL=game-search.js.map
