import Input from '@/components/Input';
import Button from '@/components/Button';
import FindIcon from '@/components/icons/FindIcon';
import s from './FilterRecipes.module.scss';
import React, { useCallback, useState } from 'react';
import FilterIcon from '@/components/icons/FilterIcon/FilterIcon';
import Modal from '@/components/Modal/Modal';
import useModal from '@/utils/useModal';
import ModalFilterRecipes from '../ModalFilterRecipes/ModalFilterRecipes';
import ModalFindRecipeWebsite from '../ModalFindRecipeWebsite/ModalFindRecipeWebsite';
import { observer } from 'mobx-react-lite';
import { useRecipesStore } from '../../useRecipesStore';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

const FilterRecipes: React.FC = observer(() => {
  const filterModal = useModal();
  const findRecipeModal = useModal();
  const { searchStore, setRecipes, resetPage } = useRecipesStore();

  const [value, setValue] = useState<string>(searchStore.query);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        searchStore.setQuery(value);
        resetPage();
      }
    },
    [resetPage, searchStore, value],
  );

  const handleQuerySubmit = useCallback(
    (value: string) => {
      searchStore.setQuery(value);
      resetPage();
    },
    [resetPage, searchStore],
  );

  const handleClear = () => {
    setRecipes([]);
    setValue('');
    resetPage();
    searchStore.setQuery('');
  };

  return (
    <div className={s.root}>
      <motion.div {...animation} transition={{ duration: 0.5, delay: 0.3 }} className={s.root__find}>
        <Input
          text
          className={s.root__input}
          onKeyDown={handleKeyDown}
          value={value}
          onChange={setValue}
          placeholder="Enter dishes"
        />
        <Button
          onClick={() => handleQuerySubmit(value)}
          actionSlot={<FindIcon width={24} height={24} color="white" />}
        />
        {value && <Button onClick={handleClear}>Clear</Button>}
      </motion.div>
      <div className={s.root__select}>
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.4 }} className={s.root__filters}>
          <Button onClick={findRecipeModal.openModal} className={s.root__button}>
            Get Recipe From Website
          </Button>
        </motion.div>
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.5 }} className={s.root__filters}>
          <Button
            tag="span"
            onClick={filterModal.openModal}
            className={s.root__button}
            actionSlot={<FilterIcon color="white" />}
          >
            Filters
          </Button>
        </motion.div>
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
