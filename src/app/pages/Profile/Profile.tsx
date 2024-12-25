import Text from '@/components/Text';
import s from './Profile.module.scss';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

const Profile: React.FC = observer(() => {
  const { user } = useRootStore();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await user.logout();
    navigate('/auth');
  };

  return (
    <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl">Profile</Text>
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          <Text view="p-xl">
            Email: <b>{user.user}</b>
          </Text>
        </motion.div>
        <motion.div {...animation} transition={{ duration: 0.5, delay: 0.3 }}>
          <Button onClick={handleLogOut}>Exit</Button>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default Profile;
