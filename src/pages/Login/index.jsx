import Form from '~/components/Form/Form';
import className from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthInput from '~/components/input/auth';
import PassWordLogin from './PasswordLogin/PasswordLogin';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '~/redux/authSlice';
import AuthLoading from '~/components/layouts/components/LoadingPage/authLoading';
import { Toast } from '~/components/toast';
function Login() {
    const cx = className.bind(styles);
    const [isValidError, setValidError] = useState(''); 
    const [inputEmailValue,setInputEmailValue] = useState('nguyenthanhquynhlinh@gmail.com');
    const [openFormLogin,setOpenFormLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    //  REDUX TOOLKIT
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    // HANDLE CLICK TO PASS LOGIN LAYOUT
    const handleClickToPassWordLogin = (e) => {
        e.preventDefault(); 
        if(inputEmailValue !== ''){
            setIsLoading(true);
            dispatch(signInUser());
        } else {
            setValidError('Không được để trống email!');
        }
    };

    // HANDLING UNDEVELOPED FUNCTION
    const handleNotSuccessFunction = () => {
        Toast({type:'error',title: '',position:'top-right',autoClose:3000,limit:1,des:'function'});
    };

    useEffect(() => {
        const localEmail = localStorage.getItem('email');
        if(openFormLogin){
            if(auth.msg === 'success'){
                if(localEmail === inputEmailValue){
                    const timer = setTimeout(() => {
                        setIsLoading(false);
                        setOpenFormLogin(false);
                    }, 2000);
                    return () => clearTimeout(timer);
                } else {
                    setValidError('Email không tồn tại!');
                }
            }
        }
    }, [auth.msg,isValidError]); 
    
    return ( 
        openFormLogin ? (
            <div className={cx('wrapper')}>
                <Form action={'POST'} title={'Đăng nhập'} validError={isValidError}>
                    <AuthInput
                        nameInput = 'username'
                        typeInput="email"
                        placeholder="Email, Điện thoại hoặc Skype"
                        validInput={(e) => setInputEmailValue(e)}
                        isValidError={(e) => setValidError(e)}
                        localStorageValue = {inputEmailValue}
                    />
                    <div>
                        <div className={cx('question-register')}>
                            <p>Bạn không có tài khoản?</p>
                            <Link className={cx('to-register')} onClick={handleNotSuccessFunction}>
                                Hãy tạo tài khoản!
                            </Link>
                        </div>
                        <div className={cx('new-email')} onClick={handleNotSuccessFunction}> Bạn không truy cập vào được tài khoản?</div>
                    </div>
                    <div className={cx('wrapper-input')}>
                    </div>
                    <div className={cx('wrapper-btn')}>
                        <button type='submit' onClick={handleClickToPassWordLogin}>Tiếp theo</button>
                    </div>
                    {
                        isLoading ? <AuthLoading/> : ''
                    }
                </Form>
                {
                    isLoading ? (
                        <div className={cx('box-shadow')}></div>
                    ) : ''
                }
            </div>
        ) : (
            <PassWordLogin/>
        )
     );
}

export default Login;