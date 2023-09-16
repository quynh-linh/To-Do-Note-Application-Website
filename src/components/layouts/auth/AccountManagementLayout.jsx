import className from 'classnames/bind';
import styles from './AccountManagementLayout.module.scss'
import images from '~/assets/images';
function AccountManagementLayout({children}) {
    const cx = className.bind(styles);
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-container')}> 
                <img className={cx('img-left')} src={images.wrapper_left} alt="img-left"/>
                <img className={cx('img-right')} src={images.wrapper_right} alt="img-right"/>
            </div>
            <div className={cx('wrapper-box')}>
                {children}
            </div>
        </div>
    );
}

export default AccountManagementLayout;