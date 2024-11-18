import { useNavigate } from 'react-router-dom';
import Form from '../Form';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

const SignUp: React.FC = observer(() => {
  const { user } = useRootStore();
  const navigate = useNavigate();

  const handleSignUp = async (email: string, password: string) => {
    await user.signUp(email, password);
  };

  useEffect(() => {
    if (user.isAuthenticated) {
      navigate('/profile');
    }
  }, [user.isAuthenticated, navigate]);

  return <Form title="Sign Up" handleClick={handleSignUp} />;
});

export default SignUp;
