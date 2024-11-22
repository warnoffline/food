import { Recipe } from './recipes';

export type Week = {
  monday: WeekDay;
  tuesday: WeekDay;
  wednesday: WeekDay;
  thursday: WeekDay;
  friday: WeekDay;
  saturday: WeekDay;
  sunday: WeekDay;
};

export type NutrientShort = {
  calories?: number;
  protein?: number;
  fat?: number;
  carbohydrates?: number;
};

export type WeekDay = {
  meals: Recipe[];
  nutrients: NutrientShort;
};
