import className from 'classnames/bind';
import Form from '~/components/Form/Form';
import styles from './PasswordLogin.module.scss';
import { useState } from 'react';
import AuthInput from '~/components/input/auth';
import { useNavigate } from 'react-router-dom';
import { Toast } from '~/components/toast';
function PassWordLogin() {
    const cx = className.bind(styles);
    const navigate = useNavigate();
    const [validError, setValidError] = useState('');
    const [inputPasswordValue,setInputPasswordValue] = useState('f5NfCjVTvM7B5Hi');
    
    // HANDLE SIGN IN 
    const signInHandleUser = () => {
        const localPassword = localStorage.getItem('password');
        if(inputPasswordValue === localPassword){
            navigate('/overview');
        } else {
            setValidError('Sai mật khẩu!');
        }
    };

    // HANDLING UNDEVELOPED FUNCTION
    const handleNotSuccessFunction = () => {
        Toast({type:'error',title: '',position:'top-right',autoClose:3000,limit:1,des:'function'});
    };

    return (  
        <Form title={'Nhập mật khẩu'} validError={validError}>
            <AuthInput 
                nameInput='password' 
                typeInput="password" 
                placeholder="Nhập mật khẩu" 
                validError={(e) => setValidError(e)} 
                validInput={(e) => setInputPasswordValue(e)}
                localStorageValue = {inputPasswordValue}
            />
            <div className={cx('forgot-password')} onClick={handleNotSuccessFunction}>Quên mật khẩu?</div>
            <div className={cx('wrapper-btn')}>
                <button onClick={signInHandleUser}  type='button'>Đăng nhập</button>
            </div>
        </Form>
    );
}

export default PassWordLogin;