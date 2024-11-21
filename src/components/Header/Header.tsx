import s from './Header.module.scss';
import Text from '../Text';
import { NAV_CONFIG } from '@/configs/navConfig';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LikeIcon from '../icons/LikeIcon';
import ProfileIcon from '../icons/ProfileIcon';
import cn from 'classnames';
import { memo, useEffect, useState } from 'react';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';
import LogInIcon from '../icons/LogInIcon/LogInIcon';
import BurgerIcon from '../icons/BurgerIcon';
import CloseIcon from '../icons/CloseIcon';

const Header = () => {
  const location = useLocation();
  const { user } = useRootStore();
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsBurgerOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  return (
    <div className={s.root__wrapper}>
      <div className={s.root__content}>
        <div className={s.root__left}>
          <Link to="/">
            <div className={s.root__logo}>
              <img src="/logo.svg" alt="" />
              <Text className={s['root__logo-text']} view="title">
                Food Client
              </Text>
            </div>
          </Link>
          <div className={s.root__navbar}>
            {NAV_CONFIG.map(
              ({ name, path }) =>
                name && (
                  <NavLink
                    key={name}
                    to={path}
                    className={({ isActive }) => cn(s.root__link, isActive && s['root__link-selected'])}
                  >
                    {name}{' '}
                  </NavLink>
                ),
            )}
          </div>
        </div>
        <div className={s.root__actions}>
          <Link to="favorites">
            <LikeIcon
              className={s['root__icon-stroke']}
              width={19}
              height={19}
              color={location.pathname.includes('favorites') ? 'accent' : 'white'}
              strokeWidth={2}
              stroke={location.pathname.includes('favorites') ? 'accent' : 'secondary'}
            />
          </Link>
          {user.isAuthenticated ? (
            <Link to="profile">
              <ProfileIcon
                color={location.pathname.includes('profile') ? 'accent' : 'secondary'}
                className={s['root__icon-fill']}
              />
            </Link>
          ) : (
            <Link to="auth">
              <LogInIcon stroke={location.pathname.includes('auth') ? 'accent' : 'secondary'} />
            </Link>
          )}
          {isMobile && (
            <div onClick={toggleBurgerMenu}>
              {isBurgerOpen ? <CloseIcon color="secondary" /> : <BurgerIcon stroke="secondary" />}
            </div>
          )}
        </div>
      </div>
      {isBurgerOpen && isMobile && (
        <div className={s.root__burgerMenu}>
          {NAV_CONFIG.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) => cn(s.root__link, isActive && s['root__link-selected'])}
            >
              {name}{' '}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Header);
