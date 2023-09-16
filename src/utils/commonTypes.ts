export type InputDataItem = {
  State: string;
  Year: number;
  Population: number;
};

export type PopulationItem = {
  State: string;
  Data: PopulationDataItem[];
};

export type PopulationDataItem = {
  Year: number;
  Population: number;
};
