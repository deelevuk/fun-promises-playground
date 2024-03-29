const inquirer = require('inquirer')
const axios = require('axios')

inquirer
  .prompt([
    {
      name: 'name1',
      message: "Which Pokemon do you want to find?",
      type: "input"
    },
  ])
  .then(function (answer) {
    const response = axios .get(`https://pokeapi.co/api/v2/pokemon/${answer}`)
    console.log(response.answer.data)
})
.catch((error) => {
    console.log(error)
})









/*
async function getAllPokemon() {
   const response = await axios 
  .get("https://pokeapi.co/api/v2/pokemon")
console.log(response.data.results)
  return response
}

getAllPokemon()
In 7-get-single-pokemon.js, use inquirer to ask the user for a number that will represent the pokemon id, and then use axios to make a request to fetch data from https://pokeapi.co/api/v2/pokemon/6 to get info about the pokemon with that id.

Log the name of the pokemon with that id.
Use a single catch method to handle if the axios request gives back a 404 - in this case, log a user friendly error saying that the pokemon does not exist.
Hint: There are currently no pokemon in the database with IDs between 19999 and 29999 so you can use a number between these to test that your catch method is working.
*/