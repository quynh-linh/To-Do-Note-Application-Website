
import className from 'classnames/bind';
import styles from './InfoUser.module.scss';
import images from '~/assets/images';
const cx = className.bind(styles);
const InfoUser = ({menuRef}) => {
    return (
        <div ref={menuRef} id='menu-result' className={cx('info-menu')} >
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
    );
};

export default InfoUser;
