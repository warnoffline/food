import Button from '@/components/Button';
import FindIcon from '@/components/icons/FindIcon';
import Input from '@/components/Input';
import React, { memo, useState } from 'react';
import s from './SearchIngredient.module.scss';

type SearchIngredientProps = {
  handleQuerySubmit: (query: string) => void;
};

const SearchIngredient: React.FC<SearchIngredientProps> = ({ handleQuerySubmit }) => {
  const [value, setValue] = useState<string>(sessionStorage.getItem('ingredient-query') || '');

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleQuerySubmit(value);
    }
  };

  const handleClear = () => {
    sessionStorage.setItem('ingredient-query', '');
    setValue('');
    handleQuerySubmit('');
  };

  return (
    <div className={s.root}>
      <Input
        className={s.root__input}
        onKeyDown={handleKeyDown}
        value={value}
        onChange={setValue}
        placeholder="Enter ingredient"
      />
      <Button onClick={() => handleQuerySubmit(value)}>
        <FindIcon width={24} height={24} color="white" />
      </Button>
      {value && <Button onClick={() => handleClear()}>Clear</Button>}
    </div>
  );
};

export default memo(SearchIngredient);
