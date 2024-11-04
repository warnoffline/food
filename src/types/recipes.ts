export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type RecipesResponse = {
  offset: number;
  number: number;
  results: Recipe[];
  totalResults: number;
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

export type Ingredient = {
  aisle?: string;
  amount?: number;
  consistency?: string;
  id: number;
  image: string;
  measures?: Measure;
  meta?: string[];
  name?: string;
  nameClean?: string;
  original?: string;
  originalName?: string;
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

export type RecipeById = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  cookingMinutes: number | null;
  preparationMinutes: number | null;
  license: string;
  aggregateLikes?: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  analyzedInstructions: AnalyzedInstructions[];
  cheap: boolean;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  occasions: string[];
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30: boolean;
  author?: string;
  weightWatcherSmartPoints: number;
  dishTypes: string[];
  extendedIngredients: Ingredient[];
  summary: string;
  winePairing: WinePairing;
};
