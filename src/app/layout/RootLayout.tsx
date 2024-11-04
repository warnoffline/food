import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import s from './RootLayout.module.scss';

const RootLayout = () => {
  return (
    <>
      <Header />
      <img className={s['background-image']} src="/Pattern.png" alt="" />
      <Outlet />
    </>
  );
};

export default RootLayout;
