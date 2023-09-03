import Form from '~/components/Form/Form';
import className from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthInput from '~/components/input/auth';
import PassWordLogin from './PasswordLogin/PasswordLogin';
import { useDispatch, useSelector } from 'react-redux';
import { emailUser } from '~/components/redux/authSlice';
function Login() {
    const cx = className.bind(styles);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [isValidError, setValidError] = useState(''); 
    const [inputEmailValue,setInputEmailValue] = useState('');
    const [openFormLogin,setOpenFormLogin] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const handleClickToPassWordLogin = (e) => {
        e.preventDefault(); 
        dispatch(emailUser({inputEmailValue}));
    };
    useEffect(() => {
        if(auth.msg === 'Login successful'){
            setValidError('');
        } else {
            if (auth.msg !== '') {
                setValidError(auth.msg);
                if (auth.msg === 'successful' && isValidEmail) {
                    setOpenFormLogin(false);
                }
            }
        } 
    }, [auth.error, auth.msg,isValidEmail]);
    return ( 
        openFormLogin ? (
            <Form action={'POST'} title={'Đăng nhập'} validError={isValidError}>
                <AuthInput 
                    nameInput = 'username'
                    typeInput="email" 
                    placeholder="Email, Điện thoại hoặc Skype" 
                    validError={(e) => setValidError(e)} 
                    validInput={(e) => setInputEmailValue(e)} 
                    checkEmail={(e) => setIsValidEmail(e)}
                />
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
                    <button type='submit' onClick={handleClickToPassWordLogin}>Tiếp theo</button>
                </div>
            </Form>
        ) : (
            <PassWordLogin email={inputEmailValue}/>
        )
     );
}

export default Login;