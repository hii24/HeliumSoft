import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {setPopulation, setSelectCountry} from './store/population.slice';
import {parseData} from './utils';
import {AppDispatch} from './store/store';
import useGetPopulationQuery from './api/api';
import withErrorHandling from './hoc/withErrorHandling';
import ErrorDisplay from './components/ErrorDisplay';

function RootApp() {
  const {data, isLoading, error} = useGetPopulationQuery();
  const dispatch = useDispatch<AppDispatch>();

  if (error) {
    return <ErrorDisplay error={error.error} />;
  }
  useEffect(() => {
    if (data?.data) {
      dispatch(setPopulation(parseData(data.data)));
      dispatch(setSelectCountry(parseData(data.data)[0]));
    }
  }, [isLoading]);

  return (
    <>
      <HomeScreen />
    </>
  );
}
export default withErrorHandling(RootApp);
