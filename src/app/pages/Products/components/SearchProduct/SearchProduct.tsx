import Button from '@/components/Button';
import FindIcon from '@/components/icons/FindIcon';
import Input from '@/components/Input';
import React, { useCallback, useMemo, useState } from 'react';
import s from './SearchProduct.module.scss';
import { observer } from 'mobx-react-lite';
import { useProductsStore } from '../../useProductsStore';

const SearchProduct: React.FC = observer(() => {
  const { searchStore, setProducts, resetPage } = useProductsStore();
  const [value, setValue] = useState<string>(searchStore.query);

  const regex = useMemo(() => /^[A-Za-zА-Яа-я\s,]+$/, []);

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

  const handleQueryChange = useCallback(
    (value: string) => {
      if (regex.test(value) || value === '') {
        setValue(value);
      }
    },
    [regex],
  );

  const handleClear = () => {
    setProducts([]);
    setValue('');
    resetPage();
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
      <Button onClick={() => handleQuerySubmit(value)} actionSlot={<FindIcon width={24} height={24} color="white" />} />
      {value && <Button onClick={() => handleClear()}>Clear</Button>}
    </div>
  );
});

export default SearchProduct;
