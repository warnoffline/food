import Text from '@/components/Text';
import s from './Profile.module.scss';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = observer(() => {
  const { user } = useRootStore();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await user.logout();
    navigate('/auth');
  };

  return (
    <div className={s.root}>
      <div className={s.root__center}>
        <Text view="p-xxl">Profile</Text>
        <Text view="p-xl">
          Email: <b>{user.user}</b>
        </Text>
        <div>
          <Button onClick={handleLogOut}>Exit</Button>
        </div>
      </div>
    </div>
  );
});

export default Profile;
