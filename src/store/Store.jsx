import { configureStore } from '@reduxjs/toolkit';
import quranReducer from '../slice/QuranSlice';

export const store = configureStore({
  reducer: {
    quran: quranReducer,
  },
});
