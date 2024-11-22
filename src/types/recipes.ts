import { Ingredient } from './ingredient';

export type Option = {
  key: string;
  value: string;
};

export type Recipe = {
  id: number;
  title: string;
  image?: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  summary?: string;
  cuisines?: string[];
  diets?: string[];
  dishTypes?: string[];
  extendedIngredients?: Ingredient[];
  nutrition?: Nutrition;
  imageType?: string;
  cookingMinutes?: number | null;
  preparationMinutes?: number | null;
  license?: string;
  aggregateLikes?: number;
  sourceName?: string;
  spoonacularSourceUrl?: string;
  healthScore?: number;
  spoonacularScore?: number;
  pricePerServing?: number;
  analyzedInstructions?: AnalyzedInstructions[];
  cheap?: boolean;
  creditsText?: string;
  dairyFree?: boolean;
  gaps?: string;
  glutenFree?: boolean;
  instructions?: string;
  ketogenic?: boolean;
  lowFodmap?: boolean;
  occasions?: string[];
  sustainable?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
  veryHealthy?: boolean;
  veryPopular?: boolean;
  whole30?: boolean;
  author?: string;
  weightWatcherSmartPoints?: number;
  winePairing?: WinePairing;
};

export type Nutrition = {
  nutrients: Nutrient[];
};

export type Nutrient = {
  name?: string;
  percentOfDailyNeeds?: number;
  title?: string;
  amount?: number;
  unit?: string;
};

export type Equipment = {
  id?: number;
  name?: string;
  localizedName?: string;
  image?: string;
  temperature?: Temperature;
};

export type EquipmentShort = {
  image: string;
  name: string;
};

export type EquipmentById = {
  equipment: EquipmentShort[];
};

export type InstructionStep = {
  number: number;
  step: string;
  ingredients?: Ingredient[];
  equipment?: Equipment[];
  length?: {
    number: number;
    unit: string;
  };
};

export type AnalyzedInstructions = {
  name: string;
  steps: InstructionStep[];
};

export type WinePairing = {
  pairedWines: string[];
  pairingText: string;
};
export type Temperature = {
  number: number;
  unit: string;
};

export type Filter = {
  [key: string]: string | number | undefined;
  page?: number;
  search?: string;
  cuisine?: string;
  diet?: string;
  intolerances?: string;
  type?: string;
  includeIngredients?: string;
  excludeIngredients?: string;
};

export type FilterData = {
  cuisine?: Option[];
  diet?: Option[];
  intolerances?: Option[];
  type?: Option[];
  includeIngredients?: string;
  excludeIngredients?: string;
};

export type GetRecipesParams = {
  query?: string;
  offset?: number;
  number?: number;
  cuisine?: string;
  diet?: string;
  intolerances?: string;
  type?: string;
  includeIngredients?: string;
  excludeIngredients?: string;
  addRecipeNutrition?: boolean;
  addRecipeInformation?: boolean;
};
