import { memo } from 'react';
import Loader from '../Loader';
import Text from '../Text';
import s from './Loading.module.scss';
import cn from 'classnames';

type LoadingParams = {
  page?: boolean;
};

const Loading: React.FC<LoadingParams> = ({ page }) => {
  const loadingClass = cn(s.root, {
    [s.page]: page,
  });

  return (
    <div className={loadingClass}>
      <Loader size={page ? 'xl' : 'l'} color="accent" />
      <Text view="p-xl">Загрузка...</Text>
    </div>
  );
};

export default memo(Loading);
