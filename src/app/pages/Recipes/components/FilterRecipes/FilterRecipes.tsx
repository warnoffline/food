import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import FindIcon from '../../../../../components/icons/FindIcon/FindIcon';
import ArrowDownIcon from '../../../../../components/icons/ArrowDownIcon';
import styles from './FilterRecipes.module.scss';
import { useState } from 'react';

const FilterRecipes = () => {
  const [find, setFind] = useState('');
  const [filter, setFilter] = useState('');
  return (
    <div className={styles['recipes-center-filter']}>
      <div className={styles['recipes-center-filter--find']}>
        <Input className={styles['recipes-center-input']} value={find} onChange={setFind} placeholder="Enter dishes" />
        <Button>
          <FindIcon width={24} height={24} color="white" />
        </Button>
      </div>
      <div className={styles['recipes-center-filter--select']}>
        <Input
          placeholder="Categories"
          value={filter}
          onChange={setFilter}
          afterSlot={<ArrowDownIcon color="secondary" />}
        />
      </div>
    </div>
  );
};

export default FilterRecipes;
