import {PopulationItem} from './commonTypes';

interface YValuesResult {
  yValues: number[];
  step: number;
}

function generateYValues(populationData: PopulationItem): YValuesResult {
  const NUM_Y_VALUES = 5;
  const MAX_Y_VALUE = Math.max(
    ...populationData.Data.map(item => Math.floor(item.Population)),
  );
  const MAGNITUDE = Math.pow(10, MAX_Y_VALUE.toString().length - 1);
  const step = Math.ceil(MAX_Y_VALUE / NUM_Y_VALUES / MAGNITUDE) * MAGNITUDE;

  const yValues = [];
  for (let i = 0; i <= NUM_Y_VALUES; i++) {
    yValues.push(step * i);
  }

  return {yValues, step};
}

function formatNumber(number: number): string {
  if (number < 1000) {
    return number.toString();
  } else if (number < 1000000) {
    return ((number / 1000) | 0) + 'K';
  } else if (number < 1000000000) {
    return ((number / 1000000) | 0) + 'M';
  } else {
    return ((number / 1000000000) | 0) + 'B';
  }
}

export {formatNumber, generateYValues};
