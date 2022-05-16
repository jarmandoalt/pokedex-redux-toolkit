import Axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

export async function getPokemonList() {
  try {
    const response = await Axios({
      method: "GET",
      url: `${baseUrl}`
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getPokemon(number) {
  try {
    const response = await Axios({
      method: "GET",
      url: `${baseUrl}${number}`
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}