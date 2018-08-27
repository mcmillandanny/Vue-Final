"use strict";

console.log("Vue-Final");

var randomNumber = Math.floor(Math.random() * 100000 + 1);
console.log(randomNumber);
var IGDB_SEARCH_URL = "http://circuslabs.net/proxies/igdb/\n\t?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/\n\tgames/" + randomNumber + "?fields=name,genres,rating,screenshots,summary,rating";

var app = new Vue({
	el: "#app",
	data: {
		gameData: []
	},
	methods: {
		getdata: function getdata() {
			var _this = this;

			axios.get(IGDB_SEARCH_URL).then(function (response) {
				console.log("IGDB responded with", response.data);
				_this.gameData = response.data;
			}).catch(function (error) {
				console.warn("not working", error);
			});
		}

	}
});

//  const IGDB_GENRE_URL = (`http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/genres/?search=1&fields=name`)

// var app = new Vue ({
// 	el: "#app",
// 	data: {
// 		genreData: [],
// 		game: '',

// 	},
// 	created: function() {
// 		axios
// 			.get(IGDB_GENRE_URL)
// 	  		.then((response) => {
// 	  			console.log("GENRE DATA", response.data)
// 	  			this.genreData = response.data; 
// 	  		})
// 	  		.catch((error) => {
// 	  			console.warn("not working", error);
// 	  		})
// 	},
// })

// let YOUR_KEY = "91cfde4de28e4fb338abbedd15dc86b5";
// let searchField = document.querySelector('.searchField');
// let submitBtn = document.querySelector('button');

// submitBtn.addEventListener('click', function(e) {
// 	e.preventDefault();
// 	let gameSearch  = searchField.value;
// 	getGameID(gameSearch);

// })


// function getGameID(gameSearch) {
// 	axios.get("http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/games/?search=" + gameSearch + "&fields=name,genres,rating,screenshots,summary ")
// 	  .then(function (response) {
// 	  	console.log(response.data)
// })
// 	  .catch(function (error) { 
// 	    console.log(error);
// 	})      
// }


// let app = new Vue ({
// 	el: "#app",
// 	data: {
// 		gameData: [],
// 		preSetData: 'halo', 
// 	},
// 	created: function() {
// 		axios
// 			.get(IGDB_SEARCH_URL)
// 	  		.then((response) => {
// 	  			console.log("idgb", response.data)
// 	  			this.gameData = response.data;
// 	  		})
// 	  		.catch((error) => {
// 	  			console.warn("not working", error);
// 	  		})
// 	},
// 	methods: {
// 		addCheese: function() {
// 			console.log('', this.gameData)
// 			// this.cheeses.push( this.newCheese)
// 			// this.newCheese = '';
// 	},
// })


// function getGameFromID(id) {
// 	axios.get("http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/games/" + id + "?fields=id,name")
// 	  	.then(function (response) {
// 	    	console.log(response.data);
// 	    		console.log(id);
// 		})
// 	  	.catch(function (error) {
// 	    	console.log(error);
// 	})
// }

// When searched we are getting the ID value from a game, need to figure out how to translate that to an actual title of a game.
// need a loop in first axios call. need to grab one ID from the ARRAY I AM TIRED
// if halo is searched it returns 41608 which is the ID number of Halo 1
//# sourceMappingURL=main.js.map
