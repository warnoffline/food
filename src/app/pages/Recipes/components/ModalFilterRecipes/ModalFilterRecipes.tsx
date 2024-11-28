import React, { useCallback } from 'react';
import MultiDropdown from '@/components/MultiDropdown';
import { CUISINES } from '@/configs/cuisinesConfig';
import { DIETS } from '@/configs/dietConfig';
import { INTOLERANCES } from '@/configs/intolerancesConfig';
import { TYPES } from '@/configs/typesConfig';
import Input from '@/components/Input';
import Text from '@/components/Text';
import s from './ModalFilterRecipes.module.scss';
import Button from '@/components/Button';
import { observer } from 'mobx-react-lite';
import { useRecipesStore } from '@/app/pages/Recipes/useRecipesStore';

type ModalFilterRecipesProps = {
  onClose: () => void;
};

const ModalFilterRecipes: React.FC<ModalFilterRecipesProps> = observer(({ onClose }) => {
  const { filtersStore, resetPage } = useRecipesStore();
  const filters = filtersStore.filterData;

  const handleReset = (event: React.FormEvent) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to reset the filters?')) {
      filtersStore.resetFilters();
    }
    onClose();
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      filtersStore.syncFilters();
      resetPage();
      onClose();
    },
    [filtersStore, onClose, resetPage],
  );

  return (
    <form onSubmit={(event: React.FormEvent) => handleSubmit(event)} className={s.root}>
      <div>
        <Text view="label">Cuisines</Text>
        <MultiDropdown
          options={CUISINES}
          value={filters?.cuisine || []}
          onChange={(value) => filtersStore.setFilters({ ...filters, cuisine: value })}
          getTitle={(value) => value.map((opt) => opt.value).join(', ') || 'Select cuisines'}
        />
      </div>
      <div>
        <Text view="label">Diet Preferences</Text>
        <MultiDropdown
          options={DIETS}
          value={filters?.diet || []}
          onChange={(value) => filtersStore.setFilters({ ...filters, diet: value })}
          getTitle={(value) => value.map((opt) => opt.value).join(', ') || 'Select diet preferences'}
        />
      </div>
      <div>
        <Text view="label">Intolerances</Text>
        <MultiDropdown
          options={INTOLERANCES}
          value={filters?.intolerances || []}
          onChange={(value) => filtersStore.setFilters({ ...filters, intolerances: value })}
          getTitle={(value) => value.map((opt) => opt.value).join(', ') || 'Select intolerances'}
        />
      </div>
      <div>
        <Text view="label">Meal Types</Text>
        <MultiDropdown
          options={TYPES}
          value={filters?.type || []}
          onChange={(value) => filtersStore.setFilters({ ...filters, type: value })}
          getTitle={(value) => value.map((opt) => opt.value).join(', ') || 'Select meal types'}
        />
      </div>
      <div>
        <Text view="label">Include Ingredients</Text>
        <Input
          text
          value={filters?.includeIngredients || ''}
          onChange={(value) => filtersStore.setIncludeIngredients(value)}
          color="primary"
          placeholder="Enter ingredients to include (e.g., tomato, basil)"
        />
      </div>
      <div>
        <Text view="label">Exclude Ingredients</Text>
        <Input
          text
          value={filters?.excludeIngredients || ''}
          onChange={(value) => filtersStore.setExcludeIngredients(value)}
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
