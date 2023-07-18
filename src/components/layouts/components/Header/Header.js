import className from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faNewspaper, faQuestion } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';// optional


function Header(){
    const cx = className.bind(styles);
    const element = document.querySelector('input-search');
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return(
        <header className={cx('wrapper')}>
            <div  className={cx('wrapper-logo')} >
                <img className={cx('logo')} src={images.logo} alt="logo"/>
            </div>
            <div className={cx('wrapper-right')}>
                <div className={cx('wrapper-controls')}>
                    <span className={cx('wrapper-controls_search')} >
                        <input className={cx('input-search')} spellCheck="false" type="text" placeholder="Tìm kiếm" value={value} onChange={handleChange}/>
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
                    <img className={cx('controls-menu_user')} src={images.user} alt="user"/>
                </div>
            </div>
        </header>
    )
}
export default Header;