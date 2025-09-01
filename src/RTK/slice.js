import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {}, // 동기적
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  }, // 비동기적 
}); 

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: ["1", "2", "3"],
  reducers: {
    addFavorite: (state, action) => {
      state.push(String(action.payload.pokemonId));
    },
    removeFavorite: (state, action) => {
      const index = state.indexOf(String(action.payload.pokemonId));
      if (index !== -1) 
        state.splice(index, 1);
    },
  },
});
