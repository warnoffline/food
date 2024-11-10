import Button from '@/components/Button';
import FindIcon from '@/components/icons/FindIcon';
import Input from '@/components/Input';
import React, { memo, useCallback, useMemo, useState } from 'react';
import s from './SearchIngredient.module.scss';
import SearchIngredientStore from '@/stores/IngredientStore/SearchIngredientStore/SearchIngredientStore';
import { observer } from 'mobx-react-lite';

const SearchIngredient: React.FC = observer(() => {
  const searchStore = SearchIngredientStore;
  const [value, setValue] = useState<string>(SearchIngredientStore.query);

  const regex = useMemo(() => /^[A-Za-zА-Яа-я\s,]+$/, []);

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
      <Input
        className={s.root__input}
        onKeyDown={handleKeyDown}
        value={value}
        onChange={handleQueryChange}
        placeholder="Enter ingredient"
      />
      <Button onClick={() => handleQuerySubmit(value)}>
        <FindIcon width={24} height={24} color="white" />
      </Button>
      {value && <Button onClick={() => handleClear()}>Clear</Button>}
    </div>
  );
});

export default memo(SearchIngredient);
