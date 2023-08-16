import className from 'classnames/bind';
import styles from './Footer.module.scss'
function Footer() {
    const cx = className.bind(styles);
    return (  
        <div className={cx('wrapper')}>
            My Footer
        </div>
    );
}

export default Footer;