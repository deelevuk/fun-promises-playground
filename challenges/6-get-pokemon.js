const axios = require('axios')

async function getAllPokemon() {
   const response = await axios 
  .get("https://pokeapi.co/api/v2/pokemon")
console.log(response.data.results)
  return response
}

getAllPokemon()
        
      







/*
You will need to install the axios package (npm install axios@1.1.3) and require it into the 6-get-pokemon.js file.

Note: You will need install version 1.1.3!

axios is a promise based library which allows us to make requests on the internet to websites, databases and APIs (Application Programming Interface: a software intermediary that allows two applications to talk to each other.). axios provides us with a few methods to accomplish this, for today we will focus on using the .get method, which will fetch some data for us.

Use the axios .get method to make a request to the https://pokeapi.co/api/v2/pokemon api and log the list of pokemon results from the object the api responds with.
*/