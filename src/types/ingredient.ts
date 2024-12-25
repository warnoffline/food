import { Nutrition } from './recipes';

export type Ingredient = {
  id: number;
  original: string;
  originalName: string;
  name: string;
  amount?: number;
  unit?: string;
  unitShort?: string;
  unitLong?: string;
  possibleUnits?: string[];
  estimatedCost?: {
    value?: number;
    unit?: string;
  };
  consistency?: string;
  shoppingListUnits?: string[];
  aisle?: string;
  image?: string;
  meta?: string[];
  nutrition?: Nutrition;
  categoryPath?: string[];
};

export type Measure = {
  metric: {
    amount: number;
    unitLong: string;
    unitShort: string;
  };
  us: {
    amount: number;
    unitLong: string;
    unitShort: string;
  };
};

export type IngredientsLoadParams = {
  query: string;
  offset: number;
  number: number;
  metaInformation: boolean;
};
