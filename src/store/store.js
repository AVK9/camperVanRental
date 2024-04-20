import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { advertsReduser } from './adverts/advertsSlice';
import { filterReduser } from './adverts/sliceFilter';
import { favoritesReduser } from './favorites/favoritesSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const persistedReduser = persistReducer(persistConfig, favoritesReduser);

export const store = configureStore({
  reducer: {
    adverts: advertsReduser,
    filter: filterReduser,
    favorites: persistedReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
