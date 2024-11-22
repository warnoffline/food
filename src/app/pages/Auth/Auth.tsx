import { useCallback, useState } from 'react';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Text from '@/components/Text';
import s from './Auth.module.scss';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import { animation } from '@/configs/animationConfig';

const Auth: React.FC = observer(() => {
  const { user } = useRootStore();
  const [isLogIn, setIsLogIn] = useState<boolean>(true);

  const handleAuth = useCallback(() => {
    user.setError('');
    setIsLogIn(!isLogIn);
  }, [isLogIn, user]);

  return (
    <div className={s.root}>
      <motion.div {...animation} transition={{ duration: 0.5, delay: 0.1 }} className={s.root__center}>
        {isLogIn ? <LogIn /> : <SignUp />}
        <div className={s.root__footer}>
          <Text>{isLogIn ? `Don't have an account yet?` : 'Already have an account?'}</Text>
          <button onClick={handleAuth}>{isLogIn ? 'Sign Up' : 'Log In'}</button>
        </div>
      </motion.div>
    </div>
  );
});

export default Auth;
