import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (pokemonIds) => {
    const NumberArray = Array.from( { length: pokemonIds }, (_, i) => i + 1 );
    const fetchAPI = async (pokemonId) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      const pokemonData = {
        id: `${pokemonId}`,
        name: data.names.find((el) => el.language.name === "ko").name,
        description: data.flavor_text_entries.find((el) => el.language.name === "ko").flavor_text,
        back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png',
        front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png'
      };
        return pokemonData;
    };
    return await Promise.all(pokemonIds.map((el) => fetchAPI(el)));
  }
);
