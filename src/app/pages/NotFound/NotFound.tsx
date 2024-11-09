import Text from '@/components/Text';
import s from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.root__img}>
        <img src="/404.png" alt="" />
      </div>
      <Text view="p-xxl">404 Not Found</Text>
    </div>
  );
};

export default NotFound;
