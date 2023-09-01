import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './reducers';

const store = configureStore({
  reducer: catalogReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;