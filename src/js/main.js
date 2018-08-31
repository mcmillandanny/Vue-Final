console.log(`Vue-Final`);

var app = new Vue ({
	el: "#app",
	data: {
		gameData: [],
		imagedata: [],
	},
	methods: {
		getdata: function() {

			let randomNumber = Math.floor(Math.random() * 60000)
		 		console.log(randomNumber)
			const IGDB_SEARCH_URL = (`http://circuslabs.net/proxies/igdb/
				?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/
				games/` + randomNumber + `?fields=name,genres,rating,screenshots,summary,rating`)
			  
			axios
				.get(IGDB_SEARCH_URL)
	  			.then((response) => {
		  			console.log("IGDB responded with", response.data)
		  			this.gameData = response.data;
		  			this.imageData = response.data.screenshots;
		  			console.log(this.gameData)

	  			})
	  		  		.catch((error) => {
		  			console.warn("not working", error);
	  		})
		},
	}
})


// /  const IGDB_GENRE_URL = (`http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/genres/?search=1&fields=name`)

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

// https:images.igdb.com/igdb/image/upload/t_thumb/m9evs7rnwqh7nhrj11xw.jpg -replace t_thumb with t_cover_big for better
// screenshots

// When searched we are getting the ID value from a game, need to figure out how to translate that to an actual title of a game.
// need a loop in first axios call. need to grab one ID from the ARRAY I AM TIRED
// if halo is searched it returns 41608 which is the ID number of Halo 1


