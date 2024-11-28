import Button from '@/components/Button';
import FindIcon from '@/components/icons/FindIcon';
import Input from '@/components/Input';
import React, { useCallback, useState } from 'react';
import s from './SearchWinePairing.module.scss';
import { observer } from 'mobx-react-lite';
import { useWineStore } from '../../useWineStore';

const SearchWinePairing: React.FC = observer(() => {
  const { searchStore, setWines, setDescription } = useWineStore();
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

  const handleClear = () => {
    setWines([]);
    setDescription('');
    setValue('');
    searchStore.setQuery('');
  };

  return (
    <div className={s.root}>
      <Input
        text
        className={s.root__input}
        onKeyDown={handleKeyDown}
        value={value}
        onChange={setValue}
        placeholder="Enter food"
      />
      <Button onClick={() => handleQuerySubmit(value)} actionSlot={<FindIcon width={24} height={24} color="white" />} />
      {value && <Button onClick={() => handleClear()}>Clear</Button>}
    </div>
  );
});

export default SearchWinePairing;
