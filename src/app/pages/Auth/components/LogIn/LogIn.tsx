import { useNavigate } from 'react-router-dom';
import Form from '../Form';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

const LogIn: React.FC = observer(() => {
  const { user } = useRootStore();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    await user.login(email, password);
  };

  useEffect(() => {
    if (user.isAuthenticated) {
      navigate('/profile');
    }
  }, [user.isAuthenticated, navigate]);

  return <Form title="Log In" handleClick={handleLogin} />;
});

export default LogIn;
