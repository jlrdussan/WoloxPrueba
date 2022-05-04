import axios from "axios";

async function getPokemon(limit) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`
    );
    if (response.data.results) {
      response.data.results = await getQuery(response.data.results);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getPokemonIdName(search) {
  try {
    const response = await axios.get(
      ` https://pokeapi.co/api/v2/pokemon/${search} `
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getPokemonUrl(url) {
  try {
    const response = await axios.get(url);
    if (response.data.results) {
      response.data.results = await getQuery(response.data.results);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getQuery(data) {
  data.map((y) => {
    const url = y.url.split("/").filter((x) => {
      return !!x;
    });
    y.id = url[url.length - 1];
  });
  return data;
}

export { getPokemon, getPokemonIdName, getPokemonUrl };
