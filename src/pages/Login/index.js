import Form from '~/components/Form/Form';
import className from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InputAccountManagement from '~/components/input/InputAccountManagement';
import PassWordLogin from './PasswordLogin/PasswordLogin';
function Login() {
    const cx = className.bind(styles);
    const [isValidError, setValidError] = useState(''); 
    const [inputEmailValue,setInputEmailValue] = useState('');
    const [openFormLogin,setOpenFormLogin] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const handleChangeError = (event) => {
        setValidError(event);
    };
    const handleClickToPassWordLogin = () => {
        if(inputEmailValue !== ''){
            if(isValidEmail){
                setOpenFormLogin(false);
            } else {
                setValidError('Vui lòng nhập một địa chỉ email hợp lệ');
            }
        } else {
            setValidError('Cần nhập địa chỉ email');
        }
    };
    const handleCheckEmail = (email) => {
        setIsValidEmail(email);
    };
    const handleValidInput = (event) => {
        setInputEmailValue(event);
    };
    return ( 
        openFormLogin ? (
            <Form title={'Đăng nhập'} validError={isValidError}>
                <InputAccountManagement placeholder="Email, Điện thoại hoặc Skype" validError={handleChangeError} validInput={handleValidInput} checkEmail={handleCheckEmail}/>
                <div>
                    <div className={cx('question-register')}>
                        <p>Bạn không có tài khoản?</p>
                        <Link className={cx('to-register')} to='/register'>
                            Hãy tạo tài khoản!
                        </Link>
                    </div>
                    <div className={cx('new-email')}> Bạn không truy cập vào được tài khoản?</div>
                </div>
                <div className={cx('wrapper-input')}>
                </div>
                <div className={cx('wrapper-btn')}>
                    <button type='button' onClick={handleClickToPassWordLogin}>Tiếp theo</button>
                </div>
            </Form>
        ) : (
            <PassWordLogin/>
        )
     );
}

export default Login;