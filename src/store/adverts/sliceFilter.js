import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  type: '',
  equipment: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterAdvertsAction: (state, { payload }) => {
      state.filter = payload;
    },
    typeAdvertsAction: (state, { payload }) => {
      state.type = payload;
    },
    equipmentAdvertsAction: (state, { payload }) => {
      state.equipment.push(payload);
      // state.equipment = [...state.equipment, payload];
    },
  },
});

export const {
  filterAdvertsAction,
  typeAdvertsAction,
  equipmentAdvertsAction,
} = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
