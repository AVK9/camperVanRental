import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../auth/handlers';
import { handleGetAdverts } from './advertsHandlers';
import { getAdvertsThunk } from './advertsThunk';
const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
};
const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdvertsThunk.fulfilled, handleGetAdverts)
      //   .addCase(addContactThunk.fulfilled, handleAddContact)
      //   .addCase(delContactThunk.fulfilled, handleDelContact)
      .addMatcher(({ type }) => type.endsWith('/pendihg'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const advertsReduser = advertsSlice.reducer;
