import className from 'classnames/bind';
import styles from './Header.module.scss'
function Header() {
    const cx = className.bind(styles);
    return (  
        <div className={cx('wrapper')}>
            My Header
        </div>
    );
}

export default Header;