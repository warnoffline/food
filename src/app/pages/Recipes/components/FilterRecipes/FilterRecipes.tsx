import Input from '@/components/Input';
import Button from '@/components/Button';
import FindIcon from '@/components/icons/FindIcon';
import s from './FilterRecipes.module.scss';
import React, { memo, useCallback, useState } from 'react';
import FilterIcon from '@/components/icons/FilterIcon/FilterIcon';
import Modal from '@/components/Modal/Modal';
import useModal from '@/utils/useModal';
import ModalFilterRecipes from '../ModalFilterRecipes/ModalFilterRecipes';
import { FilterData } from '@/types/recipes';
import ModalFindRecipeWebsite from '../ModalFindRecipeWebsite/ModalFindRecipeWebsite';

type FilterRecipesProps = {
  onFilterSubmit: (filters: FilterData) => void;
  handleQuerySubmit: (query: string) => void;
};

const FilterRecipes: React.FC<FilterRecipesProps> = ({ handleQuerySubmit, onFilterSubmit }) => {
  const filterModal = useModal();
  const findRecipeModal = useModal();
  const [value, setValue] = useState<string>(sessionStorage.getItem('recipe-query') || '');

  const handleFilterSubmit = useCallback(
    (filters: FilterData) => {
      onFilterSubmit(filters);
      filterModal.closeModal();
    },
    [filterModal, onFilterSubmit],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleQuerySubmit(value);
      }
    },
    [handleQuerySubmit, value],
  );

  const handleClear = () => {
    sessionStorage.setItem('recipe-query', '');
    setValue('');
    handleQuerySubmit('');
  };

  return (
    <div className={s.root}>
      <div className={s.root__find}>
        <Input
          className={s.root__input}
          onKeyDown={handleKeyDown}
          value={value}
          onChange={setValue}
          placeholder="Enter dishes"
        />
        <Button onClick={() => handleQuerySubmit(value)}>
          <FindIcon width={24} height={24} color="white" />
        </Button>
        {value && <Button onClick={() => handleClear()}>Clear</Button>}
      </div>
      <div className={s.root__select}>
        <div className={s.root__filters}>
          <Button onClick={findRecipeModal.openModal} className={s.root__button}>
            Get Recipe From Website
          </Button>
        </div>
        <div className={s.root__filters}>
          <Button onClick={filterModal.openModal} className={s.root__button}>
            Filters
            <FilterIcon color="white" />
          </Button>
        </div>
      </div>
      <Modal open={filterModal.isOpen} onClose={filterModal.closeModal} title="Filters">
        <ModalFilterRecipes onSubmit={handleFilterSubmit} />
      </Modal>

      <Modal open={findRecipeModal.isOpen} onClose={findRecipeModal.closeModal} title="Find Recipe From Website">
        <ModalFindRecipeWebsite onClose={findRecipeModal.closeModal} />
      </Modal>
    </div>
  );
};

export default memo(FilterRecipes);
