import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {PopulationItem} from '../../utils/commonTypes';
import {setSelectCountry} from '../../store/population.slice';

import styles from './styles';

const CountrySelector: React.FC = () => {
  const {population, selectCountry} = useSelector(
    (state: RootState) => state.population,
  );
  const dispatch = useDispatch<AppDispatch>();

  const onHandleSelect = (country: PopulationItem) => {
    dispatch(setSelectCountry(country));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Country:</Text>
      <FlatList
        style={styles.list}
        data={population}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.State} ${index}`}
        renderItem={({item}) => {
          const active = selectCountry.State == item.State;
          return (
            <TouchableOpacity
              style={[
                styles.listItem,
                {
                  backgroundColor: active
                    ? 'rgba(109, 95, 253, 1)'
                    : 'rgba(109, 95, 253, 0.10)',
                },
              ]}
              onPress={() => onHandleSelect(item)}>
              <Text
                style={[
                  styles.listItemText,
                  {
                    color: active ? '#fff' : '#6D5FFD',
                  },
                ]}>
                {item.State}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CountrySelector;
