import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/Button';
import Text from '@/components/Text';
import s from './Form.module.scss';
import Input from '@/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';
import { observer } from 'mobx-react-lite';

interface IFormInput {
  email: string;
  password: string;
}

type FormProps = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

const schema = yup
  .object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  })
  .required();

const Form: React.FC<FormProps> = observer(({ title, handleClick }) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const { user } = useRootStore();

  const onSubmit: SubmitHandler<IFormInput> = (data) => handleClick(data.email, data.password);

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.root__content}>
        <Text view="title">{title}</Text>
        <div>
          <label>Email</label>
          <Input
            placeholder="Enter email"
            background="gray"
            value={watch('email')}
            onChange={(value) => setValue('email', value)}
          />
          {errors.email && <Text className={s.error}>{errors.email.message}</Text>}
        </div>
        <div>
          <label>Password</label>
          <Input
            placeholder="Enter password"
            background="gray"
            type="password"
            value={watch('password')}
            onChange={(value) => setValue('password', value)}
          />
          {errors.password && <Text className={s.error}>{errors.password.message}</Text>}
        </div>
        {user.error && <Text color="red">{user.error}</Text>}
        <Button loading={user.loading} type="submit">
          Send
        </Button>
      </div>
      <div className={s.root__img}>
        <img src="auth.jpg" alt="" />
      </div>
    </form>
  );
});

export default Form;
