import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

import images from '~/assets/images';
import styles from './Header.module.scss'
import { NAV_MENU_ITEMS } from '~/const';
import { Toast } from '~/components/toast';
function Header() {
    const cx = className.bind(styles);
    const[isHoverNavItem,setHoverNavItem] = useState(false);
    const[isHoverNavItemId,setHoverNavItemId] = useState(null);

    // HANDLE WHEN USERS MOUSE IN
    const handleMouseEnter = (item) => {
        setHoverNavItemId(item)
        setHoverNavItem(true);
    };

    // HANDLE WHEN USERS MOUSE OUT
    const handleMouseLeave = () => {
        setHoverNavItem(false);
    };

    //HANDLE CLICK NAV ITEM
    const handleClickNavItem = (e,item) =>{
        e.stopPropagation();
        if(!item.state){
            Toast({type:'info ',title: item.name,position:'bottom-left',autoClose:1000,limit:1,des:'function'});
        }
    };

    // SET CLASS NAME ITEM SELECTED
    const classNameNavItem = className(styles['nav-menu_item'], {
        [styles.selected]: isHoverNavItem,
    });

    return (  
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-left')}>
                <div className={cx('header-logo')}>
                    <Link to='#'>
                        <img className={cx('logo')} src={images.logo} alt="logo"/>
                    </Link>
                </div>
                <ul className={cx('header-nav')}>
                    {
                        NAV_MENU_ITEMS.map((item) => 
                            <li  
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave} 
                                onClick={(e) => handleClickNavItem(e,item)}
                                key={item.id} 
                                className={cx(isHoverNavItemId === item.id ? classNameNavItem : 'nav-menu_item')}
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
                    <Link className={cx('menuItem-control_user-link')}>
                        <FontAwesomeIcon icon={faUserCircle}/>
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Header;