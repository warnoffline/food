import styles from './Header.module.scss';
import Text from '../Text';
import { ROUTES } from '@/configs/routeConfig';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LikeIcon from '../icons/LikeIcon';
import ProfileIcon from '../icons/ProfileIcon';
import classNames from 'classnames';
import { memo } from 'react';

const Header = () => {
  const location = useLocation();

  return (
    <div className={styles['header__wrapper']}>
      <div className={styles['header__content']}>
        <div className={styles['header__content-left']}>
          <Link to="/">
            <div className={styles['header__logo']}>
              <img src="/logo.svg" alt="" />
              <Text view="title">Food Client</Text>
            </div>
          </Link>
          <div className={styles['header__navbar']}>
            {ROUTES.map(
              ({ name, path }) =>
                name && (
                  <NavLink
                    key={name}
                    to={path}
                    className={({ isActive }) =>
                      classNames(styles['header__link'], isActive && styles['header__link--selected'])
                    }
                  >
                    {name}{' '}
                  </NavLink>
                ),
            )}
          </div>
        </div>
        <div className={styles['header__actions']}>
          <Link to="favorites">
            <LikeIcon
              className={styles['header__icon--stroke']}
              width={19}
              height={19}
              color={location.pathname.includes('favorites') ? 'accent' : 'white'}
              strokeWidth={2}
              stroke="accent"
            />
          </Link>
          <Link to="profile">
            <ProfileIcon color="accent" className={styles['header__icon--fill']} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
