
import className from 'classnames/bind';
import styles from './InfoUser.module.scss';
import images from '~/assets/images';
import { useDispatch} from 'react-redux';
import { logOut } from '~/redux/authSlice';
const cx = className.bind(styles);
const InfoUser = ({menuRef}) => {

    const dispatch = useDispatch();
    const handleClickLogoutUser = () => {
        const email =  localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const token = localStorage.getItem('token');
        if(email !== '' && password !== '' && token !== '') {
            const updateState = {
                email : '',
                password : '',
                token: ''
            }
            dispatch(logOut(updateState));
        }
    };
    return (
        <div ref={menuRef} id='menu-result' className={cx('info-menu')} >
            <div className={cx('info-menu_header')}>
                <img className={cx('info-menu_header-img')} src={images.logo} alt="user"/>
                <a href='/' className={cx('info-menu_logOut')} onClick={handleClickLogoutUser} role='button'>Đăng xuất</a>
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
                        <a href='https://twitter.com' className={cx('info-list_account')}>Tài khoản Todo của tôi</a>
                    </li>
                    <li>
                        <a href='https://twitter.com' className={cx('info-list_file')}>Hồ sơ của tôi</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InfoUser;
