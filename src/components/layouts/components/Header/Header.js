import className from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faNewspaper, faQuestion } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss'
import images from '~/assets/images';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';


function Header(){
    const cx = className.bind(styles);
    const [isMenuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        console.log(isMenuVisible)
      };
    return(
        <header className={cx('wrapper')}>
            <div  className={cx('wrapper-logo')} >
                <img className={cx('logo')} src={images.logo} alt="logo"/>
            </div>
            <div className={cx('wrapper-right')}>
                <div className={cx('wrapper-controls')}>
                    <span className={cx('wrapper-controls_search')} >
                        <input className={cx('input-search')} spellCheck="false" type="text" placeholder="Tìm kiếm"/>
                    </span>
                </div>
                <div className={cx('controls-menu')}>
                    <ul className={cx('controls-region')}>
                        <Tippy  content="Cài đặt">
                            <li className={cx('controls-menu_btn')}>
                                <FontAwesomeIcon className={cx('icon-faPlus')} icon={faGear}/>
                            </li>
                        </Tippy>
                        <Tippy content="Trợ giúp & phản hồi">
                            <li className={cx('controls-menu_btn')}>
                                <FontAwesomeIcon className={cx('icon-faPlus')} icon={faQuestion}/>
                            </li>
                        </Tippy>
                        <Tippy content="Có gì mới !">
                            <li className={cx('controls-menu_btn')}>
                                <FontAwesomeIcon className={cx('icon-faPlus')} icon={faNewspaper}/>
                            </li>
                        </Tippy>
                    </ul>
                    <Tippy
                        interactive = {true}
                        visible ={isMenuVisible}
                        onHide={() => setMenuVisible(false)}
                        render={(attrs) => (
                            <div className={cx('info-menu')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <div >
                                        <div className={cx('info-menu_header')}>
                                            <img className={cx('info-menu_header-img')} src={images.logo} alt="user"/>
                                            <a href='' className={cx('info-menu_logOut')} role='button'>Đăng xuất</a>
                                        </div>
                                        <div className={cx('menu_header-list')}>
                                            <div className={cx('header-list_img')}>
                                                <img className={cx('header-list_imgUser')} src={images.user} alt="user"/>
                                            </div>
                                            <ul>
                                                <li>
                                                    <h4 className={cx('info-list_name')}>Nguyễn Thanh Quỳnh Linh</h4>
                                                </li>
                                                <li>
                                                    <h6 className={cx('info-list_email')}>nguyenthanhquynhlinh@gmail.com</h6>
                                                </li>
                                                <li>
                                                    <a className={cx('info-list_account')} href=''>Tài khoản Todo của tôi</a>
                                                </li>
                                                <li>
                                                    <a className={cx('info-list_file')} href=''>Hồ sơ của tôi</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <button className={cx('info-menu_user')} onClick={toggleMenu}>
                            <img className={cx('controls-menu_user')} src={images.user} alt="user"/>
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    )
}
export default Header;