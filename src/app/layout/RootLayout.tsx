import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import styles from './RootLayout.module.scss';

const RootLayout = () => {
  return (
    <>
      <Header />
      <img className={styles['background-image']} src="/Pattern.png" alt="" />
      <Outlet />
    </>
  );
};

export default RootLayout;
