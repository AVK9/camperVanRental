import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    delFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (data) => data._id !== action.payload._id
      );
    },
  },
});

export const { addFavorite, delFavorite } = favoritesSlice.actions;

export const favoritesReduser = favoritesSlice.reducer;
