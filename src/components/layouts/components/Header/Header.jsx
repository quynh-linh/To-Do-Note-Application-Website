import className from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import { Twitter, Facebook, GitHub } from '@mui/icons-material';
import images from '~/assets/images';
import InfoUser from './components/InfoUser/InfoUser';
import Drawer from '../../../Drawer/Drawer';
import ToolControls from './components/ToolControls/ToolControls';
import ToggleSwitch from '~/components/Button/ToggleSwitch/ToggleSwitch';
import WhatNewsItem from './components/WhatNewsItem/WhatNewsItem';
import { DATA_SETTINGS } from '~/const';
function Header() {
    const cx = className.bind(styles);

    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isControls, setIsControls] = useState(false);
    const [numberControls, setNumberControls] = useState(0);
    const menuRef = useRef();
    const imgRef = useRef();

    const handleClickOutside = (event) => {
        const parentElement = event.target.closest('#menu-result');
        if (parentElement !== menuRef.current && event.target !== imgRef.current) {
            setMenuVisible(false);
        }
    };
    const itemClasses = className(styles['wrapper__right-controlsMenu-MenuUser_InfoUser'], {
        [styles.selected]: isMenuVisible,
    });

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        setNumberControls(0);
    };

    const handleClickControls = (item) => {
        setNumberControls(item);
        setIsControls(!isControls);
    };

    const handleCloseDrawer = () => {
        setNumberControls(0);
        setIsControls(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('wrapper__logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="logo" />
                    </Link>
                </div>
                <div className={cx('wrapper__right')}>
                    <div className={cx('wrapper__right-controls')}>
                        <span className={cx('wrapper__right-controls_search')}>
                            <input
                                className={cx('wrapper__right-controls_search-inputSearch')}
                                spellCheck="false"
                                type="text"
                                placeholder="Tìm kiếm"
                                autoComplete="off"
                            />
                        </span>
                    </div>
                    <div className={cx('wrapper__right-controlsMenu')}>
                        <ul className={cx('wrapper__right-controlsMenu-controlsRegion')}>
                            <ToolControls
                                isBool={isControls}
                                isControls={setIsControls}
                                idNumber={numberControls}
                                handleClick={handleClickControls}
                            ></ToolControls>
                        </ul>
                        <div className={cx('wrapper__right-controlsMenu-MenuUser')}>
                            <div className={cx(itemClasses)}>
                                <img
                                    onClick={toggleMenu}
                                    ref={imgRef}
                                    className={cx('wrapper__right-controlsMenu-MenuUser-img')}
                                    src={images.user}
                                    alt="user"
                                />
                            </div>
                            {isMenuVisible && <InfoUser menuRef={menuRef}></InfoUser>}
                        </div>
                    </div>
                </div>
            </header>
            {numberControls === 1 && isControls && (
                <Drawer title="Cài đặt" onClose={handleCloseDrawer}>
                    <div className={cx('wide')}>
                        {DATA_SETTINGS.map((item, index) => {
                            return (
                                <div key={index} className={cx('wide-content')}>
                                    <h4 className={cx('wide-title')}>{item.title}</h4>
                                    {item.item.map((item, index) => {
                                        return (
                                            <div key={index} className={cx('wide-item')}>
                                                <span className={cx('wide-item_name')}>{item.name}</span>
                                                <ToggleSwitch></ToggleSwitch>
                                                {item.hasOwnProperty('description') ? (
                                                    <div className={cx('wide-item_des')}>{item.description}</div>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                        <div>
                            <h4 className={cx('wide-title')}>Kết nối</h4>
                            <div className={cx('wide_contact')}>
                                <a href="https://twitter.com" className={cx('wide_contact-link')}>
                                    <span className={cx('wide_contact-link-twitter')}>
                                        <Twitter className={cx('wide_contact-link-twitter-iconTwitter')}></Twitter>
                                    </span>
                                    <span className={cx('wide_contact-link-label')}>Theo dõi chúng tôi trên Twitter</span>
                                </a>
                                <a href="https://twitter.com" className={cx('wide_contact-link')}>
                                    <span className={cx('wide_contact-link-face')}>
                                        <Facebook className={cx('wide_contact-link-face-iconFace')}></Facebook>
                                    </span>
                                    <span className={cx('wide_contact-link-label')}>Theo dõi chúng tôi trên Facebook</span>
                                </a>
                                <a href="https://twitter.com" className={cx('wide_contact-link')}>
                                    <span className={cx('wide_contact-link-github')}>
                                        <GitHub className={cx('wide_contact-link-github-iconGithub')}></GitHub>
                                    </span>
                                    <span className={cx('wide_contact-link-label')}>Theo dõi chúng tôi trên Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Drawer>
            )}
            {numberControls === 2 && isControls && (
                <Drawer title="Trợ giúp" onClose={handleCloseDrawer}>
                    <div className={cx('wide')}></div>
                </Drawer>
            )}
            {numberControls === 3 && isControls && (
                <Drawer title="Có gì mới" onClose={handleCloseDrawer}>
                    <div className={cx('wide')}>
                        <WhatNewsItem></WhatNewsItem>
                    </div>
                </Drawer>
            )}
        </div>
    );
}
export default Header;
