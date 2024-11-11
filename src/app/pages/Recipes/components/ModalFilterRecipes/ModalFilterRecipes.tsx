import React, { useCallback, useMemo, useState } from 'react';
import MultiDropdown from '@/components/MultiDropdown';
import { CUISINES } from '@/configs/cuisinesConfig';
import { DIETS } from '@/configs/dietConfig';
import { INTOLERANCES } from '@/configs/intolerancesConfig';
import { TYPES } from '@/configs/typesConfig';
import Input from '@/components/Input';
import Text from '@/components/Text';
import s from './ModalFilterRecipes.module.scss';
import Button from '@/components/Button';
import { Option } from '@/types/recipes';
import { observer } from 'mobx-react-lite';
import { useFilterRecipesStore } from '../../useFilterRecipesStore';

type ModalFilterRecipesProps = {
  onClose: () => void;
};

const ModalFilterRecipes: React.FC<ModalFilterRecipesProps> = observer(({ onClose }) => {
  const filterRecipes = useFilterRecipesStore();
  const filters = filterRecipes.filter;

  const [selectedCuisines, setSelectedCuisines] = useState<Option[]>(filters?.cuisine || []);
  const [selectedDiets, setSelectedDiets] = useState<Option[]>(filters?.diet || []);
  const [selectedIntolerances, setSelectedIntolerances] = useState<Option[]>(filters?.intolerances || []);
  const [selectedTypes, setSelectedTypes] = useState<Option[]>(filters?.type || []);
  const [includeIngredients, setIncludeIngredients] = useState<string>(filters?.includeIngredients || '');
  const [excludeIngredients, setExcludeIngredients] = useState<string>(filters?.excludeIngredients || '');

  const regex = useMemo(() => /^[A-Za-zА-Яа-я\s,]+$/, []);

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

  const handleReset = (event: React.FormEvent) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to reset the filters?')) {
      filterRecipes.resetFilters();
    }
    onClose();
  };

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
      filterRecipes.setFilters(filterData);
      onClose();
    },
    [
      excludeIngredients,
      filterRecipes,
      includeIngredients,
      onClose,
      selectedCuisines,
      selectedDiets,
      selectedIntolerances,
      selectedTypes,
    ],
  );

  return (
    <form onSubmit={(event: React.FormEvent) => handleSubmit(event)} className={s.root}>
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
});

export default ModalFilterRecipes;
