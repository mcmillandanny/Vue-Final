"use strict";

console.log("Vue-Final");

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var app = new Vue({
	el: "#app",
	data: {
		gameData: []
		// imagedata: [],
	},
	methods: {
		getdata: function getdata() {
			var _this = this;

			var randomNumber = Math.floor(Math.random() * 60000);
			console.log(randomNumber);
			var IGDB_SEARCH_URL = "http://circuslabs.net/proxies/igdb/\n\t\t\t\t?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/\n\t\t\t\tgames/" + randomNumber + "?fields=name,genres,rating,screenshots,summary,rating";
			axios.get(IGDB_SEARCH_URL).then(function (response) {
				console.log("IGDB responded with", response.data);
				_this.gameData = response.data[0];
				// this.imagedata = response.data[0].screenshots;
				// console.log(this.gameData, this.imagedata);
				// for (var i = 0; i < this.imagedata.length; i++) {
				// 	this.imagedata[i]
				// }
			}).catch(function (error) {
				console.warn("not working", error);
			});
		}
	}
});

function getGameID(gameSearch) {
	var searchBtn = document.querySelector('.search-input');
	axios.get("http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/games/?search=" + gameSearch + "&fields=name,genres,rating,screenshots,summary").then(function (response) {
		console.log(response.data);
	}).catch(function (error) {
		console.log(error);
	});
}

// https:images.igdb.com/igdb/image/upload/t_thumb/m9evs7rnwqh7nhrj11xw.jpg -replace t_thumb with t_cover_big for better
// screenshots
//# sourceMappingURL=main.js.map
