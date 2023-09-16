import {configureStore, combineReducers} from '@reduxjs/toolkit';
import populationReducer from './population.slice';
import { populationApi } from '../api/populationApi';

const rootReducer = combineReducers({
  [populationApi.reducerPath]: populationApi.reducer,
  population: populationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(populationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
