console.log(`Vue-Final`);

let YOUR_KEY = "91cfde4de28e4fb338abbedd15dc86b5";



axios.get("http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/games/1942?fields=*")
  .then(function (response) {
    console.log(response.data);
})
  .catch(function (error) {
    // handle error
    console.log(error);
})