import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InputDataItem } from '../utils/commonTypes';
type GetPopulationResponse = { data: InputDataItem[] };

export const populationApi = createApi({
  reducerPath: 'populationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://datausa.io/api' }),
  endpoints: (builder) => ({
    getPopulation: builder.query<GetPopulationResponse, void>({
      query: () => 'data?drilldowns=State&measures=Population',
    }),
  }),
});

export const useGetPopulationQuery = populationApi.endpoints.getPopulation.useQuery;

