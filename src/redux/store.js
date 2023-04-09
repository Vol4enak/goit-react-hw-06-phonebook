import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ContactSlice } from './contactLogic';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactReducer = persistReducer(
  persistConfig,
  ContactSlice.reducer
);

export const store = configureStore({
  reducer: { phoneBook: persistedContactReducer },
});

export const persistor = persistStore(store);