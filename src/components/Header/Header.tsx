import s from './Header.module.scss';
import Text from '../Text';
import { NAV_CONFIG } from '@/configs/navConfig';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LikeIcon from '../icons/LikeIcon';
import ProfileIcon from '../icons/ProfileIcon';
import cn from 'classnames';
import { memo } from 'react';
import { useRootStore } from '@/stores/RootStore/hooks/useRootStore';
import LogInIcon from '../icons/LogInIcon/LogInIcon';

const Header = () => {
  const location = useLocation();
  const { user } = useRootStore();

  return (
    <div className={s.root__wrapper}>
      <div className={s.root__content}>
        <div className={s.root__left}>
          <Link to="/">
            <div className={s.root__logo}>
              <img src="/logo.svg" alt="" />
              <Text view="title">Food Client</Text>
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
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
