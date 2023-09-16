import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import CountrySelector from '../../components/CountrySelector/CountrySelector';
import Chart from '../../components/Chart';
import styles from './styles';
import useGetPopulationQuery from '../../api/api';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const HomeScreen: React.FC = () => {
  const {selectCountry} = useSelector((state: RootState) => state.population);
  const {isLoading} = useGetPopulationQuery();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={styles.loader}>
          <ActivityIndicator color={'#6D5FFD'} />
        </View>
      ) : (
        <>
          <View style={styles.topBackground} />
          <View style={styles.contentContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{selectCountry.State}</Text>
              <Chart />
            </View>
            <CountrySelector />
          </View>
        </>
      )}
    </View>
  );
};
export default HomeScreen;
