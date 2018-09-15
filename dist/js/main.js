'use strict';

console.log('Main JS');

var srchBar = document.querySelector('.search');

var app = new Vue({
	el: "#search-app",
	data: {
		userSearch: "",
		searchedGames: []

	},
	methods: {
		searchGames: function searchGames() {
			var _this = this;

			console.log('this was searched ' + this.userSearch);
			var SEARCH_GAME = 'http://circuslabs.net/proxies/igdb/' + '?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/games/?search=' + this.userSearch + '&fields=name,summary';
			axios.get(SEARCH_GAME).then(function (response) {
				console.log(response.data);
				_this.searchedGames = response.data[0].name;
				_this.userSearch = "";
			}).catch(function (error) {
				console.warn("not working", error);
			});
		}
	}
});

// srchBar.addEventListener('keypress', function(e) {
// 	var key = e.which || e.keycode;
// 	if (key === 13) {
// 		let userSearch = srchBar.value;

// 		console.log('You searched for ' + userSearch);

// 	axios
// 		.get(SEARCH_GAME)
//   			.then(function (response) {
//     		// handle success
//     		console.log(response);
//   		})
//   			.catch(function (error) {
//     		// handle error
//     		console.log(error);
//   		})
//   			.then(function () {
//     		// always executed
//   		});
// 	}
// })
//# sourceMappingURL=main.js.map
