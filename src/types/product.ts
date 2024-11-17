import { Nutrient } from './recipes';

export type Product = {
  id: number;
  aisle?: string;
  badges?: string[];
  category?: string;
  description?: string;
  image?: string;
  importantBadges?: string[];
  ingredientCount?: number;
  ingredientList?: string;
  title?: string;
  nutrition?: {
    calories?: string;
    nutrients?: Nutrient[];
  };
  ingredients: shortIngredient[];
};

type shortIngredient = {
  description?: string;
  name?: string;
  safety_level?: string;
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

export type ProductsLoadParams = {
  query: string;
  offset: number;
  number: number;
  addProductInformation: boolean;
};

export type ProductsResponse = {
  products: Product[];
  totalProducts: number;
  type: string;
  offset: number;
  number: number;
};
