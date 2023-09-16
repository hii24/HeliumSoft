import {InputDataItem, PopulationItem, PopulationDataItem} from './commonTypes';

function parseData(data: InputDataItem[]): PopulationItem[] {
  const result: Record<string, PopulationDataItem[]> = {};

  data.forEach(item => {
    const {State, Year, Population} = item;
    result[State] = result[State] || [];
    result[State].push({Year, Population});
  });

  const parsedData: PopulationItem[] = [];
  for (const [State, Data] of Object.entries(result)) {
    parsedData.push({State, Data});
  }

  return parsedData;
}

export {parseData};