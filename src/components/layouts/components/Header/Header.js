import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCaretLeft, faCaretRight,faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import images from '~/assets/images';
const cx = className.bind(styles);
function Header(){
    return(
        <header className={cx('wrapper')}>
            <div  className={cx('wrapper-logo')} >
                <img className={cx('logo')} src={images.logo} alt="logo"/>
            </div>
            <div className={cx('wrapper-controls')}>
                <FontAwesomeIcon className={cx('icon-notification')} icon={faBell}/>
                <div className={cx('wrapper-controls_search')} >
                    <div className={cx('wrapper-controls_back')}>
                        <FontAwesomeIcon className={cx('icon-faCaretLeft')} icon={faCaretLeft}/>
                        <FontAwesomeIcon className={cx('icon-faCaretRight')} icon={faCaretRight}/>
                    </div>
                    <input className={cx('input-search')} type="text" placeholder="Search"/>
                </div>
            </div>
            <div className={cx('controls-menu')}>
                <button className={cx('controls-menu_btn')}> 
                    <FontAwesomeIcon className={cx('icon-faPlus')} icon={faPlus}/>
                    Create
                </button>
                <img className={cx('controls-menu_user')} src={images.user} alt="user"/>
            </div>
        </header>
    )
}
export default Header;