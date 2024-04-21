import { createSelector } from '@reduxjs/toolkit';

export const selectStateAdverts = (state) => state.adverts.adverts;
export const selectFilter = (state) => state.filter.filter;
export const selectType = (state) => state.filter.type;
export const selectLoading = (state) => state.adverts.isLoading;
export const selectError = (state) => state.adverts.error;

export const selectVisibleAdverts = createSelector(
  [selectStateAdverts, selectFilter],
  (adverts, filter) => {
    return filter.length > 0
      ? adverts.filter((advert) =>
          advert.location.toLowerCase().includes(filter.toLowerCase())
        )
      : adverts;
  }
);

export const selectVisibleVehicleType = createSelector(
  [selectVisibleAdverts, selectType],
  (adverts, filter) => {
    return filter.length > 0
      ? adverts.filter((advert) => advert.form.includes(filter))
      : adverts;
  }
);
