import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const existingFavorite = state.favoritesList.find(
        (item) => item.id === payload.id
      );

      if (!existingFavorite) {
        state.favoritesList.push(payload);
      } else {
        state.favoritesList = state.favoritesList.filter(
          (item) => item.id !== payload.id
        );
      }

      localStorage.setItem(
        "favoritesList",
        JSON.stringify(state.favoritesList)
      );
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.favoritesList;

export const favoritesReducer = favoritesSlice.reducer;
