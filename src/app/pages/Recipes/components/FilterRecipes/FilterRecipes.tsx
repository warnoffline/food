import Input from '@/components/Input';
import Button from '@/components/Button';
import FindIcon from '@/components/icons/FindIcon';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';
import styles from './FilterRecipes.module.scss';
import React, { memo, useState } from 'react';

const FilterRecipes: React.FC = () => {
  const [find, setFind] = useState('');
  const [filter, setFilter] = useState('');

  return (
    <div className={styles['filter-recipes']}>
      <div className={styles['filter-recipes__find']}>
        <Input className={styles['filter-recipes__input']} value={find} onChange={setFind} placeholder="Enter dishes" />
        <Button>
          <FindIcon width={24} height={24} color="white" />
        </Button>
      </div>
      <div className={styles['filter-recipes__select']}>
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

export default memo(FilterRecipes);
