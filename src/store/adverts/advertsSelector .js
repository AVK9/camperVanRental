import { createSelector } from '@reduxjs/toolkit';

export const selectStateAdverts = (state) => state.adverts.adverts;
export const selectFilter = (state) => state.filter.filter;
export const selectLoading = (state) => state.adverts.isLoading;
export const selectError = (state) => state.adverts.error;

export const selectVisibleContacts = createSelector(
  [selectStateAdverts, selectFilter],
  (contacts, filter) => {
    return filter.length > 0
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  }
);
