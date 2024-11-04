import Text from '@/components/Text';
import { EquipmentById } from '@/types/recipes';
import LadelIcon from '@/components/icons/LadleIcon';
import styles from './EquipmentList.module.scss';
import React, { memo } from 'react';

type EquipmentListProps = {
  equipments: EquipmentById;
};

const EquipmentList: React.FC<EquipmentListProps> = ({ equipments }) => {
  return (
    <div className={styles['equipment-list']}>
      <Text view="p-xl" weight="semiBold">
        Equipment
      </Text>
      <div className={styles['equipment-list__items']}>
        {equipments.equipment.map(({ name }) => (
          <div key={name} className={styles['equipment-list__item']}>
            <div>
              <LadelIcon width={24} height={24} color="accent" />
            </div>
            <Text view="p-m">{name}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(EquipmentList);
