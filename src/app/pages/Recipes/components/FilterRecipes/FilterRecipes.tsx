import Input from '@/components/Input';
import Button from '@/components/Button';
import FindIcon from '@/components/icons/FindIcon';
import s from './FilterRecipes.module.scss';
import React, { useCallback, useMemo, useState } from 'react';
import FilterIcon from '@/components/icons/FilterIcon/FilterIcon';
import Modal from '@/components/Modal/Modal';
import useModal from '@/utils/useModal';
import ModalFilterRecipes from '../ModalFilterRecipes/ModalFilterRecipes';
import ModalFindRecipeWebsite from '../ModalFindRecipeWebsite/ModalFindRecipeWebsite';
import { observer } from 'mobx-react-lite';
import { useRecipesStore } from '../../useRecipesStore';

const FilterRecipes: React.FC = observer(() => {
  const filterModal = useModal();
  const findRecipeModal = useModal();
  const { searchStore } = useRecipesStore();

  const regex = useMemo(() => /^[A-Za-zА-Яа-я\s,]+$/, []);

  const [value, setValue] = useState<string>(searchStore.query);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        searchStore.setQuery(value);
      }
    },
    [searchStore, value],
  );

  const handleQuerySubmit = useCallback(
    (value: string) => {
      searchStore.setQuery(value);
    },
    [searchStore],
  );

  const handleQueryChange = useCallback(
    (value: string) => {
      if (regex.test(value) || value === '') {
        setValue(value);
      }
    },
    [regex],
  );

  const handleClear = () => {
    setValue('');
    searchStore.setQuery('');
  };

  return (
    <div className={s.root}>
      <div className={s.root__find}>
        <Input
          className={s.root__input}
          onKeyDown={handleKeyDown}
          value={value}
          onChange={handleQueryChange}
          placeholder="Enter dishes"
        />
        <Button onClick={() => handleQuerySubmit(value)}>
          <FindIcon width={24} height={24} color="white" />
        </Button>
        {value && <Button onClick={handleClear}>Clear</Button>}
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
        <ModalFilterRecipes onClose={filterModal.closeModal} />
      </Modal>

      <Modal open={findRecipeModal.isOpen} onClose={findRecipeModal.closeModal} title="Find Recipe From Website">
        <ModalFindRecipeWebsite onClose={findRecipeModal.closeModal} />
      </Modal>
    </div>
  );
});

export default FilterRecipes;
