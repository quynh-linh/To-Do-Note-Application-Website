import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
function Header() {
    const cx = className.bind(styles);
    const[isHoverNavItem,setHoverNavItem] = useState(false);
    const[isHoverNavItemId,setHoverNavItemId] = useState(null);
    const handleMouseEnter = (item) => {
        setHoverNavItemId(item)
        setHoverNavItem(true);
    }
    const handleMouseLeave = () => {
        setHoverNavItem(false);
    }
    const classNameNavItem = className(styles['nav-menu_item'], {
        [styles.selected]: isHoverNavItem,
    });
    const NAV_MENU_ITEMS = [
        {
            id : 0,
            name : 'Teams'
        },
        {
            id : 1,
            name : 'Window'
        },
        {
            id : 2,
            name : 'Surface'
        },
        {
            id : 3,
            name : 'Xbox'
        },
        {
            id : 4,
            name : 'Deals'
        },
    ]
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-left')}>
                <div className={cx('header-logo')}>
                    <Link to='/'>
                        <img className={cx('logo')} src={images.logo} alt="logo"/>
                    </Link>
                </div>
                <ul className={cx('header-nav')}>
                    {
                        NAV_MENU_ITEMS.map((item) => 
                            <li  
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} 
                                key={item.id} 
                                className={cx(isHoverNavItem ? classNameNavItem : 'nav-menu_item')}
                            >
                                {item.name}
                            </li>)
                    }
                </ul>
            </div>
            <div className={cx('header-controls')}>
                <span className={cx('menuItem-control')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </span>
                <span className={cx('menuItem-control')}>
                    <FontAwesomeIcon icon={faCartPlus}/>
                </span>
                <span className={cx('menuItem-control_user')}>
                    <Link className={cx('menuItem-control_user-link')} to={'/login'}>
                        <FontAwesomeIcon icon={faUserCircle}/>
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Header;