//https://pokeapi.co/
//Utilizando callbacks o promesas
//Reto :Programama que te permita introducir un nombre o número de pokemon por la consola y mostrar información del pokemon (tipo y poderes).
const fetch = require('node-fetch');
const readline = require('readline-sync')
var id= readline.question("Ingrese el ID del pokemon: ")
async function getDate(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
getDate("https://pokeapi.co/api/v2/pokemon/" + id + "/")
  .then((result) => {
    console.log("Nombre del pokemón:", result.name);
    console.log("Poderes:");
    for (propiedad of result.abilities){
  console.log("-"+propiedad.ability.name);
}

  })
  .catch((err) => {
    console.log("errorrr", err);
  });
