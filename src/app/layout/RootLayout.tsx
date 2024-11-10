import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import s from './RootLayout.module.scss';
import { useQueryParamsStoreInit } from '@/stores/RootStore/hooks/useQueryParamsStoreInit';

const RootLayout = () => {
  useQueryParamsStoreInit();

  return (
    <>
      <Header />
      <img className={s['background-image']} src="/Pattern.png" alt="" />
      <Outlet />
    </>
  );
};

export default RootLayout;
