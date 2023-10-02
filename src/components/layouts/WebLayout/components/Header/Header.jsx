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
function Header({onScroll=0}) {
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
        if(item.state === false){
            Toast({type:'info',title: item.name,position:'bottom-left',autoClose:1000,limit:1,des:'function'});
        }
    };

    // HANDLE CLICK DOWNLOAD APP
    const handleCLickDownLoadApp = () => {
        Toast({type:'info',title: "Tải xuống",position:'bottom-left',autoClose:1000,limit:1,des:'function'});
    };

    // SET CLASS NAME ITEM SELECTED
    const classNameNavItem = className(styles['wrapper__container-left-nav-item'], {
        [styles.selected]: isHoverNavItem,
    });

    return (  
        <div className={cx('wrapper',onScroll > 250 ? 'scroll' : '')}>
            {
                onScroll < 250 ? (
                    <div  className={cx('wrapper__container')}>
                        <div className={cx('wrapper__container-left')}>
                            <div className={cx('wrapper__container-left-logo')}>
                                <Link to='/'>
                                    <img className={cx('wrapper__container-left-logo-img')} src={images.logo} alt="logo"/>
                                </Link>
                            </div>
                            <ul className={cx('wrapper__container-left-nav')}>
                                {
                                    NAV_MENU_ITEMS.map((item) =>
                                        <li
                                            onMouseEnter={() => handleMouseEnter(item.id)}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={(e) => handleClickNavItem(e,item)}
                                            key={item.id}
                                            className={cx(isHoverNavItemId === item.id ? classNameNavItem : 'wrapper__container-left-nav-item')}
                                        >
                                            {item.name}
                                        </li>)
                                }
                            </ul>
                        </div>
                        <div className={cx('wrapper__container-controls')}>
                            <span className={cx('wrapper__container-controls-item')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </span>
                            <span className={cx('wrapper__container-controls-item')}>
                                <FontAwesomeIcon icon={faCartPlus}/>
                            </span>
                            <span className={cx('wrapper__container-controls_user')}>
                                <Link className={cx('wrapper__container-controls_user-link')}>
                                    <FontAwesomeIcon icon={faUserCircle}/>
                                </Link>
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className={cx('wrapper__scroll')}>
                        <div className={cx('wrapper__scroll-title')}>
                            <span>Quynh Linh ToDo</span>
                        </div>
                        <div className={cx('wrapper__scroll-menu')}>
                            <div className={cx('wrapper__scroll-menu-openApp')}>
                                <Link to={'/'} className={cx('wrapper__scroll-menu-openApp-link')}>
                                    Mở ứng dụng web
                                </Link>
                            </div>
                            <div className={cx('wrapper__scroll-menu-downloadApp')}>
                                <Link to={''} className={cx('wrapper__scroll-menu-downloadApp-link')} onClick={handleCLickDownLoadApp}>
                                    Tải xuống ứng dụng
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Header;