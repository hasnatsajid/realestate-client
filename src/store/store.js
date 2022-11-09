import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import listingsReducer from './slices/listingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    listing: listingsReducer,
  },
});
