import className from 'classnames/bind';
import Form from '~/components/Form/Form';
import styles from './PasswordLogin.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '~/redux/authSlice';
import AuthInput from '~/components/input/auth';
import { useNavigate } from 'react-router-dom';
function PassWordLogin({email}) {
    const cx = className.bind(styles);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [validError, setValidError] = useState('');
    const [inputPasswordValue,setInputPasswordValue] = useState('');
    const signInHandleUser = (event) => {
        event.preventDefault();
        dispatch(signInUser({email,inputPasswordValue}));
    };
    useEffect(()=> {
        if(auth.msg === 'successful'){
            setValidError('');
        } else {
            if(auth.msg !== ""){
                setValidError(auth.msg);
                if(auth.msg === 'Login successful'){
                    navigate('/overview');
                }
            }
        }  
    },[auth.error,auth.msg,navigate])
    return (  
        <Form title={'Nhập mật khẩu'} validError={validError}>
            <AuthInput nameInput='password' typeInput="password" placeholder="Nhập mật khẩu" validError={(e) => setValidError(e)} validInput={(e) => setInputPasswordValue(e)}/>
            <div className={cx('forgot-password')}>Quên mật khẩu?</div>
            <div className={cx('wrapper-btn')}>
                <button onClick={signInHandleUser}  type='submit'>Đăng nhập</button>
            </div>
        </Form>
    );
}

export default PassWordLogin;