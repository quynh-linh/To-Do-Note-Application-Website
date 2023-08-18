import className from 'classnames/bind';
import styles from './AccountManagementLayout.module.scss'
import images from '~/assets/images';
function AccountManagementLayout({children}) {
    const cx = className.bind(styles);
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-container')}> 
                <div className={cx('wrapper-left')}>
                    <img className={cx('img-left')} src={images.wrapper_left} alt="img-left"/>
                </div>
                <div className={cx('wrapper-right')}>
                    <img className={cx('img-right')} src={images.wrapper_right} alt="img-right"/>
                </div>
            </div>
            <div className={cx('wrapper-box')}>
                {children}
            </div>
        </div>
    );
}

export default AccountManagementLayout;