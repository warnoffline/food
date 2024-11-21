import Text from '@/components/Text';
import s from './NotFound.module.scss';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.root}>
      <div className={s.root__img}>
        <img src="404.png" alt="" />
      </div>
      <Text view="p-xxl">404 Not Found</Text>
      <Button onClick={() => navigate('food/')}>Go back</Button>
    </div>
  );
};

export default NotFound;
