import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import MultiDropdown from '@/components/MultiDropdown';
import { CUISINES } from '@/configs/cuisinesConfig';
import { DIETS } from '@/configs/dietConfig';
import { INTOLERANCES } from '@/configs/intolerancesConfig';
import { TYPES } from '@/configs/typesConfig';
import Input from '@/components/Input';
import Text from '@/components/Text';
import s from './ModalFilterRecipes.module.scss';
import Button from '@/components/Button';
import { FilterData } from '@/types/recipes';
import { Option } from '@/types/recipes';

interface ModalFilterRecipesProps {
  onSubmit: (filters: FilterData) => void;
}

const ModalFilterRecipes: React.FC<ModalFilterRecipesProps> = ({ onSubmit }) => {
  const [selectedCuisines, setSelectedCuisines] = useState<Option[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<Option[]>([]);
  const [selectedIntolerances, setSelectedIntolerances] = useState<Option[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<Option[]>([]);
  const [includeIngredients, setIncludeIngredients] = useState<string>('');
  const [excludeIngredients, setExcludeIngredients] = useState<string>('');

  const regex = useMemo(() => /^[A-Za-zА-Яа-я\s,]+$/, []);

  useEffect(() => {
    const savedFilters = localStorage.getItem('recipeFilters');
    if (savedFilters) {
      const { cuisine, diet, intolerances, type, includeIngredients, excludeIngredients } = JSON.parse(savedFilters);

      setSelectedCuisines(cuisine || []);
      setSelectedDiets(diet || []);
      setSelectedIntolerances(intolerances || []);
      setSelectedTypes(type || []);
      setIncludeIngredients(includeIngredients || '');
      setExcludeIngredients(excludeIngredients || '');
    }
  }, []);

  const handleFiltersChange = (setter: React.Dispatch<React.SetStateAction<Option[]>>, value: Option[]) => {
    setter(value);
  };

  const handleIncludeIngredientsChange = useCallback(
    (value: string) => {
      if (regex.test(value) || value === '') {
        setIncludeIngredients(value);
      }
    },
    [regex],
  );

  const handleExcludeIngredientsChange = useCallback(
    (value: string) => {
      if (regex.test(value) || value === '') {
        setExcludeIngredients(value);
      }
    },
    [regex],
  );

  const handleReset = useCallback(() => {
    if (window.confirm('Are you sure you want to reset the filters?')) {
      setSelectedCuisines([]);
      setSelectedDiets([]);
      setSelectedIntolerances([]);
      setSelectedTypes([]);
      setIncludeIngredients('');
      setExcludeIngredients('');
      localStorage.removeItem('recipeFilters');
    }
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const filterData = {
        cuisine: selectedCuisines,
        diet: selectedDiets,
        intolerances: selectedIntolerances,
        type: selectedTypes,
        includeIngredients: includeIngredients.replace(/\s+/g, ''),
        excludeIngredients: excludeIngredients.replace(/\s+/g, ''),
      };
      localStorage.setItem('recipeFilters', JSON.stringify(filterData));
      onSubmit(filterData);
    },
    [
      excludeIngredients,
      includeIngredients,
      onSubmit,
      selectedCuisines,
      selectedDiets,
      selectedIntolerances,
      selectedTypes,
    ],
  );

  return (
    <form onSubmit={handleSubmit} className={s.root}>
      <div>
        <Text view="label">Cuisines</Text>
        <MultiDropdown
          options={CUISINES}
          value={selectedCuisines}
          onChange={(value) => handleFiltersChange(setSelectedCuisines, value)}
          getTitle={(value) => value.map((opt) => opt.value).join(', ') || 'Select cuisines'}
        />
      </div>
      <div>
        <Text view="label">Diet Preferences</Text>
        <MultiDropdown
          options={DIETS}
          value={selectedDiets}
          onChange={(value) => handleFiltersChange(setSelectedDiets, value)}
          getTitle={(value) => value.map((opt) => opt.value).join(', ') || 'Select diet preferences'}
        />
      </div>
      <div>
        <Text view="label">Intolerances</Text>
        <MultiDropdown
          options={INTOLERANCES}
          value={selectedIntolerances}
          onChange={(value) => handleFiltersChange(setSelectedIntolerances, value)}
          getTitle={(value) => value.map((opt) => opt.value).join(', ') || 'Select intolerances'}
        />
      </div>
      <div>
        <Text view="label">Meal Types</Text>
        <MultiDropdown
          options={TYPES}
          value={selectedTypes}
          onChange={(value) => handleFiltersChange(setSelectedTypes, value)}
          getTitle={(value) => value.map((opt) => opt.value).join(', ') || 'Select meal types'}
        />
      </div>
      <div>
        <Text view="label">Include Ingredients</Text>
        <Input
          value={includeIngredients}
          onChange={handleIncludeIngredientsChange}
          color="primary"
          placeholder="Enter ingredients to include (e.g., tomato, basil)"
        />
      </div>
      <div>
        <Text view="label">Exclude Ingredients</Text>
        <Input
          value={excludeIngredients}
          onChange={handleExcludeIngredientsChange}
          color="primary"
          placeholder="Enter ingredients to exclude (e.g., peanuts, gluten)"
        />
      </div>
      <div className={s.root__footer}>
        <Button className={s.root__btn} type="submit">
          Submit
        </Button>
        <Button className={s.root__btn} fill onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default memo(ModalFilterRecipes);
