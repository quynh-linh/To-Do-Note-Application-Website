import className from 'classnames/bind';
import { useRef, useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faNewspaper, faQuestion } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss'
import images from '~/assets/images';
import InfoUser from './components/InfoUser/InfoUser';
import Drawer from './components/Drawer/Drawer';
import ToolControls from './components/ToolControls/ToolControls';
import 'tippy.js/dist/tippy.css';

function Header(){
    const cx = className.bind(styles);

    const [isMenuVisible, setMenuVisible] = useState(false);
    const [numberControls, setNumberControls] = useState(0);
    const [isControls, setIsControls] = useState(false);
    const menuRef = useRef();
    const imgRef = useRef();

    const handleClickOutside = (event) => {
        const parentElement = event.target.closest('#menu-result');
        if (parentElement !== menuRef.current && event.target !== imgRef.current) {
            setMenuVisible(false);
        }
    };
    const itemClasses = className(styles['info-menu_user'], {
        [styles.selected]: isMenuVisible,
    });
    
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        setNumberControls(0)
    };

    const handleClickControls = (item) => {
        setNumberControls(item)
        setIsControls(!isControls)
    }

    const handleCloseDrawer = () => {
        setNumberControls(0)
        setIsControls(false)
    }
    console.log(isControls)

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    return(
        <div>
            <header className={cx('wrapper')}>
                <div  className={cx('wrapper-logo')} >
                    <img className={cx('logo')} src={images.logo} alt="logo"/>
                </div>
                <div className={cx('wrapper-right')}>
                    <div className={cx('wrapper-controls')}>
                        <span className={cx('wrapper-controls_search')} >
                            <input className={cx('input-search')} spellCheck="false" type="text" placeholder="Tìm kiếm" autoComplete="off"/>
                        </span>
                    </div>
                    <div className={cx('controls-menu')}>
                        <ul className={cx('controls-region')}>
                            <ToolControls isBool={isControls} isControls={setIsControls}  idNumber={numberControls} handleClick={handleClickControls}></ToolControls>
                        </ul>
                        <div className={cx('menu_user')}>
                            <div className={cx(itemClasses)} >
                                <img onClick={toggleMenu}  ref={imgRef} className={cx('controls-menu_user')} src={images.user} alt="user"/>
                            </div>
                            {
                                isMenuVisible && (
                                    <InfoUser menuRef={menuRef}></InfoUser>
                                )
                            }
                        </div>
                    </div>
                </div>
            </header>
            {
                (numberControls === 1 && isControls) && (
                    <Drawer title="Cài đặt" onClose={handleCloseDrawer}>
                        <div className={cx('wide')}>

                        </div>
                    </Drawer>
                )
            } 
            {
                (numberControls === 2 && isControls) && (
                    <Drawer title="Trợ giúp" onClose={handleCloseDrawer}>
                        <div className={cx('wide')}>

                        </div>
                    </Drawer>
                )
            } 
            {
                (numberControls === 3 && isControls) && (
                    <Drawer title="Có gì mới" onClose={handleCloseDrawer}>
                        <div className={cx('wide')}>

                        </div>
                    </Drawer>
                )
            } 
        </div>
    )
}
export default Header;