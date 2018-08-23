console.log(`Vue-Final`);

let YOUR_KEY = "91cfde4de28e4fb338abbedd15dc86b5";
let searchField = document.querySelector('.searchField');
let submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', function(e) {
	e.preventDefault();
	let gameSearch  = searchField.value;
	getGameID(gameSearch);
})


function getGameID(gameSearch) {
	axios.get("http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/games/?search=" + gameSearch + "&fields=name")
	  .then(function (response) {
	  	console.log(response.data)
})
	  .catch(function (error) {
	    console.log(error);
	})
}

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


