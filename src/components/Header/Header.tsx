import styles from './Header.module.scss';
import Text from '../Text';
import { NAVBAR_ACTIONS } from './lib/NAVBAR_ACTIONS';
import { Link, useLocation } from 'react-router-dom';
import LikeIcon from '../icons/LikeIcon';
import ProfileIcon from '../icons/ProfileIcon';
const Header = () => {
  const location = useLocation();
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['header-content']}>
        <div className={styles['header-content-left']}>
          <Link to="/">
            <div className={styles['header-content-left--logo']}>
              <img src="/logo.svg" alt="" />
              <Text view="title">Food Client</Text>
            </div>
          </Link>
          <div className={styles['header-content-left--navbar']}>
            {NAVBAR_ACTIONS.map((item) => (
              <Link key={item.name} to={item.path}>
                <Text
                  className={styles['navbar-link']}
                  weight={location.pathname === item.path ? 'semiBold' : 'normal'}
                  view="p-16"
                  color={location.pathname === item.path ? 'accent' : 'primary'}
                >
                  {item.name}{' '}
                </Text>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles['header-content--actions']}>
          <Link to="favorites">
            <LikeIcon
              className={styles['header-icon-stroke']}
              width={19}
              height={19}
              color={location.pathname.includes('favorites') ? 'accent' : 'white'}
              strokeWidth={2}
              stroke="accent"
            />
          </Link>
          <Link to="profile">
            <ProfileIcon color="accent" className={styles['header-icon-fill']} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
