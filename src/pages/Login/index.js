import className from 'classnames/bind';
import styles from './Login.module.scss'
import { Wrapper } from '~/components/Popper';
import images from '~/assets/images';
function Login() {
    const cx = className.bind(styles);
    return ( 
        <form action='#' className={cx('wrapper')}>
            <Wrapper>
                <div className={cx('wrapper-content')}>
                    <div className={cx('wrapper-logo')}>
                        <img className={cx('logo')} src={images.logo_Second} alt='Logo'></img>
                    </div>
                    <div className={cx('wrapper-logo')}>Tạo tài khoản</div>
                    <div className={cx('wrapper-input')}>
                        <input placeholder='abc@example.com'></input>
                    </div>
                    <div className={cx('change-phone')}>Sử dụng số điện thoại thay vào đó</div>
                    <div className={cx('new-email')}> Nhập địa chỉ email mới</div>
                    <div className={cx('wrapper-btn')}>
                        <button type='submit'>Tiếp theo</button>
                    </div>
                </div>
            </Wrapper>
        </form>
     );
}

export default Login;