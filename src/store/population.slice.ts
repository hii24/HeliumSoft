import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {PopulationItem} from '../utils/commonTypes';

export interface PopulationState {
  population: PopulationItem[];
  selectCountry: PopulationItem;
}

const initialState: PopulationState = {
  population: [],
  selectCountry: {
    State: '',
    Data: [],
  },
};

const populationSlice = createSlice({
  name: 'population',
  initialState,
  reducers: {
    setSelectCountry: (state, action: PayloadAction<PopulationItem>) => {
      state.selectCountry = action.payload;
    },
    setPopulation: (state, action: PayloadAction<Array<PopulationItem>>) => {
      state.population = action.payload;
    },
  },
});

export const {setSelectCountry, setPopulation} = populationSlice.actions;
export default populationSlice.reducer;
