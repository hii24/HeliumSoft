import React from 'react';
import {View, Text} from 'react-native';

import {formatNumber, generateYValues} from '../../utils';
import ChartSegment from '../ChartSegment';

import styles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const Y_AXIS_POINT_HEIGHT = 30;

interface ChartProps {}

interface YAxisScaleProps {
  yValues: number[];
}

const Chart: React.FC<ChartProps> = () => {
  const {selectCountry} = useSelector((state: RootState) => state.population);

  const YAxisScaleData = selectCountry?.Data && generateYValues(selectCountry) || [];

  return selectCountry?.Data && (
    <View style={styles.container}>
      <YAxisScale yValues={YAxisScaleData.yValues} />
      <View style={styles.wrapper}>
        <View style={styles.items}>
          {selectCountry.Data.map((item, index) => {
            const barHeight =
              (item.Population * Y_AXIS_POINT_HEIGHT) / YAxisScaleData.step;
            return (
              <View key={index} style={styles.containerBar}>
                <ChartSegment height={barHeight} />
                <Text style={styles.year}>{item.Year}</Text>
              </View>
            );
          })}
          {YAxisScaleData.yValues.map((_, i) => {
            return (
              <View
                key={i}
                style={[
                  styles.line,
                  {
                    bottom: Y_AXIS_POINT_HEIGHT * i + 1,
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const YAxisScale: React.FC<YAxisScaleProps> = ({yValues}) => {
  return (
    <View style={styles.yAxisScaleContainer}>
      {yValues.map((value, index) => (
        <View
          key={index}
          style={[styles.yAxisValue, {height: Y_AXIS_POINT_HEIGHT}]}>
          <Text style={styles.yAxisValueText}>{formatNumber(value)}</Text>
        </View>
      ))}
    </View>
  );
};

export default Chart;
