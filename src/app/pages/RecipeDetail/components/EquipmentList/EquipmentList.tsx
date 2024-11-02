import Text from '@/components/Text';
import { EquipmentById } from '@/types/recipes';
import LadelIcon from '@/components/icons/LadleIcon';
import styles from './EquipmentList.module.scss';

const EquipmentList: React.FC<{ equipments: EquipmentById }> = ({ equipments }) => {
  return (
    <div className={styles['recipe-center-list--equipments']}>
      <Text view="p-20" weight="semiBold">
        Equipment
      </Text>
      <div className={styles['equipments']}>
        {equipments.equipment.map((item) => (
          <div key={item.name} className={styles['recipe-equipment']}>
            <div>
              <LadelIcon width={24} height={24} color="accent" />
            </div>
            <Text view="p-16">{item.name}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentList;
